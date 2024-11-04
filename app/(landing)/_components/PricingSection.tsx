import { pricingPlans } from "@/constants";
import { PricingPlan } from "@/types";

const PricingSection = () => (
  <section
    id="pricing"
    className="py-12 bg-gradient-to-b from-[#1E222E] to-black text-gray-200"
  >
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Pricing</h2>
    <div className="grid gap-8 md:grid-cols-3 px-4 md:px-16">
      {pricingPlans.map((plan: PricingPlan, index) => (
        <div
          key={index}
          className={`p-8 rounded-lg shadow-lg transition-all transform hover:scale-105
            ${
              plan.title === "Pro"
                ? "bg-gradient-to-r from-[#4A90E2] to-[#A066FF] text-white border border-purple-400 shadow-xl"
                : "bg-[#0A0E15] text-gray-300 border border-gray-700 shadow-md"
            }`}
          style={{
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
          <p className="mt-4 text-5xl font-extrabold">{plan.price}</p>
          {plan.priceFrequency && (
            <p className="text-sm text-gray-400 mt-1">{plan.priceFrequency}</p>
          )}
          <ul className="mt-6 space-y-3 text-sm">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 bg-[#4A90E2] rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
          <button
            className={`mt-8 px-5 py-3 w-full rounded-lg font-medium transition-all transform hover:scale-105 ${
              plan.title === "Pro"
                ? "bg-white text-[#A066FF] hover:bg-[#F3F4F6] shadow-lg hover:shadow-purple-500/50"
                : "bg-[#4A90E2] text-white hover:bg-[#357ABD] shadow hover:shadow-blue-500/50"
            }`}
          >
            {plan.buttonLabel}
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default PricingSection;
