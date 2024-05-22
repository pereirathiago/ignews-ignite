<h1 align="center">
  <img alt="Logo" src="./public/images/logo.svg" alt="ig.News">
</h1>


# :clipboard: Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias)
- [Requisitos](#requisitos)
- [Como Executar o Projeto](#executar)
- [License](#license)

---

<a id="sobre"></a>

# :scroll: Sobre

 O <b>ig.news</b> é uma plataforma de noticias, desenvolvido durante a Trilha 2021 do Ignite ReactJS.



 ---

 <a id="tecnologias"></a>

 # :rocket: Tecnologias Utilizadas

 O projeto foi desenvolvido em:

 - [NextJS](https://nextjs.org/)
 - [Typescript](https://www.typescriptlang.org/)
 - [SASS](https://sass-lang.com/)
 - [Next-Auth](https://next-auth.js.org/)
 - [Stripe](https://stripe.com/br)
 - [FaunaDB](https://fauna.com/)
 - [Prismic CMS](https://prismic.io/)

 ---

 <a id="requisitos"></a>

 # :clipboard: Requisitos

 ### Necessário para realizar as instalações

 - [Git](https://git-scm.com/)
 - [Yarn](https://classic.yarnpkg.com) ou semelhante
 - [Stripe CLI](https://stripe.com/docs/stripe-cli)

 ### Crie uma conta nos seguintes serviços externos:
 
 - [Stripe](https://stripe.com/)
 - [Github](https://github.com//)
 - [FaunaDB](https://fauna.com/)
 - [Prismic CMS](https://prismic.io/)

 Siga os passos de [Configurações dos serviços](./configServicos.md) no arquivo [configServicos.md](./configServicos.md)

 ---

 <a id="executar"></a>

# :computer: Como Executar o projeto

```bash
    # Clonar o repositório
    git clone https://github.com/pereirathiago/ignews-ignite.git

    # Entrar no projeto
    cd ignews-ignite

    # Baixar as dependências
    yarn

    # Copiar o arquivo env
    cp .env.local.example .env.local

    # Executar o stripe listen cli para ouvir os webhooks
    stripe listen --forward-to localhost:3000/api/webhooks

    # Executar o servido
    yarn dev
```
Depois disso abra seu navegador favorito e entre na URL "http://localhost:3000"

---

<a id="license"><a>

## :memo: License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
    Feito com 💜 por Thiago Pereira
</p>
