import FloatingNav from "../../components/FloatingNav";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background-primary">
      <FloatingNav />

      <div className="py-20 px-6 mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Yazzo transforms how people discover local experiences
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Connecting event organizers and restaurants with audiences through real-time, location-based offers
          </p>
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The Problem</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Events and restaurants lose revenue when seats stay empty. Cultural happenings can't react fast when ticket sales slow. Restaurants face low-traffic hours and food waste.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Current channels like social media and ads are too slow and not location-aware. They don't allow organizers to respond quickly to changing demand.
          </p>
        </section>

        {/* Our Solution */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Solution</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Yazzo connects people to local events and restaurants through real-time offers on a map. Organizers publish instant deals — for example "–50% for tonight's concert".
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Users reserve directly in the app, pay a small commission, and receive a QR code to redeem. Everyone benefits: more visibility, higher occupancy, less waste.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Help event organizers and restaurants fill empty seats through real-time, location-based offers that connect supply with demand at the perfect moment.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Become the leading platform for promoting new experiences and local services in the Nordics, transforming how people discover and enjoy their cities.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainability & Impact */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Sustainability & Impact</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-yazzo-500 pl-6">
              <h3 className="text-xl font-semibold text-white mb-2">Optimize existing resources</h3>
              <p className="text-gray-300">
                Instead of letting seats go empty, we help venues and restaurants maximize capacity with what they already have.
              </p>
            </div>
            <div className="border-l-4 border-yazzo-500 pl-6">
              <h3 className="text-xl font-semibold text-white mb-2">Increase accessibility</h3>
              <p className="text-gray-300">
                Make cultural experiences more accessible through affordable, last-minute offers that open doors for everyone.
              </p>
            </div>
            <div className="border-l-4 border-yazzo-500 pl-6">
              <h3 className="text-xl font-semibold text-white mb-2">Support small entrepreneurs</h3>
              <p className="text-gray-300">
                Give small theatres, performers, and restaurants visibility without large marketing budgets.
              </p>
            </div>
            <div className="border-l-4 border-yazzo-500 pl-6">
              <h3 className="text-xl font-semibold text-white mb-2">Strengthen local identity</h3>
              <p className="text-gray-300">
                Guide consumers to local services and boost urban cultural vibrancy through location-based discovery.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}