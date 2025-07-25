import Image from 'next/image';

const productData = [
  {
    title: "Graphic Design",
    image: "/Graphic Design.webp",
    description: "Custom graphic design services that capture attention and elevate your brand."
  },
  {
    title: "Political Design",
    image: "/politicaldesign.jpg",
    description: "Impactful political banners, posters, and campaign materials that make a statement."
  },

  {
    title: "Printing Services",
    image: "/Printing Services.jpg",
    description: "High-quality printing for banners, flyers, bill books, visiting cards, and more."
  },
  {
    title: "Wedding Cards",
    image: "/Wedding Cards.webp",
    description: "Elegant and customized wedding cards to make your special day unforgettable."
  },
  {
    title: "Cut-Out Banners",
    image: "/Cut-Out Banners.webp",
    description: "Creative cut-out banners perfect for events, promotions, and celebrations."
  },
 
  {
    title: "Bill Books & Custom Designs",
    image: "/BillBooks.jpg",
    description: "Personalized bill books and custom design solutions tailored for businesses."
  },
];

const Services = () => {
  return (
    <section id='product' className="py-12 px-4 md:px-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {productData.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className="w-full h-48 relative mb-4 rounded overflow-hidden">
              <Image 
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
