import path from 'path';

export function getProducts() {
  const dir = path.join(process.cwd(), 'data', 'products.json');
  console.log(dir);
  return ['shirt', 'pants', 'skirt', 'shoes'];
}

export function getProduct(id: string) {
  return 'shirt';
}
