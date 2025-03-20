import React from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Products({ allProducts }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = React.useState(false);
  const { categorie, brand, color } = useParams();
  const [pages, setPages] = React.useState(1);
  const [sliceProduct, setSliceProduct] = React.useState([]);
  const initialCategory = categorie || 'todos';
  const [filters, setFilters] = React.useState({
    category: initialCategory,
    brands: [],
    colors: [],
    sizes: [],
    priceRange: [0, 4000],
  });

  const [availableFilters, setAvailableFilters] = React.useState({
    categories: [],
    brands: [],
    colors: [],
  });

  // Função para extrair os filtros disponíveis dos produtos
  const addFilter = React.useCallback(() => {
    const newFilters = { categories: [], brands: [], colors: [] };

    allProducts.forEach((product) => {
      if (!newFilters.categories.includes(product.categoria)) {
        newFilters.categories.push(product.categoria);
      }
      if (!newFilters.brands.includes(product.marca)) {
        newFilters.brands.push(product.marca);
      }
      if (!newFilters.colors.includes(product.color)) {
        newFilters.colors.push(product.color);
      }
    });

    setAvailableFilters(newFilters);
  }, [allProducts]);

  // Sincroniza os filtros com a URL ao carregar a página
  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const category = searchParams.get('category') || 'todos';
    const brands = searchParams.get('brands')?.split(',') || [];
    const colors = searchParams.get('colors')?.split(',') || [];
    const price = parseInt(searchParams.get('price')) || 2000;

    setFilters({
      category: category,
      brands: brands,
      colors: colors,
      priceRange: [0, price],
    });

    // Reseta a página para 1 ao aplicar novos filtros
    setPages(1);
  }, [location.search]);

  // Aplica os filtros e atualiza a lista de produtos
  React.useEffect(() => {
    let filteredProducts = allProducts;

    if (filters.category !== 'todos') {
      filteredProducts = filteredProducts.filter(
        (product) => product.categoria === filters.category
      );
    }

    if (filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter(
        (product) => filters.brands.includes(product.marca)
      );
    }

    if (filters.colors.length > 0) {
      filteredProducts = filteredProducts.filter(
        (product) => filters.colors.includes(product.color)
      );
    }

    // Filtra por faixa de preço
    filteredProducts = filteredProducts.filter(
      (product) =>
        parseFloat(product.price) >= filters.priceRange[0] &&
        parseFloat(product.price) <= filters.priceRange[1]
    );

    // Paginação
    const primeiroSlice = (pages - 1) * 15;
    const segundoSlice = pages * 15;
    setSliceProduct(filteredProducts.slice(primeiroSlice, segundoSlice));
    setLoading(true);
  }, [allProducts, pages, filters]);

  // Extrai os filtros disponíveis dos produtos
  React.useEffect(() => {
    if (allProducts.length > 0) {
      addFilter();
    }
  }, [allProducts, addFilter]);

  // Atualiza os filtros com base nos parâmetros da URL
  React.useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: categorie || 'todos',
      brands: brand ? brand.split(',') : [],
      colors: color ? color.split(',') : [],
    }));
  }, [categorie, brand, color]);

  // Função para mudar a página
  const handlePageChange = (valor) => {
    setPages(valor);
  };

  const totalPages = Math.ceil(allProducts.length / 15);

  // Atualiza a URL com os filtros selecionados
  const updateFilters = (newFilters) => {
    const searchParams = new URLSearchParams();

    if (newFilters.category !== 'todos') {
      searchParams.set('category', newFilters.category);
    }
    if (newFilters.brands.length) {
      searchParams.set('brands', newFilters.brands.join(','));
    }
    if (newFilters.colors.length) {
      searchParams.set('colors', newFilters.colors.join(','));
    }
    if (newFilters.priceRange) {
      searchParams.set('price', newFilters.priceRange[1]);
    }

    navigate({ pathname: location.pathname, search: searchParams.toString() });
  };

  return (
    <>
      {!loading ? (
        <h1>Carregando .... </h1>
      ) : (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Produtos</h1>
          </div>

          <div className="flex gap-8">
            {/* Filtros */}
            <div className={`w-64 flex-shrink-0 block lg:block`}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Categorias</h3>
                  <div className="space-y-2">
                    {availableFilters.categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={filters.category === category}
                          onChange={(e) =>
                            updateFilters({ ...filters, category: e.target.value })
                          }
                          className="mr-2"
                        />
                        <span className="capitalize">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Marcas</h3>
                  <div className="space-y-2">
                    {availableFilters.brands.map((brand) => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          value={brand}
                          checked={filters.brands.includes(brand)}
                          onChange={(e) => {
                            const newBrands = e.target.checked
                              ? [...filters.brands, brand]
                              : filters.brands.filter((b) => b !== brand);
                            updateFilters({ ...filters, brands: newBrands });
                          }}
                          className="mr-2"
                        />
                        {brand}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Cores</h3>
                  <div className="space-y-2">
                    {availableFilters.colors.map((color) => (
                      <label key={color} className="flex items-center">
                        <input
                          type="checkbox"
                          value={color}
                          checked={filters.colors.includes(color)}
                          onChange={(e) => {
                            const newColors = e.target.checked
                              ? [...filters.colors, color]
                              : filters.colors.filter((c) => c !== color);
                            updateFilters({ ...filters, colors: newColors });
                          }}
                          className="mr-2"
                        />
                        {color}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Faixa de Preço</h3>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      step="100"
                      value={filters.priceRange[1]}
                      onChange={(e) =>
                        updateFilters({
                          ...filters,
                          priceRange: [0, parseInt(e.target.value)],
                        })
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>R$ 0</span>
                      <span>R$ {filters.priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Produtos */}
            <div className="flex-1 ">
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {sliceProduct.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden group"
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="relative">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                        />
                        <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                          <Heart className="h-5 w-5 text-gray-600" />
                        </button>
                      </div>
                    </Link>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-800">
                        {product.productName}
                      </h4>
                      {product.promo === '0.00' ? (
                        <>
                          <p className="text-gray-600 mt-1">{`10x de ${(product.price / 10).toFixed(2)}`}</p>
                          <p className="text-green-800 mt-1">{product.price}</p>
                        </>
                      ) : (
                        <>
                          <p className="text-red-600 mt-1 line-through">
                            {product.price}
                          </p>
                          <p className="text-green-800">{product.promo}</p>
                        </>
                      )}
                      <button className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                        Adicionar ao Carrinho
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Paginação */}
              <div className="flex justify-center mt-6 items-center mx-auto">
                <button
                  onClick={() => handlePageChange(pages - 1)}
                  disabled={pages === 1}
                  className={`p-2 rounded-full ${pages === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${pages === page ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => handlePageChange(pages + 1)}
                  disabled={pages === totalPages}
                  className={`p-2 rounded-full ${pages === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}