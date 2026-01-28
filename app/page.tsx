
import Hero from "./components/Hero";
import Campanha from "./components/Campanha";
import TimelineInverno2026 from "./components/TimeLineInverno";
import MaisVendidos from "./components/MaisVendidos";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Campanha />
      <TimelineInverno2026
        images={[
          {src: "/images/Timeline1.jpg", alt: "Imagem 1"},
          {src: "/images/Timeline2.jpg", alt: "Imagem 2"},
          {src: "/images/Timeline3.jpg", alt: "Imagem 3"},
          {src: "/images/Timeline4.jpg", alt: "Imagem 4"}
        ]}
      />
      <MaisVendidos
        images={[
          {src: "/images/Jaqueta VLCS Minimalista.png", alt: "Jaqueta VLCS Minimalista"},
          {src: "/images/Bermuda Híbrida VLCS Aurora.png", alt: "Bermuda Híbrida VLCS Aurora"},
          {src: "/images/Camiseta Minimalista VLCS Slim.png", alt: "Camiseta Minimalista VLCS Slim"},
          {src: "/images/Boardshorts VLCS Azure.png", alt: "Boardshorts VLCS Azure"}
        ]}
      />
      <Footer />
    </main>
  );
}
