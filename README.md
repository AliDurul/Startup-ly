# 🚀 Startup-ly

<div align="center">
  <img src="./public/logo.png" alt="Startup-ly Logo" width="200"/>
  
  ### Pitch Your Startup, Connect With Entrepreneurs
  
  A modern platform to submit startup ideas, discover innovative pitches, and connect with fellow entrepreneurs.
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Prisma](https://img.shields.io/badge/Prisma-6.17-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Authentication](#-authentication)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Startup-ly** is a full-stack web application that provides a platform for entrepreneurs to showcase their startup ideas. Users can create, browse, and search through innovative startup pitches, connect with other entrepreneurs, and get noticed in the startup community.

Built with modern web technologies, this application features a clean, responsive design and provides a seamless user experience for both pitch creators and browsers.

---

## ✨ Features

- **🔐 GitHub OAuth Authentication**: Secure login using NextAuth.js with GitHub provider
- **📝 Create Startup Pitches**: Submit your startup ideas with title, description, category, and detailed pitch (supports Markdown)
- **🔍 Advanced Search**: Search and filter startups by title, category, or keywords
- **👁️ View Tracking**: Automatic view counting for each startup pitch
- **👤 User Profiles**: View user profiles and their submitted startups
- **🎨 Modern UI**: Beautiful, responsive interface built with Tailwind CSS and Radix UI components
- **⚡ Fast Performance**: Leveraging Next.js 15 App Router and React 19 features
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🔄 Real-time Updates**: Automatic page revalidation and optimistic UI updates
- **📊 Rich Text Editor**: Markdown support for detailed pitch descriptions

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Backend & Database
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database (via Neon)
- **[Neon Database](https://neon.tech/)** - Serverless Postgres
- **[NextAuth.js 5](https://next-auth.js.org/)** - Authentication solution

### Additional Tools
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[Markdown-it](https://github.com/markdown-it/markdown-it)** - Markdown parser
- **[React MD Editor](https://uiw.github.io/react-md-editor/)** - Markdown editor component
- **[Slugify](https://github.com/simov/slugify)** - URL slug generation

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **pnpm** (recommended) or npm/yarn
- **PostgreSQL** database (or Neon account)
- **GitHub OAuth App** credentials

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/AliDurul/Startup-ly.git
cd Startup-ly
```

2. **Install dependencies**

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/startupdb?schema=public"

# NextAuth.js
AUTH_SECRET="your-secret-key-here" # Generate with: openssl rand -base64 32
NEXTAUTH_URL="http://localhost:3000"

# GitHub OAuth
AUTH_GITHUB_ID="your-github-oauth-client-id"
AUTH_GITHUB_SECRET="your-github-oauth-client-secret"
```

#### How to get GitHub OAuth credentials:

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the application details:
   - **Application name**: Startup-ly (or your preferred name)
   - **Homepage URL**: `http://localhost:3000` (for development)
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Copy the Client ID and generate a Client Secret
5. Add them to your `.env` file

### Database Setup

1. **Generate Prisma Client**

```bash
pnpm prisma:generate
```

2. **Run database migrations**

```bash
pnpm prisma:migrate
```

3. **Optional: Open Prisma Studio** (Database GUI)

```bash
pnpm prisma:studio
```

This will open Prisma Studio at `http://localhost:5555` where you can view and edit your database.

---

## 💻 Usage

### Development Server

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
pnpm build
pnpm start
```

---

## 📁 Project Structure

```
Startup-ly/
├── public/              # Static assets
│   └── logo.png
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── (root)/      # Main application routes
│   │   │   ├── page.tsx           # Home page
│   │   │   ├── startup/           # Startup routes
│   │   │   │   ├── [id]/         # Startup detail page
│   │   │   │   └── create/       # Create startup page
│   │   │   └── user/             # User profile routes
│   │   │       └── [id]/         # User detail page
│   │   ├── api/         # API routes
│   │   │   └── auth/    # NextAuth.js API routes
│   │   ├── layout.tsx   # Root layout
│   │   ├── globals.css  # Global styles
│   │   └── fonts/       # Custom fonts
│   ├── components/      # React components
│   │   ├── ui/          # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── SearchForm.tsx
│   │   ├── StartupCard.tsx
│   │   ├── StartupForm.tsx
│   │   └── ...
│   ├── lib/             # Utility functions and configurations
│   │   ├── actions.ts   # Server actions
│   │   ├── auth.ts      # NextAuth configuration
│   │   ├── prisma.ts    # Prisma client
│   │   ├── utils.ts     # Utility functions
│   │   ├── validation.ts # Zod schemas
│   │   └── prisma/      # Prisma schema and migrations
│   │       └── schema.prisma
│   └── hooks/           # Custom React hooks
├── .gitignore
├── components.json      # Radix UI configuration
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── package.json
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start the development server |
| `pnpm build` | Build the production application |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint for code linting |
| `pnpm prisma:migrate` | Run Prisma migrations |
| `pnpm prisma:generate` | Generate Prisma Client |
| `pnpm prisma:studio` | Open Prisma Studio (Database GUI) |
| `pnpm prisma:reset` | Reset database and re-run migrations |

---

## 🔐 Authentication

This application uses **NextAuth.js v5** with GitHub as the authentication provider. Users can:

- Sign in with their GitHub account
- Automatically create a user profile
- Access protected routes (creating startups)
- View and manage their own startups

The authentication flow:
1. User clicks "Login" button
2. Redirected to GitHub OAuth
3. After authorization, user is redirected back
4. Session is created and stored in PostgreSQL
5. User can now create and manage startups

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this application is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AliDurul/Startup-ly)

### Other Platforms

You can also deploy to:
- **Netlify**
- **Railway**
- **Render**
- **AWS Amplify**
- Any Node.js hosting platform

Make sure to:
- Set all environment variables
- Configure your database connection
- Update OAuth callback URLs for production

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Ali Durul**

- GitHub: [@AliDurul](https://github.com/AliDurul)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)

---

<div align="center">
  Made with ❤️ by Ali Durul
  
  ⭐ Star this repo if you find it helpful!
</div>
