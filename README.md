<div align="center">

# 💳 Recurrly

**Todas as suas assinaturas em um só lugar.**

App mobile para acompanhar serviços recorrentes (streaming, software, ferramentas), quanto cada um custa e quando vence a próxima cobrança.

![Status](https://img.shields.io/badge/status-em_desenvolvimento-FFB020?style=flat-square)
![React Native](https://img.shields.io/badge/React_Native_0.81-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo_SDK_54-000020?style=flat-square&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![NativeWind](https://img.shields.io/badge/NativeWind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

</div>

---

## 📱 Sobre o projeto

Quem assina vários serviços costuma perder o controle: esquece o que está pagando, quanto isso soma no mês e quando cada cobrança vai cair. O Recurrly resolve isso com uma visão única de todas as assinaturas, destacando as próximas renovações.

O projeto está **em desenvolvimento**. A tela inicial está implementada com dados de exemplo, e as demais telas já existem na estrutura de rotas, prontas para receber as próximas funcionalidades.

<!-- Adicione prints do app aqui, por exemplo:
<p align="center">
  <img src="docs/home.png" width="250" alt="Tela inicial" />
</p>
-->

## ✨ Funcionalidades

**Já implementado**

- **Saldo e próxima renovação** em destaque no topo da tela inicial
- **Próximas cobranças** em uma lista horizontal, com quantos dias faltam para cada uma
- **Lista de assinaturas** com cards que se expandem ao toque, mostrando forma de pagamento, categoria, data de início, data de renovação e status
- Formatação de moeda com `Intl.NumberFormat` e de datas com `dayjs`, com tratamento para dados ausentes
- Estados vazios para quando não há assinaturas ou renovações

**Próximos passos**

- [ ] Telas de login e cadastro
- [ ] Onboarding do primeiro acesso
- [ ] Cadastro e edição de assinaturas
- [ ] Tela de detalhes da assinatura
- [ ] Insights de gastos por categoria e por mês
- [ ] Persistência dos dados (hoje a tela usa dados de exemplo)
- [ ] Notificações antes de cada renovação

## 🛠️ Tecnologias

| Tecnologia | Uso no projeto |
| --- | --- |
| **React Native + Expo (SDK 54)** | Base do app, com a New Architecture e o React Compiler habilitados |
| **Expo Router** | Navegação baseada em arquivos, com grupos de rotas `(auth)` e `(tabs)`, rota dinâmica `subscriptions/[id]` e rotas tipadas |
| **TypeScript** | Tipagem dos dados e das props dos componentes |
| **NativeWind + Tailwind CSS** | Estilização com classes utilitárias e um tema próprio |
| **dayjs** e **clsx** | Datas e classes condicionais |
| **ESLint** | Padronização do código |
| **CodeRabbit** | Revisão automatizada de pull requests com IA |

## 📂 Estrutura

```
app/
├── (auth)/              # Login e cadastro
├── (tabs)/              # Abas: Home, Subscriptions, Insights, Settings
├── subscriptions/[id]   # Detalhes de uma assinatura (rota dinâmica)
├── onboarding.tsx
└── _layout.tsx
components/              # Componentes reutilizáveis (cards, títulos de lista)
constants/               # Tema, ícones, imagens e dados de exemplo
lib/util.ts              # Formatação de moeda, datas e status
```

## 🚀 Como rodar

Pré-requisitos: [Node.js](https://nodejs.org/) LTS e o app [Expo Go](https://expo.dev/go) no celular (ou um emulador Android/iOS).

```bash
git clone https://github.com/tarcisioqueiroz/Recurrly-app.git
cd Recurrly-app
npm install
npx expo start
```

Depois, escaneie o QR code com o Expo Go ou pressione `a` (Android) ou `i` (iOS) no terminal.

## 👨‍💻 Autor

Feito por **Tarcisio Queiroz**, desenvolvedor mobile com React Native.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tarc%C3%ADsio-queiroz-568348257)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/tarcisioqueiroz)
