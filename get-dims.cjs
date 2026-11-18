const fs = require('fs');
const { spawnSync } = require('child_process');
function pngDims(buf) { return [buf.readUInt32BE(16), buf.readUInt32BE(20)]; }
function jpgDims(buf) {
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xFF) { i++; continue; }
    const m = buf[i+1];
    if (m >= 0xC0 && m <= 0xCF && m !== 0xC4 && m !== 0xC8 && m !== 0xCC) {
      return [buf.readUInt16BE(i+7), buf.readUInt16BE(i+5)];
    }
    i += 2 + buf.readUInt16BE(i+2);
  }
  return [0,0];
}
const files = [
  "assets/images/portfolio/meta-ads-campaign-summary.png",
  "assets/images/portfolio/meta-ads-conversations.png",
  "assets/images/portfolio/social-content-overview.png",
  "assets/images/portfolio/social-facebook-performance-a.png",
  "assets/images/portfolio/social-followers-benchmark.png",
  "assets/images/portfolio/social-instagram-performance.png",
  "assets/images/blog/meta-vs-google-ads.jpg"
];
for (const f of files) {
  const b = fs.readFileSync(f);
  const isPng = b[0] === 0x89;
  const [w, h] = isPng ? pngDims(b) : jpgDims(b);
  console.log(`${f} ${w}x${h}`);
}