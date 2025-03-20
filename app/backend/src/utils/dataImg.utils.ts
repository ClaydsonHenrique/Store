import fs from "fs";
import path from "path";

const generateLinkForImage = (fileName: string): string => {
  return `http://localhost:3001/images/${fileName}`;
};

const convertBase64ToImage = (base64: string, fileName: string) => {
  const buffer = Buffer.from(base64, "base64");
  const imagePath = path.join(__dirname, "..", "imagens", fileName);
  fs.writeFileSync(imagePath, buffer);
  return imagePath;
};

const saveBase64AsImage = (base64: string, mimeType: string) => {
  return { inlineData: { data: base64, mimeType } };
};

export { generateLinkForImage, convertBase64ToImage, saveBase64AsImage };
