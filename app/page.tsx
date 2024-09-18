import Gallery from "@/src/components/Gallery";
import Header from "../src/components/Header";
import Features from "@/src/components/Features";
import Team from "@/src/components/Team";
import Highlights from "@/src/components/Highlights";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="w-full max-w-[1920px] mx-auto h-full">
      <Header />
      <Gallery />
      <Features />
      <Team />
      <Highlights />
      <Footer />
    </div>
  );
}
