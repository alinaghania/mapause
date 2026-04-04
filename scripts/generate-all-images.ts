import { GoogleGenAI } from "@google/genai";
import * as fs from "fs";
import * as path from "path";

const client = new GoogleGenAI({
  vertexai: true,
  project: "dircab-466608",
  location: "global",
});

const MODEL = "gemini-3.1-flash-image-preview";
const OUT = path.join(process.cwd(), "public", "products");

interface GenConfig {
  name: string;
  prompt: string;
  refImage?: string;
}

const toGenerate: GenConfig[] = [
  {
    name: "top-noir-sequins",
    prompt: `Professional e-commerce fashion photo. Beautiful South Asian woman wearing a black halter top covered in gold sequins, cascading pattern, open back with lacing. Studio shot, warm cream background, waist-up, elegant pose, sharp focus, luxury fashion aesthetic.`,
  },
  {
    name: "top-rose-perles",
    prompt: `Professional e-commerce fashion photo. Beautiful South Asian woman wearing a soft pink silk blouse with pearl embroidery on the bodice, short puffy sleeves. Studio shot, warm cream background, waist-up, elegant pose, sharp focus, luxury fashion aesthetic.`,
  },
  {
    name: "top-blanc-miroir",
    prompt: `Professional e-commerce fashion photo. Beautiful South Asian woman wearing a white crop top (choli) with silver mirror work embroidery, open back. Studio shot, warm cream background, waist-up, elegant pose, sharp focus, luxury fashion aesthetic.`,
  },
  {
    name: "top-bleu-zari",
    prompt: `Professional e-commerce fashion photo. Beautiful South Asian woman wearing a navy blue blouse with all-over golden zari embroidery, round neck, three-quarter sleeves. Studio shot, warm cream background, waist-up, elegant pose, sharp focus, luxury fashion aesthetic.`,
  },
  {
    name: "top-mauve-velours",
    prompt: `Professional e-commerce fashion photo. Beautiful South Asian woman wearing a mauve/purple velvet crop top (choli) with tone-on-tone embroidery and crystal beads. Studio shot, warm cream background, waist-up, elegant pose, sharp focus, luxury fashion aesthetic.`,
  },
  {
    name: "top-corail-gota",
    prompt: `Professional e-commerce fashion photo. Beautiful South Asian woman wearing a coral/orange blouse with traditional Rajasthani gota patti gold ribbon work, back lacing. Studio shot, warm cream background, waist-up, elegant pose, sharp focus, luxury fashion aesthetic.`,
  },
  {
    name: "top-dore-brocart",
    prompt: `Professional e-commerce fashion photo. Beautiful South Asian woman wearing a fully golden brocade crop top (choli), hand-woven fabric, short sleeves. Studio shot, warm cream background, waist-up, elegant pose, sharp focus, luxury bridal aesthetic.`,
  },
  {
    name: "churiyans-or",
    prompt: `Professional e-commerce product photo. Set of 12 traditional Indian gold bangles (churiyan) arranged elegantly on a cream marble surface. Close-up, warm lighting, luxury jewelry photography, clean minimal aesthetic.`,
  },
  {
    name: "churiyans-multicolores",
    prompt: `Professional e-commerce product photo. Set of 24 colorful Indian lac bangles (churiyan) in red, green, blue and gold, arranged in a beautiful pattern on cream marble surface. Close-up, warm lighting, luxury jewelry photography, festive vibrant colors.`,
  },
  {
    name: "churiyans-perles",
    prompt: `Professional e-commerce product photo. Set of 8 delicate white pearl and gold Indian bangles (churiyan) arranged on cream satin fabric. Close-up, soft lighting, bridal jewelry aesthetic, luxury photography.`,
  },
  {
    name: "churiyans-rouge",
    prompt: `Professional e-commerce product photo. Set of 16 traditional Indian red and gold wedding bangles (churiyan/chooda) arranged beautifully on cream fabric with rose petals. Warm lighting, bridal jewelry photography.`,
  },
  {
    name: "churiyans-argent",
    prompt: `Professional e-commerce product photo. Set of 6 engraved silver-plated Indian bangles (churiyan) with fine traditional patterns, arranged on dark velvet. Close-up, elegant lighting, luxury jewelry photography.`,
  },
  {
    name: "churiyans-turquoise",
    prompt: `Professional e-commerce product photo. Set of 10 turquoise and kundan stone Indian bangles (churiyan) arranged on cream marble. Close-up, warm lighting, colorful traditional jewelry, luxury photography.`,
  },
];

async function generate(config: GenConfig): Promise<string | null> {
  console.log(`Generating: ${config.name}...`);
  try {
    const parts: Array<{ text: string } | { inlineData: { mimeType: string; data: string } }> = [];

    if (config.refImage) {
      const img = fs.readFileSync(config.refImage);
      parts.push({ inlineData: { mimeType: "image/png", data: img.toString("base64") } });
    }
    parts.push({ text: config.prompt });

    const response = await client.models.generateContent({
      model: MODEL,
      contents: [{ role: "user", parts }],
      config: {
        responseModalities: ["IMAGE"],
        temperature: 1,
        topP: 0.95,
        maxOutputTokens: 8192,
      },
    });

    const candidate = response.candidates?.[0];
    if (!candidate?.content?.parts) return null;

    for (const part of candidate.content.parts) {
      if (part.inlineData?.mimeType?.startsWith("image/")) {
        const ext = part.inlineData.mimeType === "image/png" ? "png" : "jpg";
        const outputPath = path.join(OUT, `${config.name}.${ext}`);
        fs.writeFileSync(outputPath, Buffer.from(part.inlineData.data!, "base64"));
        console.log(`  OK: ${config.name}.${ext}`);
        return `/products/${config.name}.${ext}`;
      }
    }
    return null;
  } catch (err) {
    console.error(`  FAIL: ${err instanceof Error ? err.message : err}`);
    return null;
  }
}

async function main() {
  console.log(`Generating ${toGenerate.length} images...\n`);
  for (const config of toGenerate) {
    const existing = fs.readdirSync(OUT).find((f) => f.startsWith(config.name));
    if (existing) {
      console.log(`Skip (exists): ${config.name}`);
      continue;
    }
    await generate(config);
  }
  console.log("\nDone.");
}

main().catch(console.error);
