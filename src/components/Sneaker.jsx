import React, { useState } from 'react';

const Sneaker = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="flex gap-16 p-8 max-w-7xl mx-auto">
        {/* 左侧图片区域 */}
        <div className="flex-1">
          <div className="mb-4">
            <img
              src="/images/image-product-1.jpg"
              alt="Fall Limited Edition Sneakers"
              className="rounded-lg w-full cursor-pointer"
              onClick={() => setSelectedImage("/images/image-product-1.jpg")}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <img
                key={num}
                src={`/images/image-product-${num}.jpg`}
                alt={`Thumbnail ${num}`}
                className="rounded-lg border-2 hover:border-orange-500 cursor-pointer"
                onClick={() => setSelectedImage(`/images/image-product-${num}.jpg`)}
              />
            ))}
          </div>
        </div>

        {/* 右侧产品信息 */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-gray-500 font-bold tracking-wider mb-4">SNEAKER COMPANY</h2>
          <h1 className="text-4xl font-bold mb-8">Fall Limited Edition Sneakers</h1>
          <p className="text-gray-600 mb-8">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
          </p>

          <div className="mb-8">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">$125.00</span>
              <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded font-bold">50%</span>
            </div>
            <span className="text-gray-400 line-through">$250.00</span>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center bg-gray-100 rounded-lg">
              <button className="px-4 py-3 text-orange-500 font-bold text-xl">-</button>
              <span className="px-6 py-3 font-bold">0</span>
              <button className="px-4 py-3 text-orange-500 font-bold text-xl">+</button>
            </div>
            <button className="flex-1 bg-orange-500 text-white rounded-lg px-8 py-3 font-bold flex items-center justify-center gap-2 hover:bg-orange-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* 简单的图片预览模态框 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[90vh] max-w-[90vw] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-orange-500"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sneaker;