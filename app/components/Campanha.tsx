
import Image from 'next/image';



export default function Campanha() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-around px-10 py-20 gap-10 bg-black text-white">
            <div className="flex flex-col space-y-6 w-60%">
                <p className='text-sm'>
                    Em um mundo que não para, nasce a{" "}
                    <strong>coleção Timeline</strong>, pensada para<br />
                    o homem urbano que vive em transição. De manhã no
                    trabalho, à tarde num <br /> café criativo, à noite num evento.
                    Ele é múltiplo, adaptável, e faz da rotina <br /> uma sequência
                    fluida de estilos e atitudes.
                </p>

                <p className='text-sm'>
                    Timeline traduz esse movimento constante com peças que
                    conversam entre <br /> o casual e o sofisticado, como uma linha
                    do tempo onde cada look é um<br /> marco, uma escolha consciente
                    que reflete quem ele é naquele momento.
                </p>

                <p className='text-sm'>
                    O ritmo muda, <strong>a essência permanece.</strong>
                </p>

                <button className=" tracking-wide font-ligth transform-gpu antialiased
 bg-white text-black rounded-full w-60 text-sm px-6 py-2 font-semibold
  transition-all duration-300 ease-out
  hover:bg-black hover:text-white border-2 cursor-pointer"><strong><a href="https://www.youtube.com/watch?v=va77YrdaId4">Conheça a Campanha</a></strong></button>
            </div>

            <div className="relative flex flex-col space-y-6 w-40%">
                <div className='absolute bottom-0  w-[550px] h-[370px] rounded-2xl z-10'></div>
                <Image className='absolute bottom-0 w-[550px] h-[370px] bg-cover bg-center bg-no-repeat bg-[url("/images/Rectangle 1.png")] z-0' src="/images/Rectangle 1.png" alt="Imagem" width={550} height={370} />
                <div className="w-[550px] h-[430px] rounded-2xl overflow-hidden z-30  " >
                    <Image
                        src="/images/Rectangle 2.png"
                        alt="Imagem"
                        className="w-full h-full object-cover object-[80%_20%]"
                        width={700}
                        height={700}
                    />
                </div>
                <div className='absolute bottom-6 left-[-50] z-30 rotate-z-330 py-10 px-3 bg-black border-2 border-solid border-white rounded-full'>
                    <Image
                        className='object-cover'
                        src="/images/hero.png"
                        alt="VLCS"
                        width={80}
                        height={80} />
                </div>
            </div>
        </section>
    );
}