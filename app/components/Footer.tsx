export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* INSTITUCIONAL */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-black">
              Institucional
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600 underline">
              
                <li key="Atendimento">
                  <a href="https://www.vlcs.com.br/atendimento" className="hover:text-black transition">
                    Atendimento
                  </a>
                </li>
                <li key="Quem somos">
                  <a href="https://www.vlcs.com.br/quem-somos" className="hover:text-black transition">
                    Quem somos
                  </a>
                </li>
                <li key="Compromisso com os direitos humanos">
                  <a href="https://www.vlcs.com.br/compromisso-com-os-direitos-humanos" className="hover:text-black transition">
                    Compromisso com os direitos humanos
                  </a>
                </li>
                <li key="Como comprar">
                  <a href="https://www.vlcs.com.br/como-comprar" className="hover:text-black transition">
                    Como comprar
                  </a>
                </li>
                <li key="Compra segura">
                  <a href="https://www.vlcs.com.br/compra-segura" className="hover:text-black transition">
                    Compra segura
                  </a>
                </li>
                <li key="Política de entrega">
                  <a href="https://www.vlcs.com.br/politica-de-entrega" className="hover:text-black transition">
                    Política de entrega
                  </a>
                </li>
                <li key="Política de trocas e devoluções">
                  <a href="https://www.vlcs.com.br/politica-de-trocas-e-devolucoes" className="hover:text-black transition">
                    Política de trocas e devoluções
                  </a>
                </li>
                <li key="Política de privacidade">
                  <a href="https://www.vlcs.com.br/politica-de-privacidade" className="hover:text-black transition">
                    Política de privacidade
                  </a>
                </li>
                <li key="Avaliações">
                  <a href="https://www.vlcs.com.br/avaliacoes-de-clientes" className="hover:text-black transition">
                    Avaliações
                  </a>
                </li>
                <li key="Módulo representantes">
                  <a href="https://www.vlcs.com.br/Módulo representantes" className="hover:text-black transition">
                    Módulo representantes
                  </a>
                </li>

            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-black">
              Contato
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600 underline">
              <li><a href="https://api.whatsapp.com/send?1=pt_BR&phone=5519994654082">19 99465-4082</a></li>
              <li><a href="https://api.whatsapp.com/send?1=pt_BR&phone=5519994654082">19 99465-4082</a></li>
            </ul>
          </div>

          {/* NEWSLETTER + APP */}
          <div className="space-y-10">
            {/* Newsletter */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-black">
                Receba nossa novidades e promoções
              </h3>

              <div className="flex w-full max-w-sm overflow-hidden rounded-md border border-neutral-300">
                <input
                  type="email"
                  placeholder="Digite seu melhor e-mail"
                  className="flex-1 px-4 py-2 text-sm outline-none"
                />
                <button className="bg-black px-4 text-white text-sm">
                  →
                </button>
              </div>
            </div>

            {/* App */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-black">
                Baixe nosso app
              </h3>

              <div className="flex gap-4">
                <img
                  src="/images/Baixar na App Store.png"
                  alt="Download App Store"
                  className="h-10 cursor-pointer"
                />
                <img
                  src="/images/Baixar na Play Store.png"
                  alt="Download Google Play"
                  className="h-10 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} VLCS. Todos os direitos reservados.
      </div>
    </footer>
  )
}
