interface IEggData {
  _id: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  stock: number;
  packageSize: number;
  listed: boolean;
  available: boolean;
  colors: string[];
  properties: { [key: string]: string };
  types: string[];
  frontImage: string;
  images: string[];
  slug: string;
  quantity?: number;
}

export { IEggData };
