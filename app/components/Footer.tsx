'use client';
import { useState } from "react"
import { X } from 'lucide-react'

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
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

              <div className="flex w-full text-black max-w-sm overflow-hidden rounded-md border border-neutral-300">
                <input
                  type="email"
                  placeholder="Digite seu melhor e-mail"
                  className="flex-1 px-4 py-2 text-sm outline-none text-black"
                />
                <button onClick={openModal} type="submit" className="bg-black px-4 text-white text-sm cursor-pointer hover:bg-gray-800 transition duration-300">
                  →
                </button>

                {isOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hiddden transition-all duration-300">
                    {/* Overlay escuro */}
                    <div
                      className="absolute inset-0 bg-black/50"
                      onClick={closeModal}
                    />

                    {/* Conteúdo do modal */}
                    <div className="relative bg-black rounded-lg shadow-2xl p-6 max-w-md w-full mx-4 z-10">
                      {/* Botão fechar */}
                      <button
                        onClick={closeModal}
                        className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                      >
                        <X className="w-5 h-5" />
                      </button>

                      {/* Título */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Obrigado por si cadastrar
                      </h3>

                      {/* Conteúdo */}
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Voce receberá nossas novidades e promoções.
                      </p>

                      {/* Botões de ação */}
                      <div className="flex justify-end gap-3">
                        <button
                          onClick={closeModal}
                          className="px-4 py-2 bg-white text-black rounded hover:bg-black hover:text-white border-solid border-2 border-white transition duration-300"
                        >
                          Confirmar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* App */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-black">
                Baixe nosso app
              </h3>

              <div className="flex gap-4">
                <a href="https://apps.apple.com/br/app/vlcs/id6738990252">
                  <img
                    src="/images/Baixar na App Store.png"
                    alt="Download App Store"
                    className="h-10 cursor-pointer"
                  /></a>
                <a href="https://play.google.com/store/apps/details?id=com.magazord.site.vlcs&hl=pt_BR&pli=1">
                  <img
                    src="/images/Baixar na Play Store.png"
                    alt="Download Google Play"
                    className="h-10 cursor-pointer"
                  />
                </a>
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
