export type Product = {
  id: number;
  image: string;
  nom: string;
  description: string;
  prix: number;
  composition: string | undefined;
};

export type Product2 = {
  id: number;
  name: string;
  brand: string;
  shade: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  detail?: string;
};
