import React, { useState, useEffect } from 'react';

export default function HeavyMetalDetoxPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set initial countdown time (you can adjust this)
    const targetTime = new Date().getTime() + (15 * 60 * 1000); // 15 minutes from now
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;
      
      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => String(time).padStart(2, '0');

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Header Banner */}
      <div className="bg-black text-white text-center py-4 px-5">
        <h1 className="text-base font-bold">
          Before we package your shipment we have one last special offer
        </h1>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto bg-white px-8 py-10">
        {/* Main Headline */}
        <h2 className="text-center text-2xl text-gray-800 mb-3 font-normal">
          Upgrade your order with our Heavy Metal Detox Supplement - now 20% OFF!
        </h2>
        
        {/* Urgency Text */}
        <p className="text-center text-lg text-gray-800 mb-6">
          Hurry! This offer ends in
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="text-center">
            <span className="text-4xl font-bold text-gray-800 block">
              {formatTime(timeLeft.hours)}
            </span>
            <span className="text-sm text-gray-500">Hours</span>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold text-gray-800 block">
              {formatTime(timeLeft.minutes)}
            </span>
            <span className="text-sm text-gray-500">Minutes</span>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold text-gray-800 block">
              {formatTime(timeLeft.seconds)}
            </span>
            <span className="text-sm text-gray-500">Seconds</span>
          </div>
        </div>

        {/* Subheadline */}
        <h3 className="text-center text-lg text-gray-800 mb-8 font-bold">
          (Just like the toxins you're about to flush out..)
        </h3>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-10 mb-10">
          {/* Product Image */}
          <div className="flex-shrink-0 lg:w-52">
            <img 
              src="https://img.funnelish.com/82967/806656/1753087977-6%20new%20labels-01%203DD.jpg" 
              alt="Heavy Metal Detox Capsules" 
              className="w-full h-auto mx-auto lg:mx-0"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              <strong>This is the essential next step in your detox journey. Don't stop at parasites - 
              remove the toxins they leave behind.</strong>
            </p>
            
            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              Most parasite cleanses don't go far enough. After the parasites are gone, 
              <strong> heavy metals like mercury, aluminum, and lead</strong> remain in your organs, joints, 
              and brain.
            </p>

            <p className="text-base text-gray-800 mb-5 italic font-medium">
              "If you're only removing parasites, you're only solving half the problem."
            </p>

            <p className="text-sm text-gray-600 mb-4">Heavy metals can:</p>

            {/* Benefits List */}
            <div className="space-y-2 mb-5">
              <div className="flex items-center">
               
                <span className="text-sm text-gray-600"> 🧠 Disrupt your focus and mood</span>
              </div>
              <div className="flex items-center">
                
                <span className="text-sm text-gray-600"> 🧪 Damage your gut, immune system, and energy production</span>
              </div>
              <div className="flex items-center">
                
                <span className="text-sm text-gray-600"> 🧬 Interfere with mineral absorption and detox pathways</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Our <strong>Heavy Metal Detox</strong> blend uses <strong>natural binders</strong> like chlorella, fulvic acid, and 
              cilantro extract to safely pull out these metals and help your body complete the 
              cleanse.
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gray-100 border-l-4 border-gray-300 p-5 mb-8 rounded-r-md">
          <p className="text-base text-gray-700 italic mb-2 leading-relaxed">
            "I didn't realize how much better I could feel until I added the Heavy Metal Detox. 
            Brain fog gone in days."
          </p>
          <p className="text-sm text-gray-800 font-bold">– Verified Customer</p>
        </div>

        {/* Why Now Section */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-gray-800 mb-4">Why Now?</h4>
          
          <ul className="space-y-2 mb-6">
            <li className="text-sm text-gray-600">
              • Normally: <span className="line-through text-gray-500">$42.00</span>
            </li>
            <li className="text-sm text-gray-600">
              • Today only: <span className="font-bold text-gray-800">$33.60</span> <span className="text-green-600 font-bold">(20% savings)</span>
            </li>
            <li className="text-sm text-gray-600">• 30-day supply</li>
            <li className="text-sm text-gray-600">• Designed to follow parasite cleansing for maximum effectiveness</li>
          </ul>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 px-8 rounded-md text-lg uppercase transition-all duration-300 mb-4">
          YES! Add Heavy Metal Detox To My Order For $33.60
        </button>

        {/* Decline Link */}
        <p className="text-center">
          <button className="text-blue-500 hover:text-blue-700 underline text-sm">
            No thanks, I'll skip the final step of my detox (even if metals stay in my brain, gut 
            & joints...
          </button>
        </p>
      </div>
    </div>
  );
}