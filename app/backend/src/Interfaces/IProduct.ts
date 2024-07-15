export interface IProducts {
  id: number;
  productName: string;
  description: string;
  price: number;
  promo: number;
  gender: string;
  colorsId: number;
  categoriesId: number;
  brandsId: number;
  images: string[];
  thumbnail: string;
  quantity: number;
}
