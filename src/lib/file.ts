import fs from "fs";
import path from "path";

export const saveFile = async (
  fileName: string,
  originalFile: File,
): Promise<string> => {
  const env = process.env.NODE_ENV;

  const uploadDir =
    env == "production" ? "/tmp" : path.join(process.cwd(), "temp");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  const filePath = path.join(uploadDir, fileName);

  const arrayBuffer = await originalFile.arrayBuffer();

  const buffer = Buffer.from(arrayBuffer);

  fs.writeFileSync(filePath, buffer);

  return filePath;
};

export const getFileBuffer = (path: string): Buffer => {
  return fs.readFileSync(path);
};

export const deleteFile = (filepath: string): void => {
  fs.unlinkSync(filepath);
};
