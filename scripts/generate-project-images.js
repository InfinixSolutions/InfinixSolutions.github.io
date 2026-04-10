/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PROMPTS_PATH = path.join(ROOT, "config", "projectImagePrompts.json");
const OUT_DIR = path.join(ROOT, "public", "assets", "images", "portfolio");

async function generateImage({ apiKey, model, size, prompt }) {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      size,
      prompt,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Image generation failed: ${response.status} ${errorText}`);
  }

  const payload = await response.json();
  const data = payload.data && payload.data[0];
  if (!data) {
    throw new Error("Image generation failed: no image data returned");
  }

  if (data.b64_json) {
    return Buffer.from(data.b64_json, "base64");
  }

  if (data.url) {
    const imageResponse = await fetch(data.url);
    if (!imageResponse.ok) {
      throw new Error(`Failed to download generated image: ${imageResponse.status}`);
    }
    const arr = await imageResponse.arrayBuffer();
    return Buffer.from(arr);
  }

  throw new Error("Image generation failed: unsupported response format");
}

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_IMAGE_MODEL || "gpt-image-1";

  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY environment variable.");
  }

  const configRaw = fs.readFileSync(PROMPTS_PATH, "utf8");
  const config = JSON.parse(configRaw);

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const styleGuide = config.styleGuide || "";
  const negativePrompt = config.negativePrompt || "";
  const size = config.size || "1536x1024";

  for (const project of config.projects || []) {
    const fullPrompt = [
      styleGuide,
      `Project: ${project.title} (${project.category})`,
      project.prompt,
      `Negative prompt: ${negativePrompt}`,
    ]
      .filter(Boolean)
      .join("\n\n");

    console.log(`Generating ${project.fileName} ...`);
    const imageBuffer = await generateImage({
      apiKey,
      model,
      size,
      prompt: fullPrompt,
    });

    const outPath = path.join(OUT_DIR, project.fileName);
    fs.writeFileSync(outPath, imageBuffer);
    console.log(`Saved ${outPath}`);
  }

  console.log("All project images generated successfully.");
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
