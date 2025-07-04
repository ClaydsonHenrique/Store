import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../Hooks/useCart';
import { ContextToken } from '../Context/ContextApi';

export default function Products({ allProducts }) {
  
   const { filter } = React.useContext(ContextToken)
  
  const navigate = useNavigate();
  const location = useLocation();
  const { handleClickAddCar } = useCart();

  const [loading, setLoading] = React.useState(false);
  const [pages, setPages] = React.useState(1);
  const [sliceProduct, setSliceProduct] = React.useState([]);
    

  // Filtros no estado
  const [filters, setFilters] = React.useState({
    category: null,  // null significa "todos"
    brands: [],
    colors: [],
    priceRange: [0, 4000],
  });
console.log(allProducts)
  // Disponíveis (extraídos de allProducts)
  const [availableFilters, setAvailableFilters] = React.useState({
    categories: [],
    brands: [],
    colors: [],
  });

  // Extrai filtros disponíveis dos produtos
  React.useEffect(() => {
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

  // Aplica os filtros e atualiza produtos paginados
  React.useEffect(() => {
    let filteredProducts = allProducts;

    if (filters.category) {
      filteredProducts = filteredProducts.filter(
        (p) => p.categoria === filters.category
      );
    }

    if (filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter((p) =>
        filters.brands.includes(p.marca)
      );
    }

    if (filters.colors.length > 0) {
      filteredProducts = filteredProducts.filter((p) =>
        filters.colors.includes(p.color)
      );
    }

    filteredProducts = filteredProducts.filter(
      (p) =>
        parseFloat(p.price) >= filters.priceRange[0] &&
        parseFloat(p.price) <= filters.priceRange[1]
    );

    
    if (filter && filter.trim() !== "") {
      filteredProducts = filteredProducts.filter((p) =>
        p.productName.toLowerCase().includes(filter.toLowerCase())
      );
    }
    
    const first = (pages - 1) * 15;
    const last = pages * 15;

    setSliceProduct(filteredProducts.slice(first, last));
    setLoading(true);
  }, [allProducts, filters, pages, filter]);
  
  
  
  
 

  // Controla paginação
  const totalPages = Math.ceil(
    allProducts.filter((p) => {
      if (filters.category && p.categoria !== filters.category) return false;
      if (filters.brands.length && !filters.brands.includes(p.marca))
        return false;
      if (filters.colors.length && !filters.colors.includes(p.color))
        return false;
      if (
        parseFloat(p.price) < filters.priceRange[0] ||
        parseFloat(p.price) > filters.priceRange[1]
      )
        return false;
      return true;
    }).length / 15
  );

  // Funções para toggle filtro

  // Toggle categoria radio — clicar igual limpa
  const toggleCategory = (cat) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === cat ? null : cat,
    }));
    setPages(1);
  };

  // Toggle checkbox marca
  const toggleBrand = (brand) => {
    setFilters((prev) => {
      const already = prev.brands.includes(brand);
      const newBrands = already
        ? prev.brands.filter((b) => b !== brand)
        : [...prev.brands, brand];
      return { ...prev, brands: newBrands };
    });
    setPages(1);
  };

  // Toggle checkbox cor
  const toggleColor = (color) => {
    setFilters((prev) => {
      const already = prev.colors.includes(color);
      const newColors = already
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color];
      return { ...prev, colors: newColors };
    });
    setPages(1);
  };

  // Alterar faixa de preço
  const changePriceRange = (maxPrice) => {
    setFilters((prev) => ({ ...prev, priceRange: [0, maxPrice] }));
    setPages(1);
  };

  // Mudar página
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setPages(page);
  };

  return (
    <>
      {!loading ? (
        <h1>Carregando .... </h1>
      ) : (
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Produtos</h1>
          </div>

          <div className="flex gap-8">
            {/* Filtros */}
            <div className="w-64 flex-shrink-0 block lg:block">
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* Categorias (radio toggle) */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Categorias</h3>
                  <div className="space-y-2">
                    {availableFilters.categories.map((category) => (
                      <label key={category} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          checked={filters.category === category}
                          onChange={() => toggleCategory(category)}
                          className="mr-2"
                        />
                        <span className="capitalize">{category}</span>
                      </label>
                    ))}
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === null}
                        onChange={() => toggleCategory(null)}
                        className="mr-2"
                      />
                      <span>Todos</span>
                    </label>
                  </div>
                </div>

                {/* Marcas (checkbox toggle) */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Marcas</h3>
                  <div className="space-y-2">
                    {availableFilters.brands.map((brand) => (
                      <label key={brand} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value={brand}
                          checked={filters.brands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="mr-2"
                        />
                        {brand}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Cores (checkbox toggle) */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Cores</h3>
                  <div className="space-y-2">
                    {availableFilters.colors.map((color) => (
                      <label key={color} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value={color}
                          checked={filters.colors.includes(color)}
                          onChange={() => toggleColor(color)}
                          className="mr-2"
                        />
                        {color}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Faixa de preço */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Faixa de Preço</h3>
                  <input
                    type="range"
                    min="0"
                    max="4000"
                    step="100"
                    value={filters.priceRange[1]}
                    onChange={(e) => changePriceRange(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>R$ 0</span>
                    <span>R$ {filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Produtos */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {sliceProduct.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden group"
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="relative">
                        <img
                          src={product.images[0]}
                          alt={product.productName}
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
                          <p className="text-green-800 mt-1">R$ {product.price}</p>
                        </>
                      ) : (
                        <>
                          <p className="text-red-600 mt-1 line-through">R$ {product.price}</p>
                          <p className="text-green-800">R$ {product.promo}</p>
                        </>
                      )}
                      <button
                        className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                        onClick={() => handleClickAddCar(product.id, 1)}
                      >
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
                  className={`p-2 rounded-full ${pages === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${pages === page
                            ? 'bg-black text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                          }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>
                <button
                  onClick={() => handlePageChange(pages + 1)}
                  disabled={pages === totalPages}
                  className={`p-2 rounded-full ${pages === totalPages
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:bg-gray-100'
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
