export interface IProducts {
  id: number;
  productName: string;
  descricao: string;
  preco: string;
  promo: string;
  genero: string;
  coresId: number;
  categoriasId: number;
  marcasId: number;
  imagens: string[];
  tumblr: string;
  quantidade: number;
}
