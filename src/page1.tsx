import React, { useEffect, useState } from "react";

export default function HeavyMetalDetoxPage() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetTime = Date.now() + 15 * 60 * 1000; // 15 min timer
    const id = setInterval(() => {
      const d = targetTime - Date.now();
      if (d <= 0) return setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        hours: Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((d % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((d % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const t = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Top banner (full width) */}
      <div className="w-full bg-black text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="py-4 text-center text-[16px] font-semibold">
            Before we package your shipment we have one last special offer
          </h1>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-4xl px-6 py-4">
        {/* Title */}
        <h2 className="text-center text-[20px] text-gray-900 font-bold  tracking-tight ">
          Upgrade your order with our Heavy Metal Detox Supplement - now 20% OFF!
        </h2>

        <p className="text-center text-[26px] text-gray-900 tracking-tight font-bold mb-2">Hurry! This offer ends in</p>

        {/* Countdown */}
        <div className="flex items-start justify-center gap-6 mb-4">
          {[
            { label: "Hours", val: t(timeLeft.hours) },
            { label: "Minutes", val: t(timeLeft.minutes) },
            { label: "Seconds", val: t(timeLeft.seconds) },
          ].map((x) => (
            <div key={x.label} className="text-center">
              <div className="text-[24px] font tracking-tighter leading-none text-gray-900">
                {x.val}
              </div>
              <div className="mt-2 text-[14px] text-gray-500 font-bold">{x.label}</div>
            </div>
          ))}
        </div>

        {/* Sub-head */}
        <h3 className="text-center text-[22px] tracking-tight  font-bold text-gray-900 mb-10">
          (Just like the toxins you're about to flush out..)
        </h3>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
          {/* Left column - Image and testimonial */}
          <div className="space-y-6">
            {/* Bottle image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://img.funnelish.com/82967/806656/1753087977-6%20new%20labels-01%203DD.jpg"
                alt="Heavy Metal Detox Capsules"
                className="w-auto h-auto scale-120 py-14"
                loading="eager"
              />
            </div>

            {/* Testimonial */}
            <div className="border-2 border-gray-800 rounded-lg p-4 bg-white">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 bg-gray-300 rounded-sm flex-shrink-0 mt-1"></div>
                <div>
                  <p className="text-[14px] italic text-gray-800 leading-relaxed">
                    "I didn't realize how much better I could feel until I added the Heavy Metal Detox. Brain fog gone in days."
                  </p>
                  <p className="text-[12px] font-bold text-gray-900 mt-2">– Verified Customer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-6">
            {/* Main content */}
            <div className="space-y-4">
              <p className="text-[18px] font-bold text-gray-900 tracking-tight leading-relaxed">
                This is the essential next step in your detox journey. Don't stop at parasites - remove the toxins they leave behind.
              </p>

              <p className="text-[16px] text-gray-800 font-weight-300 tracking-tight leading-relaxed">
                Most parasite cleanses don't go far enough. After the parasites are gone, <strong>heavy metals like mercury, aluminum, and lead</strong> remain in your organs, joints, and brain.
              </p>

              <p className="text-[16px] font-bold tracking-tight whitespace-normal md:whitespace-nowrap text-gray-800 leading-relaxed">
  "If you're only removing parasites, you're only solving half the problem."
</p>

              <p className="text-[16px] text-gray-800">Heavy metals can:</p>

              {/* Bullets with black dots */}
              <ul className="space-y-2 ml-1">
                <li className="flex items-center gap-3 text-[16px] text-gray-800">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0 mt-1"></span>
                  <span className="">🧠 Disrupt your focus and mood</span>
                </li>
                <li className="flex items-center gap-3 text-[16px] text-gray-800">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0 mt-1"></span>
                  <span>🧬 Damage your gut, immune system, and energy production</span>
                </li>
                <li className="flex items-center gap-3 text-[16px] text-gray-800">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0 mt-1"></span>
                  <span>🧪 Interfere with mineral absorption and detox pathways</span>
                </li>
              </ul>

              <p className="text-[16px] text-gray-800 leading-relaxed">
                Our <strong>Heavy Metal Detox</strong> blend uses <strong>natural binders</strong> like chlorella, fulvic acid, and cilantro extract to safely pull out these metals and help your body complete the cleanse.
              </p>
            </div>

            {/* Why Now section - moved to right column */}
            <div className="space-y-4 x-3 tracking-tight">
              <h4 className="text-[16px] font-bold tracking-tighter  text-gray-900">Why Now?</h4>
              
              <ul className="space-y-2 text-[16px] text-gray-800">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
                  <span>Normally: <span className="line-through font-bold text-gray-600">$42.00</span></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
                  <span>Today only: <strong>$33.60</strong> <span className="text-gray-600">(20% savings)</span></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full  bg-gray-800"></span>
                  <span>30-day supply</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
                  <span>Designed to follow parasite cleansing for maximum effectiveness</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 text-[16px] uppercase tracking-wide transition-colors">
              YES! Add Heavy Metal Detox To My Order For $33.60
            </button>

            {/* Decline link */}
            <p className="text-center ">
              <a href="#" className="text-blue-500 underline text-[12px] font-semibold nooverlay ">
                No thanks, I'll skip the final step of my detox (even if metals stay in my brain, gut & joints...
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}