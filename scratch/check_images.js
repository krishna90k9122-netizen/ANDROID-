import fs from 'fs';
import path from 'path';

const dir = 'C:\\Users\\krish\\Desktop\\Android\\public\\assets';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (path.extname(file).toLowerCase() === '.png') {
    const filePath = path.join(dir, file);
    const buffer = Buffer.alloc(24);
    const fd = fs.openSync(filePath, 'r');
    fs.readSync(fd, buffer, 0, 24, 0);
    fs.closeSync(fd);

    // PNG signature check
    if (buffer.readUInt32BE(0) === 0x89504E47 && buffer.readUInt32BE(4) === 0x0D0A1A0A) {
      const width = buffer.readUInt32BE(16);
      const height = buffer.readUInt32BE(20);
      console.log(`${file}: ${width}x${height} (${fs.statSync(filePath).size} bytes)`);
    } else {
      console.log(`${file}: Not a valid PNG file`);
    }
  }
});
