// D:\cortex_agents_projects\cafe-cosmo\src\types\Product.ts

export type Product = {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  slug: string;
  quantity?: number; // optional for cart use
};
