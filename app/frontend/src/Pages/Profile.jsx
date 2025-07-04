import React from 'react'
import { User as UserIcon, MapPin, CreditCard, ChevronRight, Package, Heart, ShoppingCart } from 'lucide-react';
import { getuser } from '../services/Api/Api'
import { Link } from 'react-router-dom';

export default function Profile() {

  const [user, setUser] = React.useState({})
  const [totalItems, setTotalItems] = React.useState(0);

  const updateCartCount = () => {
    const storedCart = localStorage.getItem("car");
    const cart = storedCart ? JSON.parse(storedCart) : [];
    const total = cart.reduce((acc, item) => acc + item.quantidade, 0);
    setTotalItems(total);
  };

  React.useEffect(() => {
    updateCartCount();

    const handleCartUpdate = () => updateCartCount();
    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);


  React.useEffect(() => {
    const fetchUser = async () => {
      const userData = await getuser();
      console.log(userData)
      setUser(userData)
    }

    fetchUser();
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header do Perfil */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
            <UserIcon size={48} className="text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.username}</h1>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Package size={16} />
                <span>3 pedidos realizados</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Heart size={16} />
                <span>5 itens na lista de desejos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ShoppingCart size={16} />
                <span>{totalItems} itens no carrinho</span>
              </div>
            </div>
          </div>
          <Link
            to="/profile/edit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
          >
            Editar Perfil
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coluna Principal */}
        <div className="lg:col-span-2 space-y-8">
          {/* Pedidos Recentes */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Package className="text-gray-500" />
              Pedidos Recentes
            </h2>
            <Link
              to="/orders"
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
            >
              Ver todos os pedidos
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Links Rápidos */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Acesso Rápido</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/wishlist"
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition group"
              >
                <div className="flex items-center gap-3">
                  <Heart className="text-red-500 group-hover:scale-110 transition" />
                  <div>
                    <p className="font-medium">Lista de Desejos</p>
                    <p className="text-sm text-gray-600">5 itens salvos</p>
                  </div>
                </div>
              </Link>
              <Link
                to="/cart"
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition group"
              >
                <div className="flex items-center gap-3">
                  <ShoppingCart className="text-blue-500 group-hover:scale-110 transition" />
                  <div>
                    <p className="font-medium">Carrinho</p>
                    <p className="text-sm text-gray-600">{totalItems} itens</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Endereços */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-gray-500" />
              <h2 className="text-xl font-semibold">Endereços</h2>
            </div>
            <Link
              to="/profile/edit"
              className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
            >
              Gerenciar endereços
              <ChevronRight size={14} />
            </Link>
          </div>

          {/* Cartões */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="text-gray-500" />
              <h2 className="text-xl font-semibold">Cartões</h2>
            </div>
            <Link
              to="/profile/edit"
              className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
            >
              Gerenciar cartões
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
