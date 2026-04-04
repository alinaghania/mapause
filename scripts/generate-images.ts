import { GoogleGenAI } from "@google/genai";
import * as fs from "fs";
import * as path from "path";

const client = new GoogleGenAI({
  vertexai: true,
  project: "dircab-466608",
  location: "global",
});

const MODEL = "gemini-3.1-flash-image-preview";

interface TopConfig {
  inputPath: string;
  outputName: string;
  prompt: string;
}

const tops: TopConfig[] = [
  {
    inputPath: "/Users/alina.ghani/Downloads/IMG_7161.png",
    outputName: "top-bordeaux-brode",
    prompt: `You are a professional fashion photographer. Generate a high-quality e-commerce product photo of a beautiful young woman (South Asian / Indian model) wearing this exact embroidered halter top.

REQUIREMENTS:
- The model should be standing in a clean, minimal studio setting with soft warm lighting
- Light beige/cream background, professional fashion photography style
- The top must look exactly like the one in the reference image: burgundy/maroon embroidered halter top with silver beadwork and floral motifs
- The model should have an elegant, confident pose
- Full upper body shot, from waist up
- High fashion, luxury e-commerce aesthetic similar to Zara or Net-a-Porter
- Sharp focus, professional lighting, no text or watermarks`,
  },
  {
    inputPath: "/Users/alina.ghani/Downloads/IMG_7162.png",
    outputName: "top-vert-dore",
    prompt: `You are a professional fashion photographer. Generate a high-quality e-commerce product photo of a beautiful young woman (South Asian / Indian model) wearing this exact embroidered halter top.

REQUIREMENTS:
- The model should be standing in a clean, minimal studio setting with soft warm lighting
- Light beige/cream background, professional fashion photography style
- The top must look exactly like the one in the reference image: green/emerald sheer halter top with gold sequin embroidery at the bottom
- The model should have an elegant, confident pose
- Full upper body shot, from waist up
- High fashion, luxury e-commerce aesthetic similar to Zara or Net-a-Porter
- Sharp focus, professional lighting, no text or watermarks`,
  },
  {
    inputPath: "/Users/alina.ghani/Downloads/IMG_7163.png",
    outputName: "top-rouge-festif",
    prompt: `You are a professional fashion photographer. Generate a high-quality e-commerce product photo of a beautiful young woman (South Asian / Indian model) wearing one of these exact embroidered tops.

REQUIREMENTS:
- The model should be standing in a clean, minimal studio setting with soft warm lighting
- Light beige/cream background, professional fashion photography style
- The top must look exactly like the ones in the reference image: red/crimson heavily embroidered crop top (choli/blouse) with gold threadwork and mirror work
- The model should have an elegant, confident pose
- Full upper body shot, from waist up
- High fashion, luxury e-commerce aesthetic similar to Zara or Net-a-Porter
- Sharp focus, professional lighting, no text or watermarks`,
  },
];

async function generateImage(config: TopConfig): Promise<string | null> {
  console.log(`\nGenerating: ${config.outputName}`);
  console.log(`Input: ${config.inputPath}`);

  const imageBytes = fs.readFileSync(config.inputPath);
  const base64Image = imageBytes.toString("base64");
  const mimeType = "image/png";

  try {
    const response = await client.models.generateContent({
      model: MODEL,
      contents: [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                mimeType,
                data: base64Image,
              },
            },
            { text: config.prompt },
          ],
        },
      ],
      config: {
        responseModalities: ["IMAGE"],
        temperature: 1,
        topP: 0.95,
        maxOutputTokens: 8192,
      },
    });

    const candidate = response.candidates?.[0];
    if (!candidate?.content?.parts) {
      console.log(`No parts in response for ${config.outputName}`);
      return null;
    }

    for (const part of candidate.content.parts) {
      if (part.inlineData?.mimeType?.startsWith("image/")) {
        const ext = part.inlineData.mimeType === "image/png" ? "png" : "jpg";
        const outputPath = path.join(
          process.cwd(),
          "public",
          "products",
          `${config.outputName}.${ext}`
        );
        const buffer = Buffer.from(part.inlineData.data!, "base64");
        fs.writeFileSync(outputPath, buffer);
        console.log(
          `Saved: ${outputPath} (${(buffer.length / 1024).toFixed(0)}KB)`
        );
        return `/products/${config.outputName}.${ext}`;
      }
    }

    console.log(`No image in response for ${config.outputName}`);
    return null;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`Error generating ${config.outputName}: ${msg}`);
    return null;
  }
}

async function main() {
  console.log("Starting image generation with Gemini...\n");
  const results: Record<string, string | null> = {};

  for (const top of tops) {
    results[top.outputName] = await generateImage(top);
  }

  console.log("\n--- Results ---");
  for (const [name, path] of Object.entries(results)) {
    console.log(`${name}: ${path || "FAILED"}`);
  }
}

main().catch(console.error);
