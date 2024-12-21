import React from 'react';

function Cart({ items }) {
  return (
    <div className="cart p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Shopping Cart</h2>
      <div className="flex flex-col space-y-4">
        {items.length === 0 ? (
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 border-b border-gray-200">
              <img src={item.src} alt={item.type} className="h-20 w-20 object-cover rounded-md" />
              <span className="text-xl font-semibold text-gray-700">{item.type}</span>
            </div>
          ))
        )}
      </div>
      {items.length > 0 && (
        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
