import React, { useState } from 'react'

function PricingSection() {
    const [ProductCount , setProductCount] = useState(1);

    const starterPrice = Math.round(4000 * (ProductCount / 50))
    const businessPrice = Math.round(7500 * (ProductCount / 50))
  return (
    <section className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-16 '>Pricing</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                {/* starter plan */}
                <div className='bg-white p-8 rounded-lg shadow-lg '>
                    <h3 className='text-xl text-gray-600 mb-4'>Starter</h3>
                    <p className='text-3xl font-bold mb-6'>${starterPrice}/mo</p>
                </div>
                {/* business plan */}
                <div className='bg-white p-8 rounded-lg shadow-lg '>
                    <h3 className='text-xl text-gray-600 mb-4'>Business</h3>
                    <p className='text-3xl font-bold mb-6'>${businessPrice}/mo</p>
                </div>
            </div>

            <div>
                <p className='text-center mb-4 text-gray-600'>{ProductCount}products</p>
                <div className='max-w-xl mx-auto'>
                    <div className='flex items-center gap-2'>
                        <span className='text-xs sm:text-sm text-gray-600'>1</span>
                        <input type="range"
                         min={1} max={50} 
                         value={ProductCount} 
                         onChange={(e) => setProductCount(parseInt(e.target.value))}
                         className='flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                          />
                        <span className='text-xs sm:text-sm text-gray-600'>50</span>
                    </div>
                </div>


               <div className='text-center mt-12'>
                <p className='text-xl text-gray-600 mb-4'>ready to get started?</p>
                <button className='bg-[#FF862F] text-white text-lg rounded-lg py-3 px-6 hover:bg-orange-300 transition-colors cursor-pointer'>Get started</button>
               </div>
            </div>
        </div>

    </section>
  )
}

export default PricingSection