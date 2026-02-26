# 💖 Grand Birthday Surprise Website — Technical Specification

## 📌 Project Overview

This project is a cinematic multi-page romantic surprise website built using **React + Three.js**.  
The goal is to create an emotionally engaging, interactive birthday experience with hidden surprises, games, and animations.

**Key Goals:**

- 🎬 Cinematic first impression  
- ❤️ Interactive heart collection system  
- 🎁 Secret unlock experience  
- 🎮 Mini games for engagement  
- 📱 Mobile-friendly performance  
- 🚀 Deployable on GitHub Pages  

---

## 🧠 Architecture Overview

User Browser
     ↓
React App (Vite)
     ↓
React Router صفحات
     ↓
3D Layer (React Three Fiber)
     ↓
Global State (Zustand/Context)
     ↓
localStorage persistence
     ↓
Static Hosting (GitHub Pages)

**Architecture Type:** Frontend-only SPA  
**Backend:** Not required  
**Hosting:** GitHub Pages  

---

## ⚙️ Tech Stack

### Frontend Core

- React (with Vite)
- React Router DOM
- JavaScript (ES6+)

### Animation & 3D

- @react-three/fiber
- @react-three/drei
- Framer Motion
- CSS Keyframe Animations

### State Management

- Zustand (recommended) or React Context
- localStorage for persistence

### Styling

- Tailwind CSS (recommended)
- Custom CSS animations

---

## 📁 Project Folder Structure

space-birthday/
│
├── public/
│   ├── music/
│   │   └── bg.mp3
│   ├── images/
│   └── models/
│
├── src/
│   ├── components/
│   │   ├── entry/
│   │   │   ├── TypingIntro.jsx
│   │   │   └── GiftBox.jsx
│   │   │
│   │   ├── common/
│   │   │   ├── HeartCollector.jsx
│   │   │   ├── MusicPlayer.jsx
│   │   │   └── ProgressBar.jsx
│   │   │
│   │   └── three/
│   │       ├── SpaceScene.jsx
│   │       └── FloatingHearts.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── LoveLetter.jsx
│   │   ├── Countdown.jsx
│   │   ├── Secret.jsx
│   │   └── Game.jsx
│   │
│   ├── store/
│   │   └── useLoveStore.js
│   │
│   ├── utils/
│   │   ├── countdown.js
│   │   └── storage.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .env.example
└── vite.config.js

---

## 🔐 Environment Variables

Personal data will be managed using Vite environment variables.

### Example `.env`

VITE_HER_NAME={{HER_NAME}}  
VITE_BIRTHDAY=2026-04-11  
VITE_NICKNAME={{NICKNAME}}  

### Usage in Code

const herName = import.meta.env.VITE_HER_NAME

⚠️ Note: Since GitHub Pages is static hosting, these are **build-time variables**, not true secrets.

---

## 🔄 User Flow

Typing Intro  
   ↓  
Gift Box Animation  
   ↓  
Home Page  
   ↓  
User navigates pages  
   ↓  
Hidden hearts collected (5)  
   ↓  
Secret Page unlock 🎉

---

## ❤️ Heart Collection System

### Rules

- Hidden hearts placed across pages  
- Total required: **5**  
- Each click:  
  - increments counter  
  - saves to localStorage  
  - plays animation  
- When count reaches 5:  
  - Secret page unlocks

### localStorage Format

{
  "hearts": 0,
  "secretUnlocked": false
}

---

## 🎵 Background Music System

### Behavior

- Auto-play after first interaction  
- Loop enabled  
- Global mute/unmute toggle  
- State persisted

### Music Location

public/music/bg.mp3

(User will replace later.)

---

## 🎮 Game Module

### Game 1 — Catch the Hearts

**Features:**

- Falling hearts  
- Score counter  
- Touch support  
- Win animation  
- Mobile optimized

### Game 2 — Romantic Space Shooter

**Features:**

- Built with React Three Fiber  
- Player spaceship  
- Heart bullets  
- Cute enemies  
- Pink romantic theme  
- Score tracking

---

## 🚀 Performance Strategy

Because animations are heavy:

- Lazy load pages  
- React Suspense for 3D  
- Asset preloading  
- Mobile FPS protection  
- Reduced-motion fallback  
- Optimized textures

---

## 🌐 Deployment Plan

### Build

npm run build

### Deploy

- Push to GitHub  
- Use GitHub Pages  
- Deploy from `dist/`

### Final Output

- Public surprise link  
- Mobile friendly  
- Fast loading (optimized)

---

## 📅 Target Delivery

Website will be completed and shared **before birthday (11 April)**.

---

## ✅ Success Criteria

- Smooth animations  
- Mobile compatibility  
- Secret unlock working  
- Music autoplay working  
- Games playable  
- Emotional impact achieved 💖

---

**Prepared for:** Praveenkanth  
**Project Type:** Romantic Interactive Website  
**Version:** v1.0