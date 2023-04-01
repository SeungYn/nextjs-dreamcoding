import path from 'path';

export function getProducts() {
  const dir = path.join(process.cwd(), 'data');
  console.log(dir);
  return ['shirt', 'pants', 'skirt', 'shoes'];
}

export function getProduct(id: string) {
  return 'shirt';
}
