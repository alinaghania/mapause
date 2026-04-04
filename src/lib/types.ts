export interface Product {
  _id?: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: "tops" | "accessoires";
  sizes: string[];
  images: string[];
  featured: boolean;
  createdAt: Date;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}
