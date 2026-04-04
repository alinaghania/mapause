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
const REF_IMAGE = "/Users/alina.ghani/Downloads/IMG_7162.png";

const BASE_PROMPT = `Look at this reference image carefully. I need you to generate a NEW product photo of a model wearing a top that is THE EXACT SAME STYLE and CUT as this reference:
- Same halter neckline with thin string/chain straps tied behind neck
- Same sheer/transparent fabric (mousseline or organza)
- Same fitted silhouette, hip-length
- Same type of embroidery: small scattered motifs on the body + heavy ornate border at the bottom with sequins, beads and floral patterns
- Same drape and flow of the fabric

The ONLY things that change are the COLOR and EMBROIDERY PATTERN as specified below.

PHOTO REQUIREMENTS:
- Professional e-commerce studio photo, cream/beige background
- Model shown from mid-thigh up, slight angle, one hand on hip
- Sharp focus, soft warm studio lighting
- Clean luxury fashion aesthetic`;

interface TopConfig {
  name: string;
  color: string;
  model: string;
}

const tops: TopConfig[] = [
  {
    name: "top-bordeaux",
    color: "DEEP BURGUNDY/BORDEAUX fabric with SILVER and dark green embroidery. Border has silver sequins and red stone accents.",
    model: "Beautiful Black woman with elegant updo hairstyle",
  },
  {
    name: "top-bleu-nuit",
    color: "MIDNIGHT BLUE/NAVY fabric with GOLD embroidery. Border has gold sequins and dark blue bead accents. Rich royal blue tone.",
    model: "Beautiful Indian woman with long dark hair pulled back",
  },
  {
    name: "top-rose-poudre",
    color: "SOFT PINK/DUSTY ROSE fabric with ROSE GOLD embroidery. Border has pink and gold sequins with pearl accents. Delicate feminine tone.",
    model: "Beautiful white/European woman with light brown hair",
  },
  {
    name: "top-noir-dore",
    color: "BLACK fabric with GOLD embroidery. Border has heavy gold sequins and gold bead work. Dramatic and glamorous.",
    model: "Beautiful Black woman with natural curly hair",
  },
  {
    name: "top-vert-emeraude",
    color: "EMERALD GREEN fabric with GOLD embroidery. Border has gold sequins and dark green bead accents. Same as reference image but richer green.",
    model: "Beautiful Indian woman with sleek low bun",
  },
];

async function generate(config: TopConfig): Promise<string | null> {
  const prompt = `${BASE_PROMPT}

COLOR & PATTERN: ${config.color}
MODEL: ${config.model}

Generate the image now.`;

  const refBytes = fs.readFileSync(REF_IMAGE);

  try {
    const response = await client.models.generateContent({
      model: MODEL,
      contents: [{
        role: "user",
        parts: [
          { inlineData: { mimeType: "image/png", data: refBytes.toString("base64") } },
          { text: prompt },
        ],
      }],
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
        console.log(`OK: ${config.name}.${ext}`);
        return `/products/${config.name}.${ext}`;
      }
    }
    return null;
  } catch (err) {
    console.error(`FAIL ${config.name}: ${err instanceof Error ? err.message : err}`);
    return null;
  }
}

async function main() {
  console.log(`Generating ${tops.length} tops in parallel...\n`);

  const results = await Promise.all(tops.map((t) => generate(t)));

  console.log("\nResults:");
  tops.forEach((t, i) => console.log(`  ${t.name}: ${results[i] || "FAILED"}`));
}

main().catch(console.error);
