import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";

export default function Carrinho({ allProducts }) {
  const [cart, setCart] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const localCar = localStorage.getItem("car");
    if (localCar) {
      setCart(JSON.parse(localCar));
    }
    setLoading(false);
  }, []);

  React.useEffect(() => {
    if (!loading) {
      localStorage.setItem("car", JSON.stringify(cart));
      window.dispatchEvent(new Event("cartUpdated"));
    }
  }, [cart, loading]);

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: item.quantidade + amount }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => {
    const product = allProducts?.find((p) => p.id === item.id);
    const price = product && !isNaN(product.promo) ? Number(product.promo) : (product && !isNaN(product.price) ? Number(product.price) : 0);
    return total + price * item.quantidade;
  }, 0);

  const totalDiscount = cart.reduce((total, item) => {
    const product = allProducts?.find((p) => p.id === item.id);
    if (product && !isNaN(product.promo) && !isNaN(product.price)) {
      return total + (Number(product.price) - Number(product.promo)) * item.quantidade;
    }
    return total;
  }, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrinho</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {cart.length > 0 ? (
            cart.map((item) => {
              const product = allProducts?.find((p) => p.id === item.id);
              const price = product && !isNaN(product.promo) ? Number(product.promo) : (product && !isNaN(product.price) ? Number(product.price) : 0);
              return (
                <div
                  key={item.id}
                  className="flex gap-6 bg-white p-6 rounded-lg shadow-md mb-4"
                >
                  <img
                    src={product?.images?.[0] || "https://via.placeholder.com/150"}
                    alt={product?.productName || "Produto desconhecido"}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product ? product.productName : "Produto desconhecido"}
                    </h3>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center border rounded-md">
                        <button
                          className="p-2 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4">{item.quantidade}</span>
                        <button
                          className="p-2 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        className="text-red-500 hover:text-red-600"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    {product && !isNaN(product.price) && product.promo ? (
                      <p className="text-sm text-gray-500 line-through">R$ {Number(product.price).toFixed(2)}</p>
                    ) : null}
                    <p className="text-lg font-semibold">
                      R$ {price.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="text-lg font-medium">Carrinho vazio</h1>
          )}
        </div>

        {cart.length > 0 && (
          <div className="lg:w-96">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Resumo do Pedido</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span className="text-green-600">Grátis</span>
                </div>
                {totalDiscount > 0 && (
                  <div className="flex justify-between text-red-600">
                    <span>Desconto aplicado</span>
                    <span>- R$ {totalDiscount}</span>
                  </div>
                )}
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>R$ {(totalPrice - totalDiscount)}</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
                Finalizar Compra
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
