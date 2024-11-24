export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-16 py-8 border-b">
      <div className="flex items-center gap-12">
        <h1 className="text-3xl font-bold">sneakers</h1>
        <div className="flex gap-8">
          <a href="#" className="text-gray-500 hover:text-gray-800">Collections</a>
          <a href="#" className="text-gray-500 hover:text-gray-800">Men</a>
          <a href="#" className="text-gray-500 hover:text-gray-800">Women</a>
          <a href="#" className="text-gray-500 hover:text-gray-800">About</a>
          <a href="#" className="text-gray-500 hover:text-gray-800">Contact</a>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <button>
          <img src="/images/icon-cart.svg" alt="Cart" className="w-6 h-6" />
        </button>
        <img src="/images/image-avatar.png" alt="Avatar" className="w-12 h-12 rounded-full cursor-pointer" />
      </div>
    </nav>
  );
}
