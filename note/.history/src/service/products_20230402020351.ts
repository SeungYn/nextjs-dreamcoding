import path from 'path';
import { promises as fs } from 'fs';

export type Product = {
  id: string;
  name: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  const dir = path.join(process.cwd(), 'data', 'products.json');
  const data = await fs.readFile(dir, 'utf-8');

  return JSON.parse(data);
}

export function getProduct(id: string): Promise<Product | undefined> {
  return 'shirt';
}
