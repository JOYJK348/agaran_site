import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const inputPath = resolve(__dirname, '../public/logo.png');
const outputPath = resolve(__dirname, '../public/logo-transparent.png');

// Threshold: pixels with R,G,B all > 230 are treated as "white" and made transparent
const THRESHOLD = 230;

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const buf = Buffer.from(data);

for (let i = 0; i < buf.length; i += channels) {
  const r = buf[i];
  const g = buf[i + 1];
  const b = buf[i + 2];
  // If pixel is near-white, make it fully transparent
  if (r > THRESHOLD && g > THRESHOLD && b > THRESHOLD) {
    buf[i + 3] = 0; // alpha = 0 (transparent)
  }
}

await sharp(buf, { raw: { width, height, channels } })
  .png()
  .toFile(outputPath);

console.log(`✅ Done! Saved transparent logo → ${outputPath}`);
