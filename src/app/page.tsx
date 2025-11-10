import dynamic from "next/dynamic";
import FloatingNav from "../components/FloatingNav";
import Footer from "../components/Footer";

const HeroSlideshow = dynamic(() => import("../components/HeroSlideshow"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-background-primary flex flex-col">
      <FloatingNav />
      <HeroSlideshow />
      <Footer />
    </div>
  );
}
