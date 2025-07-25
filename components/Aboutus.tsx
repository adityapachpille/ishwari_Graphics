import Image from 'next/image'
import React from 'react'
import Link from 'next/link';


const AboutUs = () => {
  return (
    <>
    <section id='about' className="pt-20 md:pt-10 px-4 md:px-18 bg-white pb-10">
      {/* Centered Title */}
      <div className="text-center -mt-[120px] md:mt-0 mb-10">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-700">Your ideas, our creative touch <br></br>Let’s design something extraordinary!</h3>
          <p className="text-gray-600 text-base leading-relaxed">
          Welcome to Ishwari Graphics And Advertising, your trusted partner for creative graphic design and printing services in Mangrulpir. With 4+ years of experience, we bring your ideas to life with stunning, high-quality designs.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
          We specialize in political designs, wedding cards, banners, cut-out banners, bill books, and custom printing that leave a lasting impression. Whether it's for business or personal events, our expert team is committed to delivering unique, on-time, and professional solutions tailored to your needs.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
          At Ishwari Graphics And Advertising, we blend creativity, precision, and cutting-edge printing technology to ensure every project is completed with exceptional quality and on-time delivery. We work closely with each client to understand their specific needs and provide personalized solutions that exceed expectations.
          </p>

        <Link href='https://wa.me/9175863046'>
  <button className="bg-gray-200 text-black px-6 py-2 rounded-lg hover:bg-[#94cace] transition duration-300">
    Start Your Project with Us
  </button>
</Link>



        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 h-[420px] relative">
  <Image 
    src="/ishwariabout..webp"
    alt="About Us"
    fill
    className="rounded-xl object-cover"
  />
</div>

      </div>

    </section>



    </>
  )
}

export default AboutUs
