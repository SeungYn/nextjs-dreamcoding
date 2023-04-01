import path from 'path';
import { promises as fs } from 'fs';

export async function getProducts() {
  const dir = path.join(process.cwd(), 'data', 'products.json');
  const data = await fs.readFile(dir, 'utf-8');
  console.log(data);

  return ['shirt', 'pants', 'skirt', 'shoes'];
}

export function getProduct(id: string) {
  return 'shirt';
}
