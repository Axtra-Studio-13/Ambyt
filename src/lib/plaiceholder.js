import { getPlaiceholder } from "plaiceholder";
import fs from "fs/promises";
import path from "path";

export async function getImage(src) {
  try {
    const filePath = path.join(process.cwd(), "public", src); // src = '/testimonals-1.jpeg'
    const buffer = await fs.readFile(filePath); // Read file as Buffer
    const { base64, img } = await getPlaiceholder(buffer);
    return JSON.parse(
      JSON.stringify({
        base64,
        src,
      })
    );
  } catch (err) {
    console.error("Error loading image:", err);
  }
}
