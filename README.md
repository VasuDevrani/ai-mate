# AI-Mate - Empower Your Conversations with AI Companions

AI-Mate is a revolutionary web platform that enables you to bring AI companions to life and engage in captivating conversations with them. Powered by OpenAI and leveraging cutting-edge technologies, AI-Mate allows you to create and host AI companions that are accessible through a web browser. With AI-Mate, you have the freedom to design your companion's personality, backstory, and communication style, providing you with unparalleled interactive experiences.

## Table of Contents
- [Introduction](#introduction)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Use Cases](#use-cases)
- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [Install Packages](#install-packages)
  - [Environment Setup](#environment-setup)
  - [Setup Prisma and MySQL Database](#setup-prisma-and-mysql-database)
  - [Seed Categories](#seed-categories)
  - [Start the App](#start-the-app)
- [Available Commands](#available-commands)

## Introduction
AI-Mate is a platform that brings AI companions to the forefront of human interaction. With OpenAI as its powerhouse, AI-Mate allows you to embark on engaging conversations with your AI companions, enriching your experience with every interaction. AI-Mate lets you personalize your companion's personality and backstory, opening the doors to a wide range of meaningful and enjoyable conversations.

## Key Features
- **Unleash Creativity:** Customize your AI companion's personality, traits, and backstory to create a unique and engaging conversational partner.
- **Depth in Conversations:** Utilize a vector database with similarity search to prompt and retrieve responses, enriching conversations with depth and context.
- **Conversational Memory:** Enjoy continuous and natural interactions as AI-Mate maintains a conversation queue, incorporating past interactions into future prompts.
- **Cutting-edge Technologies:** AI-Mate leverages a powerful technology stack, including OpenAI, Next.js, TaiwindCSS, Redis, MySQL, Stripe, Prisma, Pinecone vector database, LLM Orchestration with Langchain, Clerk for authentication, and ML models on Replicate.
- **Versatile Use Cases:** AI-Mate is suitable for various scenarios, from romantic AI companions to friendship, entertainment, and coaching.

## Technology Stack
- OpenAI - Empowering AI conversations and interactions.
- Next.js - The foundation for building fast and scalable web applications.
- TaiwindCSS - A utility-first CSS framework for seamless styling.
- Redis - Ensuring smooth conversation history and quick data retrieval.
- MySQL - A robust relational database management system.
- Stripe - Facilitating secure and seamless payment processing.
- Prisma - A database toolkit simplifying database operations.
- Pinecone - A vector database with similarity search for enhancing conversations.
- LLM Orchestration - Utilizing Langchain for AI model orchestration.
- Clerk - Providing robust authentication and user management.
- Replicate - Deploying ML models to support AI functionalities.

## Use Cases
AI-Mate's flexibility enables it to cater to various use cases, including but not limited to:
- Romantic AI Companions - Experience the joy of conversing with an AI girlfriend or boyfriend.
- Friendship - Forge meaningful connections with AI companions that can be your friends.
- Entertainment - Engage in fun and entertaining interactions with your AI buddies.
- Coaching and Mentorship - Seek guidance and support from your personalized AI mentor.

## Getting Started

### Cloning the Repository
Clone the AI-Mate repository to your local environment using the following command:
```bash
git clone https://github.com/VasuDevrani/ai-mate/
```

### Install Packages
After cloning the repository, install the required packages using npm:
```bash
cd ai-mate
npm i
```

### Environment Setup
Create a `.env` file based on `.env.example` in the repository. Modify the environment variables as needed to match your setup.

### Setup Prisma and MySQL Database
Add MySQL Database to your setup (you can use PlanetScale or any other MySQL provider). Push the Prisma schema and migrate the database with the following commands:
```bash
npx prisma db push
```

### Seed Categories
Seed categories using the provided script:
```bash
node scripts/seed.ts
```

### Start the App
Start a development instance of the app using the following command:
```bash
npm run dev
```

Now you have AI-Mate up and running, ready to create and chat with your AI companions!

## Available Commands
You can use the following command to interact with AI-Mate:
- **dev**: Starts a development instance of the app.
