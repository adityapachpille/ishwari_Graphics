import Image from 'next/image'
import React from 'react'
import { Handshake, Heart, TestTubeDiagonal,Lightbulb, Eye, Target } from 'lucide-react';

const AboutUspage = () => {
  return (
    <>
    <section  className="pt-28 md:pt-10 px-4 md:px-18 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
    
    {/* Text */}
    <div className="w-full md:w-1/2 space-y-4">
      <h3 className="text-4xl font-semibold text-gray-700">Who We Are</h3>
      <p className="text-gray-600 text-base leading-relaxed">
      I am Shyam Mote, a passionate graphic designer with years of experience in creating unique and impactful designs. Over the years, I have worked on a wide variety of creative projects that helped me develop a deep understanding of design, printing, and visual communication.
      </p>
      <p className="text-gray-600 text-base leading-relaxed">
      In the last 4+ years, I turned my passion into a dedicated business and proudly established Ishwari Graphics & Advertising in Mangrulpir. Since then, we have been serving customers with high-quality graphic design, political campaign materials, wedding cards, custom printing, and much more. My goal is to bring every client’s vision to life with creativity, precision, and timely delivery.
      </p>
    </div>

    {/* Image */}
    <div className="mt-20 w-full md:w-1/2 h-[420px] relative">
      <Image 
        src="/about.webp"
        alt="About Us"
        fill
        className="rounded-xl object-cover"
      />
    </div>

  </div>
</section>





    <section className="py-10 px-4 md:px-10 bg-white">
    
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            <Eye className="text-themeColor text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Our Vision</h3>
          </div>
          <p className="text-gray-600 text-md">
          To become Mangrulpir’s most trusted and innovative graphic design and advertising partner, known for exceptional creativity and customer satisfaction.

          </p>
        </div>

        {/* Mission */}
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            <Target className="text-themeColor text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Our Mission</h3>
          </div>
          <p className="text-gray-600 text-md">
          To provide affordable, creative, and high-quality graphic design and printing services that help our clients stand out and leave a lasting impression.
          </p>
        </div>
      </div>
    </section>








  
<section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    
    {/* Feature 1 */}
    <div className="flex flex-col items-center text-center transition-all duration-300 rounded-xl p-4 hover:shadow-lg" style={{ boxShadow: '0 4px 20px #eff8fe' }}>
      <div className="w-14 h-14 mb-4 flex items-center justify-center bg-[#94cace] rounded-full">
        <Lightbulb className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Innovation</h3>
      <p className="text-gray-600">We constantly explore new ideas to deliver creative and modern design solutions.

</p>
    </div>

    {/* Feature 2 */}
    <div className="flex flex-col items-center text-center transition-all duration-300 rounded-xl p-4 hover:shadow-lg" style={{ boxShadow: '0 4px 20px #eff8fe' }}>
      <div className="w-14 h-14 mb-4 flex items-center justify-center bg-[#94cace] rounded-full">
        <Handshake className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Integrity</h3>
      <p className="text-gray-600">We believe in honest work, transparent communication, and keeping our promises.</p>
    </div>

    {/* Feature 3 */}
    <div className="flex flex-col items-center text-center transition-all duration-300 rounded-xl p-4 hover:shadow-lg" style={{ boxShadow: '0 4px 20px #eff8fe' }}>
      <div className="w-14 h-14 mb-4 flex items-center justify-center bg-[#94cace] rounded-full">
        <Heart className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Empathy</h3>
      <p className="text-gray-600">We understand our clients' needs and design with their vision and emotions in mind.</p>
    </div>

    {/* Feature 4 */}
    <div className="flex flex-col items-center text-center transition-all duration-300 rounded-xl p-4 hover:shadow-lg" style={{ boxShadow: '0 4px 20px #eff8fe' }}>
      <div className="w-14 h-14 mb-4 flex items-center justify-center bg-[#94cace] rounded-full">
        <TestTubeDiagonal className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Quality</h3>
      <p className="text-gray-600">We are committed to providing top-notch designs and premium printing services every time.</p>
    </div>

  </div>
</section>










    </>
  )
}

export default AboutUspage
