import fs from 'node:fs/promises';

export const createDirIfNotExists = async (dirPath) => {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (err) {
    console.error(`❌ Не вдалося створити директорію ${dirPath}:`, err.message);
  }
};
