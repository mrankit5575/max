import { CheckCircleIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const features = [
  {
    title: "Affordable",
    icon: CurrencyDollarIcon,
    description: "High-quality tutoring at competitive prices.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverColor: "hover:bg-blue-600"
  },
  {
    title: "Verified Tutors",
    icon: ShieldCheckIcon,
    description: "Only certified and background-checked educators.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    hoverColor: "hover:bg-purple-600"
  },
  {
    title: "24/7 Support",
    icon: ClockIcon,
    description: "Always here to help whenever you need us.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    hoverColor: "hover:bg-green-600"
  },
  {
    title: "Satisfaction Guaranteed",
    icon: CheckCircleIcon,
    description: "Your success is our priority.",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverColor: "hover:bg-orange-600"
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">FindMyTutor</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the benefits that set us apart in the education space
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden ${feature.bgColor} p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Icon Container with Hover Effect */}
              <div className={`relative z-10 w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:${feature.hoverColor} group-hover:scale-110`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor} transition-colors duration-300 group-hover:text-blue-900`} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-blue-900">{feature.title}</h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-blue-900">{feature.description}</p>
              
              {/* Hidden Learn More Link */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium text-black border-b border-white/50 hover:border-white transition-colors duration-200">
                  Learn more →
                </span>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-500"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}