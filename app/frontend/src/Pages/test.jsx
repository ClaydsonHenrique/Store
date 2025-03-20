import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, Minus, Plus, Truck } from 'lucide-react';

function ProductDetails() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Simulando dados do produto
  const product = {
    id: 1,
    name: 'Nike Air Max Plus',
    price: 899.90,
    description: 'O Nike Air Max Plus traz de volta o design icônico que você conhece: linhas onduladas e aerodinâmicas inspiradas em palmeiras balançando ao vento e elementos em TPU para maior durabilidade. A unidade Nike Air proporciona amortecimento excepcional, enquanto a entressola em espuma adiciona um visual moderno e confortável.',
    rating: 4.8,
    reviews: 124,
    sizes: ['38', '39', '40', '41', '42'],
    colors: ['Preto', 'Branco', 'Vermelho'],
    images: [
      'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=600&angle=30',
      'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=600&angle=60',
      'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=600&angle=90'
    ]
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Imagens do Produto */}
        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 ${mainImage === image ? 'border-black' : 'border-transparent'
                    }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Informações do Produto */}
        <div className="lg:w-1/3">
          <div className="sticky top-8">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${index < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                      }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} avaliações)
              </span>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-900">
                R$ {product.price.toFixed(2)}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Em até 10x de R$ {(product.price / 10).toFixed(2)}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Tamanho</h3>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      py-2 text-center rounded-md border
                      ${selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Quantidade</h3>
              <div className="flex items-center border rounded-md w-32 mt-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
                Adicionar ao Carrinho
              </button>
              <button className="w-full border border-black text-black py-3 rounded-md hover:bg-gray-50 transition flex items-center justify-center gap-2">
                <Heart className="h-5 w-5" />
                Adicionar à Lista de Desejos
              </button>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Frete Grátis
                  </p>
                  <p className="text-sm text-gray-600">
                    Entrega estimada em 3-5 dias úteis
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Descrição</h3>
              <p className="mt-2 text-sm text-gray-600 leading-6">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;