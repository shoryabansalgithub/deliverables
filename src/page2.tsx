import React from 'react';

export default function TudcaLiverSupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-black text-white text-center py-4 px-5">
        <h1 className="text-xl font-bold">
          WAIT! Your order is not complete!
        </h1>
      </div>

      {/* Main Container */}
      <div className="w-full bg-white px-8 py-4">
        {/* Main Headline */}
        <h2 className="text-center text-2xl text-gray-800 mb-1 font-bold leading-tight">
          Add TUDCA - The Liver Support Binder Your Detox Plan Needs - Now 73% OFF!
        </h2>
        
        {/* Subheadline */}
        <h3 className="text-center text-3xl text-gray-700 mb-8 font-bold leading-tight">
          Almost Complete... Just One More Step
        </h3>

        {/* Main Content Section */}
        <div className="flex">
          {/* Left Empty Space */}
          <div className="flex-1"></div>

          {/* Right Content - All content on the right side */}
          <div className="w-1/2 px-8">
            <h4 className="text-2xl text-gray-800 mb-5 font-bold leading-relaxed">
              If you're cleansing without supporting your liver, you're missing half the battle
            </h4>
            
            <p className="text-2xl text-gray-700 mb-5 leading-relaxed">
              With just one capsule a day, TUDCA works to:
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-2xl mr-3 flex-shrink-0">🔒</span>
                <span className="text-xl text-gray-700 leading-relaxed">
                  Bind and flush out toxins released during the parasite purge
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-2xl mr-3 flex-shrink-0">🧠</span>
                <span className="text-xl text-gray-700 leading-relaxed">
                  Protect brain and mood from toxic overload
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-2xl mr-3 flex-shrink-0">💪</span>
                <span className="text-xl text-gray-700 leading-relaxed">
                  Support healthy bile flow and digestion
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-2xl mr-3 flex-shrink-0">⚡</span>
                <span className="text-xl text-gray-700 leading-relaxed">
                  Improve energy and reduce "detox side effects"
                </span>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mr-12 mb-4">
                <span className="text-2xl mr-2">🚨</span>
                <h4 className="text-xl font-semibold text-gray-800">
                  We're offering you 3 bottles for 50% off — but only right now.
                </h4>
              </div>
              
              {/* Product Images */}
              <div className="flex justify-center items-center mb-6">
                <img 
                  src="https://img.funnelish.com/82967/806656/1747801988-+.png" 
                  alt="TUDCA Liver Support - 3 Bottles" 
                  className="max-w-full h-auto max-h-64"
                />
              </div>

              {/* Pricing */}
              <div className="text-left mb-6">
                <div className="flex items-center mb-2">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  <span className="text-xl text-gray-700">
                    Retails for: <span className="font-bold text-gray-800">$456.93</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  <span className="text-xl text-gray-700">
                    Your price today: <span className="font-bold text-gray-800">$89.00</span> 
                    <span className="text-red-600 font-bold ml-1">($29.66/Bottle)</span>
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-md text-lg uppercase transition-all duration-300 mb-4">
                YES! CONFIRM THIS AMAZING UPGRADE
              </button>
            </div>
          </div>
        </div>

        {/* Decline Link */}
        <div className="flex">
          <div className="flex-1"></div>
          <div className="w-1/2 px-8 text-center mb-8">
            <button className="text-blue-500 hover:text-blue-700 font-bold text-sm leading-relaxed">
              No thanks, I don't want to upgrade my order. When I run out I'll just pay the full price of $89 
              per bottle on my next order.
            </button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex">
          <div className="flex-1"></div>
          <div className="w-1/2 px-8">
            <div className="bg-white border border-black-900 rounded-lg p-6">
              <div className="flex items-start">
                <span className="text-2xl text-green-500 mr-3 flex-shrink-0">💚</span>
                <div>
                  <p className="text-base text-gray-700 italic mb-3 leading-relaxed">
                    "I added TUDCA last minute and it made my detox SO much easier. No brain fog, no nausea!"
                  </p>
                  <p className="text-sm text-gray-800 font-bold">
                    – Verified Customer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}