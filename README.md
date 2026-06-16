# Better Life

> Seu treino, no seu ritmo. Toda semana.

MVP SaaS de saúde e exercícios físicos com planos semanais personalizados, streak de frequência e acesso a profissionais de saúde.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Prisma 6** + PostgreSQL (Neon)
- **Auth.js v5** (Google OAuth + Magic Link)
- **Stripe** (pagamentos e assinaturas)
- **Resend** (emails transacionais)
- **shadcn/ui** (componentes)
- **Storybook 10** (design system)

## Setup

### 1. Clone e instale

```bash
git clone https://github.com/rafaelakioko/better-life.git
cd better-life
npm install
```

### 2. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Preencha o `.env` com suas chaves:

| Variável | Onde obter |
|---|---|
| `DATABASE_URL` | [neon.tech](https://neon.tech) |
| `AUTH_SECRET` | `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"` |
| `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET` | [Google Cloud Console](https://console.cloud.google.com) |
| `AUTH_RESEND_KEY` / `RESEND_API_KEY` | [resend.com](https://resend.com) |
| `STRIPE_SECRET_KEY` | [dashboard.stripe.com](https://dashboard.stripe.com) |
| `STRIPE_WEBHOOK_SECRET` | Webhooks no painel do Stripe |
| `STRIPE_PRICE_ID_PRO` | Product catalog no Stripe |

### 3. Configure o banco

```bash
npx prisma db push
```

### 4. Rode o projeto

```bash
npm run dev
```

Acesse: http://localhost:3000

### 5. Rode o Storybook

```bash
npm run storybook
```

Acesse: http://localhost:6006

## Planos

| Feature | FREE | PRO (R$ 49,90/mês) |
|---|:---:|:---:|
| Treinos por semana | até 3 | ilimitado |
| Biblioteca de exercícios | 15 | completa |
| Histórico de streak | 7 dias | completo |
| Personal trainer | ❌ | ✅ |
| Nutricionista | ❌ | ✅ |
| Consultas médicas | ❌ | ✅ |

## Deploy

O projeto está configurado para deploy automático na Vercel conectado ao GitHub.

**Produção:** https://better-life-three.vercel.app
