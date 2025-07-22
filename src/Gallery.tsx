// components/CustomGallery.tsx

import React from 'react'

const CustomGallery: React.FC = () => {
  return (
    <section className="grid grid-cols-3 grid-rows-4 gap-2 p-4 max-w-7xl mx-auto h-[80vh]">
      {/* img1: columna izquierda completa */}
      <div className="col-span-1 row-span-4 overflow-hidden rounded-md group">
        <img
          src="https://source.unsplash.com/random/400x800?colorful"
          alt="img1"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* img2: parte superior derecha */}
      <div className="col-span-2 row-span-1 overflow-hidden rounded-md group">
        <img
          src="https://source.unsplash.com/random/800x200?candy"
          alt="img2"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* img3: centro izquierda */}
      <div className="col-span-1 row-span-2 overflow-hidden rounded-md group">
        <img
          src="https://source.unsplash.com/random/400x400?paint"
          alt="img3"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* img4: centro derecha */}
      <div className="col-span-1 row-span-1 overflow-hidden rounded-md group">
        <img
          src="https://source.unsplash.com/random/400x200?snack"
          alt="img4"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* img5: parte inferior derecha */}
      <div className="col-span-2 row-span-1 overflow-hidden rounded-md group">
        <img
          src="https://source.unsplash.com/random/800x200?sweets"
          alt="img5"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </section>
  )
}

export default CustomGallery
