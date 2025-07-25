'use client'

import Image from 'next/image'

const graphicItems = [
  {
    image: '/portfolio/portfolio1.jpg',
    link: 'https://wa.me/9175863046',
  },
  {
    image: '/portfolio/portfolio2.jpg',
    link: 'https://wa.me/9175863046',
  },
  {
    image: '/portfolio/portfolio5.jpg',
    link: 'https://wa.me/9175863046',
  },
]

const weddingItems = [
   {
    image: '/portfolio/portfolio3.jpg',
    link: 'https://wa.me/9175863046',
  },
  {
    image: '/portfolio/portfolio4.jpg',
    link: 'https://wa.me/9175863046',
  },
  {
    image: '/portfolio/portfolio7.jpg',
    link: 'https://wa.me/9175863046',
  },
]

const weddinggItems = [
  {
    image: '/portfolio/portfolio7.jpg',
    link: 'https://wa.me/9175863046',
  },
  {
    image: '/portfolio/portfolio3.jpg',
    link: 'https://wa.me/9175863046',
  },
  {
    image: '/portfolio/portfolio4.jpg',
    link: 'https://wa.me/9175863046',
  },
]


export default function OurWork() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 mt-14">
      {/* First Row - Graphic Items */}
      <h2 className="text-3xl font-bold text-center mb-10">Our Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {graphicItems.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative" style={{ width: '100%', height: '500px' }}>
              <Image
                src={item.image}
                alt={`Graphic Item ${idx + 1}`}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 flex flex-col items-center">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  Customize This
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row - Wedding Cards */}
      
      <section className='mt-16 mb-10'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {weddingItems.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative" style={{ width: '100%', height: '500px' }}>
              <Image
                src={item.image}
                alt={`Wedding Card ${idx + 1}`}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="p-4 flex flex-col items-center">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition">
                  Customize This
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      </section>




      <section className='mt-16 mb-10'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {weddinggItems.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative" style={{ width: '100%', height: '500px' }}>
              <Image
                src={item.image}
                alt={`Weddingg Card ${idx + 1}`}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="p-4 flex flex-col items-center">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition">
                  Customize This
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      </section>

    </section>
  )
}
