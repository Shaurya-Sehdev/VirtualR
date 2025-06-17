import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20 border-t border-neutral-800 text-white">
      <div className="text-3xl sm:text-5xl lg:text-6xl text-center mt-20 tracking-wide">
        Pricing
      </div>

      <div className="flex flex-wrap justify-center pt-10">
        {pricingOptions.map((item, index) => (
          <div key={index} className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="border border-neutral-700 rounded-2xl p-6 h-full bg-black flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  {item.title === "Pro" && (
                    <span className="text-sm font-medium bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text ml-1">
                      (Most Popular)
                    </span>
                  )}
                </div>

                <p className="text-4xl font-bold mb-4">
                  {item.price}
                  <span className="text-sm font-normal text-neutral-400">
                    {" "}
                    /Month
                  </span>
                </p>

                <div className="space-y-4">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div className="flex justify-center items-center bg-neutral-900 h-8 w-8 p-2 rounded-full text-green-400 mr-3">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="mt-8 border border-orange-500 text-orange-500 py-2 rounded font-medium transition-all duration-300 hover:bg-gradient-to-r from-orange-500 to-red-800 hover:text-black hover:font-bold">
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
