
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

export default function CartIcon() {
  const { cartItems } = useCart();

  return (
    <div className="relative">
      <FaShoppingCart size={24} />
      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-2">
          {cartItems.length}
        </span>
      )}
    </div>
  );
}
