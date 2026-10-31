# Arkabrata Roy — Developer Portfolio

A single-page, production-grade portfolio for **Arkabrata Roy**, Software Engineer focused on Backend Systems and Applied AI. Built with Next.js (App Router), Tailwind CSS, and 100% native 60 FPS CSS animations.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Navigate to the project directory
cd portfolio

# 2. Install dependencies (if not already installed)
npm install

# 3. Start the Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to Vercel

### Method A: Deploy via GitHub (Recommended)
1. Push this repository to your GitHub account (`https://github.com/arka2024/portfolio` or similar):
   ```bash
   git init
   git add .
   git commit -m "feat: Arkabrata Roy modern portfolio"
   git branch -M main
   git remote add origin https://github.com/arka2024/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com).
3. Click **"Add New Project"** and select your GitHub repository.
4. Next.js will be auto-detected. Click **Deploy**.

### Method B: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 🛠️ Customizing Content

All portfolio text, experiences, projects, skills, achievements, and contact details are cleanly centralized in:
📂 `data/portfolio.ts`

You can edit any copy or links in `data/portfolio.ts` without needing to modify any React components or styles.

---

## 📝 [EDIT ME] Items to Review

Before sharing publicly, customize the marked items in `data/portfolio.ts`:
1. **`Mindgenome-AI` project**: Update subtitle and bullets with your exact architecture details.
2. **`Traffic Management & Route Optimization` project**: Update subtitle and algorithm bullets with your exact project details.
3. **`meta.resumeUrl`**: The project currently serves your resume at `/resume.pdf` in the `public/` folder. Whenever you update your resume PDF, simply replace `public/resume.pdf`.
"# portfolio" 
