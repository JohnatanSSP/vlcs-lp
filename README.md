
## Estrutura de Pastas

```
vlcs-lp/
├── app/                    # Diretório principal da aplicação
│   ├── page.tsx           # Página principal
│   └── layout.tsx         # Layout raiz
├── public/                # Arquivos estáticos
├── package.json           # Dependências do projeto
└── next.config.js         # Configuração do Next.js
```

## Bibliotecas Utilizadas

- **Next.js** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Geist Font** - Fonte otimizada via `next/font`

## Instalação e Execução

Instale as dependências:
```bash
npm install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Acesse a aplicação em `http://localhost:3000`.

## Build para Produção

```bash
npm run build
npm run start
```

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as variáveis necessárias.

## Recursos Adicionais

- [Documentação Next.js](https://nextjs.org/docs)
- [Guia de Deploy](https://nextjs.org/docs/app/building-your-application/deploying)