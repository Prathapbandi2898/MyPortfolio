# Simple React Portfolio

A minimal personal portfolio built with React, Vite, and Lucide icons. It is ready to deploy on Vercel.

## 1. Run locally

Install Node.js, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## 2. Add your details

Open `src/main.jsx` and update:

- `profile.name`
- `profile.role`
- `profile.intro`
- `profile.github`
- `profile.linkedin`
- `projects` with your real repository names, descriptions, and URLs
- `blogs` with your real blog titles and URLs

## 3. Deploy on Vercel

1. Push this project to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import your portfolio repository.
4. Keep the detected framework as **Vite**.
5. Use `npm run build` as the build command and `dist` as the output directory.
6. Click **Deploy**.

No environment variables are required.
