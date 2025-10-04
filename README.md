# 💍 Olja & Andrija Memories

A personal, chronologically organized **digital love album** built with **React, Vite, and Tailwind CSS** — celebrating the story of **Olja & Andrija** from the first days of their relationship to the wedding itself.

This web app serves both as a **timeline of their journey** and as an **interactive live wedding gallery**, allowing selected guests (godparents, best friends, and close family) to upload their own photos in real time during the wedding — all securely protected by a password.

---

## ✨ Features

### ❤️ Digital Love Timeline

- Each photo represents a meaningful moment from their story — shown chronologically along a vertical timeline.
- On desktop, photos alternate between left and right.
- On mobile, the layout adapts to a centered, clean vertical flow.

### 📸 Guest Upload System (Password Protected)

- During the wedding, invited guests can **upload their own photos** directly from the site.
- Each upload requires a **shared password**, ensuring that only authorized users (e.g. family, close friends, godparents) can contribute.
- Photos instantly appear in the public gallery once uploaded.

### 🖼️ Interactive Modal

- Clicking a photo opens it in a fullscreen **modal**.
- Includes **edit**, **delete**, and **download** options — all password-protected.
- Smooth transitions and focus lock to prevent background scrolling.

### ☁️ Image Upload System

- A lightweight **PHP backend** handles image uploads.
- Automatically updates the gallery using a JSON-based data source.
- Each upload allows entering a **year**, **description**, and **password** for authorization.
- Includes **error handling**, **success pages**, and **secure password verification** stored via `secret.key`.

### ☁️ Secure PHP Backend

- Lightweight and reliable backend built with **PHP + JSON storage**.
- Includes scripts:
  - `upload.php` – handles new uploads
  - `edit.php` – updates photo details
  - `delete.php` – removes selected photos
  - `download.php` – allows authorized downloads
- All backend routes use a **shared password** stored safely in `secret.key`.

### 🔐 Password Protection

- Every administrative action (upload/edit/delete/download) requires the correct password.
- The password is stored in a **local `secret.key` file**, excluded from Git.
- Prevents unauthorized uploads or changes during the event.

### ⚙️ GitHub Actions + Hostinger Deployment

- Automatic deployment to **Hostinger FTP** after each push to `main`.
- Environment variables managed via **GitHub Secrets**:
  - `FTP_HOST`
  - `FTP_USERNAME`
  - `FTP_PASSWORD`
  - `FTP_PORT`

### 📱 Responsive Design

- Fully responsive layout built with **Tailwind CSS**.
- Mobile-first design — smooth transitions between breakpoints.
- Gallery cards automatically center on mobile and alternate on desktop.
- Modals and controls are touch-friendly.

### 🧭 Scroll Controls

- Fixed **“Scroll to Bottom”** button for easier navigation when many photos are loaded.

### 🐷 Personal Touch

- Each photo description includes a soft pig illustration (`pig.png`) in the bottom corner for a unique and playful touch.

### ⚡ Performance

- All photos are **lazy-loaded** to improve load time.
- Uses **framer-motion** for smooth fade and slide-in animations.

---

## 🛠️ Tech Stack

| Layer      | Technology                                     |
| ---------- | ---------------------------------------------- |
| Frontend   | React + Vite                                   |
| Styling    | Tailwind CSS                                   |
| Animations | Framer Motion                                  |
| Backend    | PHP (for uploads, edits, deletions, downloads) |
| Deployment | GitHub Actions → Hostinger (via FTP)           |

## 💡 Future Improvements

- Optional drag & drop image upload.
- Add categories or tags (e.g., wedding, travel, family).
- Option to rearrange photo order in UI.
- Convert backend to Node.js for full-stack JS solution.
