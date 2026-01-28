
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
          {src: "/images/Jaqueta VLCS Minimalista.png", alt: "Jaqueta VLCS Minimalista", link: "https://www.vlcs.com.br/jaqueta-vlcs-minimalista?srsltid=AfmBOooFtFXaVCS-lsDobDvX_qxSd_I2Aw6mvfBlX8XKoNhVxJy23xDx"},
          {src: "/images/Blusa de Moletom Canguru VLCS Minimalista.png", alt: "Blusa de Moletom Canguru VLCS Minimalista", link: "https://www.vlcs.com.br/blusa-de-moletom-canguru-vlcs-minimalista?srsltid=AfmBOopyfn1H828inDQ0PVX3h2dFo6IWKKyew5USrxmUk84lDWNHraGl"},
          {src: "/images/Blusa de Moletom Aberta VLCS Minimalista.png", alt: "Blusa de Moletom Aberta VLCS Minimalista", link: "https://www.vlcs.com.br/blusa-de-moletom-aberta-vlcs-minimalista?srsltid=AfmBOor93dAvxUhH8PTOPw2psURksu6U4iUmgKlZf9HcmMwYBhyaq6Dc"},
          {src: "/images/Camiseta Manga Longa Minimalista VLCS Winter.png", alt: "Camiseta Manga Longa Minimalista VLCS Winter", link: "https://www.vlcs.com.br/camiseta-manga-longa-minimalista-vlcs-winter?srsltid=AfmBOoojUTuK5HSFPfyBeqojpP6LyTnGvKbDkJvogUxVmT4cJCrdoGNU"}
        ]}
      />
      <Footer />
    </main>
  );
}
