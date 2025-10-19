// prisma/seed.js or prisma/seed.ts

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Create some playlists first
  const playlists = await prisma.playlist.createMany({
    data: [
      {
        title: "Tech Innovators",
        slug: "tech-innovators",
      },
      {
        title: "Health & Wellness Startups",
        slug: "health-wellness-startups",
      },
      {
        title: "AI Disruptors",
        slug: "ai-disruptors",
      },
    ],
  });

  // Create dummy user for authorId
  const author = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
    },
  });

  // Create startups
  await prisma.startup.createMany({
    data: [
      {
        title: "NeuraNet AI",
        slug: "neuranet-ai",
        description: "Building AI models for edge devices with low power consumption.",
        category: "AI",
        image: "https://placehold.co/600x400?text=NeuraNet+AI",
        pitch: "Revolutionizing AI for mobile and IoT.",
        authorId: author.id,
        playlistId: null,
      },
      {
        title: "MediCore Health",
        slug: "medicore-health",
        description: "AI-driven health diagnostics and wellness monitoring platform.",
        category: "Health",
        image: "https://placehold.co/600x400?text=MediCore+Health",
        pitch: "Empowering preventive healthcare with real-time analytics.",
        authorId: author.id,
        playlistId: null,
      },
      {
        title: "FinSmart",
        slug: "finsmart",
        description: "Smart financial planning and investment tracking tool.",
        category: "Finance",
        image: "https://placehold.co/600x400?text=FinSmart",
        pitch: "Helping millennials take control of their money.",
        authorId: author.id,
        playlistId: null,
      },
      {
        title: "EduVerse",
        slug: "eduverse",
        description: "Immersive learning experiences powered by AR and gamification.",
        category: "Education",
        image: "https://placehold.co/600x400?text=EduVerse",
        pitch: "Making learning fun and immersive for all ages.",
        authorId: author.id,
        playlistId: null,
      },
      {
        title: "StreamSpace",
        slug: "streamspace",
        description: "A decentralized platform for content creators and streamers.",
        category: "Entertainment",
        image: "https://placehold.co/600x400?text=StreamSpace",
        pitch: "Redefining content ownership and revenue sharing.",
        authorId: author.id,
        playlistId: null,
      },
      {
        title: "ShopNexus",
        slug: "shopnexus",
        description: "AI-powered eCommerce recommendation engine for personalized shopping.",
        category: "ECommerce",
        image: "https://placehold.co/600x400?text=ShopNexus",
        pitch: "Transforming online shopping experiences with personalization.",
        authorId: author.id,
        playlistId: null,
      },
      {
        title: "Connectly",
        slug: "connectly",
        description: "Social media platform for meaningful professional connections.",
        category: "SocialMedia",
        image: "https://placehold.co/600x400?text=Connectly",
        pitch: "Networking reimagined for the modern era.",
        authorId: author.id,
        playlistId: null,
      },
      {
        title: "HealthHero",
        slug: "healthhero",
        description: "Mobile app for personal fitness and diet tracking.",
        category: "Health",
        image: "https://placehold.co/600x400?text=HealthHero",
        pitch: "Your AI-powered personal wellness coach.",
        authorId: author.id,
        playlistId: null,
      },
      {
        title: "QuantumLeap",
        slug: "quantumleap",
        description: "Next-gen quantum computing solutions for enterprise data analysis.",
        category: "Technology",
        image: "https://placehold.co/600x400?text=QuantumLeap",
        pitch: "Accelerating computation through quantum innovation.",
        authorId: author.id,
        playlistId: null,
      },
      {
        title: "EduConnect",
        slug: "educonnect",
        description: "Connecting students with educators and mentors worldwide.",
        category: "Education",
        image: "https://placehold.co/600x400?text=EduConnect",
        pitch: "Global mentorship for a connected learning world.",
        authorId: author.id,
        playlistId: null,
      },
    ],
  });

  console.log("✅ Seed data created successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
