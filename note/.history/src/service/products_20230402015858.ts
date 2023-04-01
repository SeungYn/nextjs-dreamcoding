import path from 'path';
import { promises as fs } from 'fs';

export async function getProducts() {
  const dir = path.join(process.cwd(), 'data', 'products.json');
  const data = await fs.readFile(dir, 'utf-8');

  return JSON.parse(data);
}

export function getProduct(id: string) {
  return 'shirt';
}
