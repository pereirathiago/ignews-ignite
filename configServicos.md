<h1 align="center">
  <img alt="Logo" src="./public/images/logo.svg" alt="ig.News">
</h1>

# :clipboard: Índice

- [Stripe](#stripe)
- [Github](#github)
- [FaunaDB](#faunadb)
- [Prismic CMS](#prismic)

---

<a id="stripe"></a>

# :moneybag: Stripe

Para o Stripe, depois de criar uma conta você precisa:

- Criar um Produto do tipo Assinatura com o nome "subscription"
- Adicione pelo menos um nome e valor
- Copie a chave fornecida na guia `Developers > API Keys > Secret Key` e cole em `STRIPE_API_KEY`  no arquivo [.env.local.example](./.env.local.example)
- Copie a chave fornecida na guia `Developers > API Keys > Publishable Key` e cole em `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`  no arquivo [.env.local.example](./.env.local.example)
- Instale a CLI do Stripe
- Na linha de comando digite `stripe listen --forward-to localhost:3000/api/webhooks`
- Copie a chave fornecida na cli e cole em `STRIPE_WEBHOOK_SECRET` no arquivo [.env.local.example](./.env.local.example)
 
---

<a id="github"></a>

# :octocat: Github

Para o Github, depois de criar uma conta você precisa:

- Copie o id fornecida em `Settings > Developer settings > OAuth Apps > New OAuth App` e cole em `GITHUB_CLIENT_ID` no arquivo [.env.local.example](./.env.local.example)
- Copie a chave fornecida em `Settings > Developer settings > OAuth Apps > New OAuth App` e cole em `GITHUB_CLIENT_SECRET` no arquivo [.env.local.example](./.env.local.example)

---

<a id="faunadb"></a>

# :floppy_disk: FaunaDB

Para o FaunaDB, depois de criar uma conta você precisa:

OBS: banco de dados, collections e indexes foram criados pela versão v4 do FaunaDB

- Criar um database chamado `ignews`
- Criar as Collections `subscriptions` e `users` conforme o esquema a seguir
- Criar os indexes `subscription_by_id`, `subscription_by_status`, `subscription_by_user_ref`, `user_by_email` e `user_by_stripe_customer_id` conforme o esquema a seguir
- Depois da criação dos indexes e collections
- Copie a chave fornecida em `Security > keys` e cole em `FAUNADB_KEY` no arquivo [.env.local.example](./.env.local.example)

## Collections 

```

{
  name: "subscriptions",
  history_days: 0,
  ttl_days: null
}

{
  name: "users",
  history_days: 0,
  ttl_days: null
}

```

## Indexes

```

{
  name: "subscription_by_id",
  unique: false,
  serialized: true,
  source: "subscriptions",
  terms: [
    {
      field: ["data", "id"]
    }
  ]
}

{
  name: "subscription_by_status",
  unique: false,
  serialized: true,
  source: "subscriptions",
  terms: [
    {
      field: ["data", "status"]
    }
  ]
}

{
  name: "subscription_by_user_ref",
  unique: false,
  serialized: true,
  source: "subscriptions",
  terms: [
    {
      field: ["data", "userId"]
    }
  ]
}

{
  name: "user_by_email",
  unique: true,
  serialized: true,
  source: "users",
  terms: [
    {
      field: ["data", "email"]
    }
  ]
}

{
  name: "user_by_stripe_customer_id",
  unique: false,
  serialized: true,
  source: "users",
  terms: [
    {
      field: ["data", "stripe_customer_id"]
    }
  ]
}

```

---

<a id="prismic"></a>

# :desktop_computer: Prismic CMS

Para o Prismic CMS, depois de criar uma conta você precisa:

- Marque a opção `Legacy Builder` em  `Settings > Repository > Legacy Builder`
- Depois vá em `Custom Types` e crie um novo Type nomeando ele como `post`
- Adicione um UID, Title, Content igual ao JSON a seguir
- Depois na aba Documents, crie dois documentos para teste
- Copie o endpoint fornecida em `Settings > API& Security > use this entry point for your API access` e cole em `PRISMIC_ACCESS_TOKEN` no arquivo [.env.local.example](./.env.local.example)

```JSON
{
  "Main" : {
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "uid"
      }
    },
    "title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1",
        "label" : "title"
      }
    },
    "content" : {
      "type" : "StructuredText",
      "config" : {
        "multi" : "paragraph,preformatted,heading1,heading2,heading3,heading4,heading5,heading6,strong,em,hyperlink,image,embed,list-item,o-list-item,rtl",
        "label" : "content"
      }
    }
  }
}
```