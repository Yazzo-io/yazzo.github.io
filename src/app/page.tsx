import dynamic from "next/dynamic";
import FloatingNav from "../components/FloatingNav";

const HeroSlideshow = dynamic(() => import("../components/HeroSlideshow"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-background-primary">
      <FloatingNav />
      <HeroSlideshow />
    </div>
  );
}
