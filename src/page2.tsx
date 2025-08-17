import React from 'react';

export default function TudcaLiverSupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-black text-white text-center py-4 px-5">
        <h1 className="text-lg md:text-xl font-bold">
          WAIT! Your order is not complete!
        </h1>
      </div>

      {/* Main Container */}
      <div className="w-full bg-white px-4 md:px-8 py-4">
        {/* Main Headline */}
        <h2 className="text-center text-xl md:text-2xl text-gray-800 mb-2 md:mb-1 font-bold leading-tight">
          Add TUDCA - The Liver Support Binder Your Detox Plan Needs - Now 73% OFF!
        </h2>
        
        {/* Subheadline */}
        <h3 className="text-center text-2xl md:text-3xl text-gray-700 mb-6 md:mb-8 font-bold leading-tight">
          Almost Complete... Just One More Step
        </h3>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Empty Space - only on large screens */}
          <div className="hidden lg:block lg:flex-1"></div>

          {/* Right Content - Full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 px-0 md:px-4 lg:px-8">
            <h4 className="text-xl md:text-2xl text-gray-800 mb-4 md:mb-5 font-bold leading-relaxed">
              If you're cleansing without supporting your liver, you're missing half the battle
            </h4>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-4 md:mb-5 leading-relaxed">
              With just one capsule a day, TUDCA works to:
            </p>

            {/* Benefits List */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-xl md:text-2xl mr-2 md:mr-3 flex-shrink-0">🔒</span>
                <span className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Bind and flush out toxins released during the parasite purge
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-xl md:text-2xl mr-2 md:mr-3 flex-shrink-0">🧠</span>
                <span className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Protect brain and mood from toxic overload
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-xl md:text-2xl mr-2 md:mr-3 flex-shrink-0">💪</span>
                <span className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Support healthy bile flow and digestion
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-xl md:text-2xl mr-2 md:mr-3 flex-shrink-0">⚡</span>
                <span className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Improve energy and reduce "detox side effects"
                </span>
              </div>
            </div>

            <div className="mb-4 md:mb-5">
  <div className="flex items-start">
    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
    <span className="text-xl md:text-2xl mr-2 md:mr-3 flex-shrink-0">🚨</span>
    <span className="text-lg md:text-xl text-gray-700 leading-relaxed">
      We're offering you 3 bottles for 50% off — but only right now.
    </span>
  </div>
</div>

<div className="text-center">
              
              {/* Product Images */}
              <div className="flex mb-6">
                <img 
                  src="https://img.funnelish.com/82967/806656/1747801988-+.png" 
                  alt="TUDCA Liver Support - 3 Bottles" 
                  className="max-w-full h-auto max-h-48 md:max-h-64 w-auto"
                />
              </div>

              {/* Pricing */}
              <div className="text-left mb-6">
                <div className="flex items-start md:items-center mb-2">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 md:mt-0 flex-shrink-0"></span>
                  <span className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Retails for: <span className="font-bold text-gray-800">$456.93</span>
                  </span>
                </div>
                <div className="flex items-start md:items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 md:mt-0 flex-shrink-0"></span>
                  <span className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Your price today: <span className="font-bold text-gray-800">$89.00</span> 
                    <span className="text-red-600 font-bold ml-1">($29.66/Bottle)</span>
                  </span>
                </div>
              </div>

               {/* CTA Button */}
          <div className="flex justify-start mb-6">
            <button className="w-full max-w-md bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded text-lg uppercase shadow-md transition-all duration-300">
              YES! CONFIRM THIS AMAZING UPGRADE
            </button>
          </div>

          {/* Decline Link - aligned with CTA (left-aligned, same column) */}
          <div className="mb-4 md:mb-6 text-left">
            <button className="text-blue-500 hover:text-blue-700 font-bold text-sm md:text-sm leading-relaxed inline-block max-w-md">
              No thanks, I don't want to upgrade my order. When I run out I'll just pay the full price of $89
              per bottle on my next order.
            </button>
          </div>

          {/* Testimonial - aligned left under decline link */}
          <div className="mb-10 text-left">
            <div className="bg-gray-50 border border-gray-200 rounded-md p-4 md:p-5 shadow-sm max-w-[420px]">
              <div className="flex items-start">
                <span className="text-xl md:text-2xl text-green-500 mr-3 flex-shrink-0">
                  💚
                </span>
                <div>
                  <p className="text-sm md:text-base text-gray-700 italic mb-2 leading-relaxed">
                    "I added TUDCA last minute and it made my detox SO much
                    easier. No brain fog, no nausea!"
                  </p>
                  <p className="text-xs md:text-sm text-gray-800 font-bold">
                    – Verified Customer
                  </p>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
} 