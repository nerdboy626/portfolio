# Personal Portfolio

A modern, responsive developer portfolio built to showcase my software engineering projects, technical skills, and design work. The site highlights featured projects, provides insight into my development process, and offers an easy way for recruiters and collaborators to get in touch.

**Live Site:** https://nicolascaminero.com

---

## Screenshot

<p align="center">
  <img src="./public/images/homepage.png" />
</p>

---

## Highlights

- Built with Next.js App Router and TypeScript
- Fully responsive design for desktop and mobile devices
- Light and dark themes with smooth animated transitions
- Contact form powered by Resend
- SEO optimization with Open Graph metadata and custom social preview image
- Dockerized for reproducible development and deployment
- Automated CI pipeline with GitHub Actions
- Deployed on Vercel with automatic production deployments

---

## Built With

- Next.js
- TypeScript
- Tailwind CSS
- Motion
- Resend
- Docker
- GitHub Actions
- Vercel

---

## Running Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/nerdboy626/portfolio.git
cd portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

Visit http://localhost:3000.

---

## Running with Docker

Build the Docker image:

```bash
docker build -t portfolio .
```

Run the container:

```bash
docker run -p 3000:3000 portfolio
```

Then visit http://localhost:3000.

---

## Deployment

The site is deployed on Vercel and automatically redeploys whenever changes are pushed through GitHub Actions.

---

## About

This portfolio was designed and developed from scratch as a personal website. While building it, I explored technologies such as Next.js App Router, TypeScript, Tailwind CSS, responsive design, accessibility, animation, SEO, CI/CD, and deployment workflows.

The site continues to evolve as I learn new technologies and build new projects.
