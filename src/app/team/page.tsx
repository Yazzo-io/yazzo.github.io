import FloatingNav from "../../components/FloatingNav";
import Image from "next/image";

export default function Team() {
  return (
    <div className="min-h-screen bg-background-primary">
      <FloatingNav />

      <div className="pt-24 pb-20 px-6 mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Our Team
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Meet the people building Yazzo
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Timo Saari */}
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src="/TimoSquare.png"
                alt="Timo Saari"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Timo Saari</h3>
            <p className="text-yazzo-400 font-semibold mb-4">Founder & CEO</p>
            <p className="text-gray-300 leading-relaxed">
              Timo is a software developer currently studying at Hive Helsinki coding school. Before pivoting to tech, he built a career as a choreographer and producer in dance and physical theatre across Finland and internationally. This unique blend of creative and technical expertise drives Yazzo's vision to make culture more accessible and sustainable.
            </p>
          </div>

          {/* Venla Ilona Blom */}
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src="/venlaSquare.png"
                alt="Venla Ilona Blom"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Venla Ilona Blom</h3>
            <p className="text-yazzo-400 font-semibold mb-4">Co-Founder & Creative Lead</p>
            <p className="text-gray-300 leading-relaxed">
              Venla brings deep expertise in arts and cultural production, having worked extensively in Finland's vibrant cultural sector. Her experience in event management, audience engagement, and creative strategy helps Yazzo understand and serve the needs of event organizers, theatres, and cultural venues.
            </p>
          </div>
        </div>

        {/* Our Strength Section */}
        <div className="bg-black/30 backdrop-blur-sm border border-yazzo-500/30 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Strength</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We combine first-hand experience from the cultural sector with modern software development skills. Having faced the challenge of empty seats and last-minute ticket sales ourselves, we understand the pain points of event organizers intimately. This insider perspective, paired with technical capability, positions us uniquely to build a solution that truly serves the needs of both venues and audiences.
          </p>
        </div>
      </div>
    </div>
  );
}