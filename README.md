# Will Huang - Portfolio Website

A modern portfolio showcasing my software engineering journey, built with Next.js.

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5 with App Router
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: React Icons (Font Awesome 6)
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/williamhuang3/willhuang-website.git
cd willhuang-website
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
└── components/
    ├── Hero.tsx            # Landing section with typewriter effect
    ├── About.tsx           # Photo carousel and personal info
    ├── Experience.tsx      # Interactive timeline
    ├── Projects.tsx        # Project showcase grid
    ├── Navbar.tsx          # Navigation component
    ├── TimelineItem.tsx    # Reusable timeline component
    └── ExperienceDetails.tsx # Experience detail view
```

## 🎯 Key Components

### Hero Section
- Mac-style window design
- Typewriter animation for name
- Smiski character mascot
- Social links and resume download

### About Section  
- Auto-rotating photo carousel (3-second intervals)
- Manual navigation with timer reset
- UCLA confetti easter egg
- Skills showcase with animations

### Experience Timeline
- Modular, expandable design
- Real professional experience data
- Company logos and detailed achievements
- Smooth animations and interactions

### Projects Showcase
- 6 featured projects with hover effects
- Tech stack badges
- GitHub and live demo links
- Glass morphism card design

## 🔧 Customization

### Adding Photos
Add images to `/public/` and update the photo array in `About.tsx`:

```typescript
const photos = [
  '/me.JPEG',
  '/me2.jpeg',
  '/me3.jpeg',
  '/me4.jpg'
];
```

### Adding Projects
Update the projects array in `Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    title: 'Your Project',
    description: 'Project description...',
    img: '/project-image.png',
    repo: 'https://github.com/username/repo',
    live: 'https://your-demo.com',
    tech: ['React', 'Node.js', 'MongoDB']
  }
];
```

### Updating Experience
Modify the items array in `Experience.tsx` with your professional history.

## 🚀 Deployment

The site is optimized for Vercel deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy with zero configuration

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js)

## 📬 Contact

- **Email**: williamhuang.whh@gmail.com
- **GitHub**: [@williamhuang3](https://github.com/williamhuang3)
- **LinkedIn**: [whuang03](https://www.linkedin.com/in/whuang03/)

---

Built with ❤️ and lots of ☕ by William Huang
