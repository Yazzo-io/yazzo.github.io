import Navigation from "../components/Navigation";
import dynamic from "next/dynamic";

const HeroSlideshow = dynamic(() => import("../components/HeroSlideshow"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary font-sans">
      <Navigation />
      <main className="pt-20">
        <HeroSlideshow />

        {/* Small features / links section */}
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-yazzo-500">What we build</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">Simple, powerful apps for teams</h2>
            <p className="mt-4 text-base text-text-secondary">Explore our products, meet the team, or get in touch — launching Feb 26.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a href="/products" className="rounded-md bg-yazzo-500 px-4 py-2 text-sm font-semibold text-white shadow-yazzo hover:bg-yazzo-600">Products</a>
              <a href="/about" className="text-sm font-medium text-text-primary underline">Company</a>
              <a href="/team" className="text-sm font-medium text-text-primary underline">Team</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
