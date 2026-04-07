export interface Product {
  _id?: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  format: "50ml" | "100ml";
  images: string[];
  featured: boolean;
  createdAt: Date;
}

export interface CartItem {
  product: Product;
  format: string;
  quantity: number;
}
