import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">SneakerStore</h3>
            <p className="text-sm mb-4">Sua loja favorita de tênis com as melhores marcas e preços.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-white"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-white"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-white"><Youtube size={20} /></Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="hover:text-white">Produtos</Link></li>
              <li><Link to="/carrinho" className="hover:text-white">Carrinho</Link></li>
              <li><Link to="/wishlist" className="hover:text-white">Lista de Desejos</Link></li>
              <li><Link to="/profile" className="hover:text-white">Minha Conta</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Ajuda</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Como Comprar</Link></li>
              <li><Link href="#" className="hover:text-white">Trocas e Devoluções</Link></li>
              <li><Link href="#" className="hover:text-white">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(11) 1234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contato@sneakerstore.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Rua Example, 123 - São Paulo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 SneakerStore. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}