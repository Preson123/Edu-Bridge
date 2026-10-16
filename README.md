# EduBridge — Student Opportunity Discovery Platform

EduBridge is a mature, modern, student opportunity discovery platform built for college students, especially engineering undergraduates in India. It unites verified scholarships, early-career internships, national hackathons, and industry skill certifications in one distraction-free space.

The platform includes **real Firebase Authentication (Email & Password)**, dedicated entry and registration flows, client-side route protection, user-scoped local opportunity tracking, and an elegant forest-green and warm-ivory design system.

---

## 1. Project Overview

Finding legitimate student opportunities often means navigating cluttered portals, spam newsletters, and unverified social media posts. **EduBridge** provides a structured, distraction-free platform where authenticated students can:
- Discover opportunities categorized by track, academic level, and domain.
- Bookmark and track opportunities in a personal dashboard linked to their authenticated account.
- Maintain a student profile with educational preferences, degree details, and technical interests.
- Securely register and log in via Firebase Authentication with zero hardcoded passwords or mock authentication.

---

## 2. Technology Stack

- **HTML5:** Semantic, accessible markup across all views.
- **CSS3:** Custom design tokens, CSS variables, subtle glassmorphism, responsive grid layouts, and smooth micro-transitions embedded directly inside each file's `<style>` tag.
- **Vanilla JavaScript (ES6+ Modules):** Lightweight, reactive client-side logic embedded inside `<script type="module">` tags without heavy framework dependencies.
- **Firebase Web SDK v10 (ESM CDN):** Real Email/Password authentication, user registration, session persistence (`browserLocalPersistence` and `browserSessionPersistence`), password reset recovery, and authentication state change observation. Runs directly in the browser via CDN modules with no Node.js build step or bundler needed.
- **Inline SVG Icons:** Clean, scalable vector icons with consistent 1.8px–2px stroke widths (no emoji decorations or heavy icon fonts).
- **User-Scoped Browser Storage:** Bookmarks and profile configurations are scoped by Firebase User ID (`${key}_${user.uid}`) in `localStorage`, keeping separate user accounts on the same browser cleanly partitioned.

---

## 3. Complete File Structure

```text
EduBridge/
├── login.html              # MANDATORY ENTRY POINT: Firebase sign-in, show/hide password, reset modal
├── signup.html             # Registration page: name, email, password validation, account creation
├── index.html              # Authenticated home page: hero, tracks, featured opportunities, workflow
├── scholarships.html       # Dedicated scholarship & grant discovery engine with filters & details
├── internships.html        # Engineering & technical internships directory with stipends & modes
├── hackathons.html         # Collegiate coding sprints, CTFs, and AI hackathon finder
├── learn.html              # Handpicked certifications, free pathways, and cloud learning tracks
├── dashboard.html          # Personal student dashboard displaying saved items & summary statistics
├── profile.html            # Student profile, degree settings, interests & explicit sign-out control
├── firebase-config.js      # Centralized Firebase Web SDK configuration & auth helper exports
├── auth-guard.js           # Universal auth guard protecting all internal pages against direct access
├── opportunities-data.js   # Master curated catalog (32 records) & unified bookmarking/modal layer
└── README.md               # Comprehensive project documentation and developer setup guide
```

> [!NOTE]
> **Local Server Requirement (`http://` vs `file://`):**
> Because EduBridge uses native ES6 JavaScript modules (`<script type="module">`), modern browsers enforce CORS security policies that block module loading over the `file:///` protocol. Always run EduBridge using **VS Code Live Server** (`http://127.0.0.1:5500/login.html`) or any local HTTP server (such as `python -m http.server 8000` or `npx serve`). If accidentally launched via `file:///`, an in-app banner will guide you.

---

## 4. Firebase Authentication Setup Guide

EduBridge uses **real Firebase Authentication** with Email & Password. To enable live user creation and login, follow these simple steps to link your free Firebase project:

### Step 1: Create a Firebase Project
1. Open the [Firebase Console](https://console.firebase.google.com/) and sign in with your Google Account.
2. Click **"Add project"** (or select an existing Google Cloud / Firebase project).
3. Name your project (e.g., `EduBridge-Student-Portal`).
4. Google Analytics is optional; you can disable it for a faster setup. Click **"Create project"**.

### Step 2: Enable Email/Password Sign-In
1. In your Firebase project dashboard, go to the left navigation menu and click **Build &rarr; Authentication**.
2. Click **"Get started"**.
3. Under the **"Sign-in method"** tab, select **Email/Password**.
4. Enable the first toggle (**Email/Password**). Leave *Email link (passwordless sign-in)* disabled.
5. Click **"Save"**.

### Step 3: Register a Web App & Copy Configuration
1. In the left navigation menu, click the gear icon (&#9881;) next to *Project Overview* and select **Project settings**.
2. Under the **"General"** tab, scroll down to the **"Your apps"** section and click the **Web icon (`</>`)**.
3. Enter an app nickname (e.g., `EduBridge Web`) and click **"Register app"**.
4. Firebase will display your `firebaseConfig` object:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "your-project-id.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project-id.appspot.com",
     messagingSenderId: "123456789012",
     appId: "1:123456789012:web:abcdef123456"
   };
   ```

### Step 4: Paste into `firebase-config.js`
1. Open [`firebase-config.js`](firebase-config.js) in VS Code.
2. Replace the placeholder values in `FIREBASE_CONFIG` with your actual project keys from Step 3:
   ```javascript
   export const FIREBASE_CONFIG = {
     apiKey: "YOUR_ACTUAL_API_KEY",
     authDomain: "YOUR_ACTUAL_PROJECT.firebaseapp.com",
     projectId: "YOUR_ACTUAL_PROJECT_ID",
     storageBucket: "YOUR_ACTUAL_PROJECT.appspot.com",
     messagingSenderId: "YOUR_ACTUAL_MESSAGING_SENDER_ID",
     appId: "YOUR_ACTUAL_APP_ID"
   };
   ```
3. Save the file.
4. If the credentials are left as placeholders, EduBridge automatically displays a helpful configuration banner on `login.html` and `signup.html` guiding you back to this setup section.

### Step 5: Configure Authorized Domains (Localhost & GitHub Pages)
By default, Firebase permits requests from `localhost`. If using custom ports, VS Code Live Server (`127.0.0.1`), or GitHub Pages:
1. In the Firebase Console, go to **Authentication &rarr; Settings &rarr; Authorized domains**.
2. Ensure `localhost` and `127.0.0.1` are present.
3. If publishing to GitHub Pages, click **"Add domain"** and enter:
   ```text
   <your-github-username>.github.io
   ```
4. Click **"Save"**.

---

## 5. Security & Protection Model

### Client-Side Route Protection (`auth-guard.js`)
All 7 internal application pages (`index.html`, `scholarships.html`, `internships.html`, `hackathons.html`, `learn.html`, `dashboard.html`, `profile.html`) import and execute `protectPage()` from [`auth-guard.js`](auth-guard.js):
- **Immediate Anti-Flicker Overlay:** A smooth full-screen overlay with a spinner renders instantly upon page parse, hiding private student content before authentication verification finishes.
- **Direct Access Redirect:** If an unauthenticated user enters an internal URL directly into the browser address bar, `onAuthStateChanged` catches it and immediately redirects to `login.html`.
- **Authenticated Access:** If the user has a valid Firebase session, the overlay fades out smoothly and the page logic initializes with the authenticated `currentUser` object.

> [!IMPORTANT]
> **Client-Side vs. Backend Security:** Client-side redirects provide a seamless, protected user experience in frontend-only web applications, but do not replace server-side security rules for private cloud data. If you integrate Cloud Firestore or Cloud Storage in a future version, ensure strict [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started) are deployed.

### User Data Isolation in Storage
- Opportunity bookmarks and student profiles in `localStorage` are strictly keyed by the user's unique Firebase UID:
  - `edubridge_saved_items_${currentUser.uid}`
  - `edubridge_profile_${currentUser.uid}`
- Logging out or switching accounts on the same computer ensures that User B cannot see or overwrite User A's saved opportunities or personal profile details.

---

## 6. How to Open and Run in VS Code

### Step 1: Open the Project
1. Launch **Visual Studio Code**.
2. Select **File &rarr; Open Folder...** (`Ctrl + K, Ctrl + O`).
3. Select `d:\EduBridge`.

### Step 2: Run with Live Server
1. Install the **Live Server** extension by *Ritwick Dey* if not already installed.
2. Right-click on **`login.html`** (the official entry point) and select **"Open with Live Server"**.
3. Your browser will open:
   ```text
   http://127.0.0.1:5500/login.html
   ```
4. If you attempt to open `index.html` or `dashboard.html` without logging in, the auth guard will automatically redirect you to `login.html`.

---

## 7. Key Features & Highlights

1. **Authentication Flows:**
   - **Login (`login.html`):** Email and password inputs, show/hide password toggle, remember-me persistence selector (`browserLocalPersistence` vs `browserSessionPersistence`), and forgot password recovery modal using `sendPasswordResetEmail`.
   - **Signup (`signup.html`):** Full name, email, password, and confirm password fields with client-side match checking and minimum 6-character length enforcement. Automatically updates the Firebase user profile `displayName`.
   - **Sign Out:** Accessible from the collapsible sidebar on every page and via an explicit button on `profile.html`. Terminates the Firebase session and returns to `login.html`.
2. **Mature, Professional Design System:**
   - **Primary Palette:** Deep Forest Green (`#153e2e`), Muted Sage (`#587965`), Warm Ivory/Cream background (`#f8f6f0`), Charcoal text (`#1c231f`).
   - Clean typographic branding with an elegant italic serif accent: *EduBridge*.
3. **Unified Navigation Experience:**
   - **Fixed Desktop Sidebar:** Collapsible left sidebar with a centered hamburger button (~40px) that smoothly minimizes from 250px to 72px while preserving icon alignment.
   - **Responsive Mobile Navigation:** Sliding off-canvas drawer with backdrop overlay triggered by a dedicated mobile hamburger button in the sticky topbar.
   - **Interactive Live Topbar:** Dynamic formatted date, active student avatar reflecting user initials, and global search.
4. **Cross-Page Opportunity Bookmarking:**
   - Single-click bookmark button on any opportunity card across Home, Scholarships, Internships, Hackathons, and Learn.
   - User-scoped storage ensures items saved on `scholarships.html` immediately update the sidebar badge counter and appear in `dashboard.html`.
5. **Rich Detail Modals:**
   - Informative popups for opportunities displaying prerequisites, eligibility criteria, stipends/rewards, deadlines, and direct bookmark controls.
6. **Personal Student Dashboard:**
   - Dynamic 5-metric summary ribbon: *Total Saved, Scholarships, Internships, Hackathons, Certifications*.
   - Filter tabs (*All, Scholarships, Internships, Hackathons, Certifications*).
   - One-click deletion with undo/clear-all options and empty-state guidance.
7. **Student Profile:**
   - View authenticated account email, UID snippet, and session status.
   - Edit name, college, degree, and year of study.
   - Interactive toggleable chips for technical interests and preferred opportunity domains.
   - Instant avatar initials generation dynamically reflected in the top navigation bar.

---

## 8. Publishing on GitHub Pages

You can host EduBridge for free on GitHub Pages:

1. Create a new public repository on [GitHub](https://github.com/new) named `edubridge`.
2. Push your project code using the Git commands below.
3. On GitHub, go to your repository **Settings &rarr; Pages**.
4. Under **Build and deployment &rarr; Branch**, select `main` (or `master`) and folder `/ (root)`.
5. Click **Save**. Within 1–2 minutes, your site will be live at:
   ```text
   https://<your-username>.github.io/edubridge/login.html
   ```
6. **Important:** Add `<your-username>.github.io` to your Firebase project's **Authorized domains** list in Firebase Console (see Section 4, Step 5 above).

---

## 9. Git Commands to Initialize and Push

Open a terminal in the `EduBridge` directory (in VS Code: press `` Ctrl + ` ``) and run:

```bash
# Initialize git repository
git init

# Stage all files
git add .

# Create initial commit
git commit -m "feat: complete EduBridge website with Firebase Authentication and client-side protection"

# Rename branch to main
git branch -M main

# Add your GitHub remote repository (replace with your actual repository URL)
git remote add origin https://github.com/<your-username>/edubridge.git

# Push code to GitHub
git push -u origin main
```

---

## 10. Summary Checklist of Delivered Requirements

- [x] `login.html` is the mandatory starting page with no demo accounts or fake login.
- [x] `signup.html` allows real user registration via Firebase Authentication.
- [x] All 7 internal pages protected by `auth-guard.js`; direct URL access redirects unauthenticated users.
- [x] Sign Out buttons implemented in sidebar across all internal pages and explicitly on `profile.html`.
- [x] Data storage in `localStorage` scoped strictly per user (`${key}_${user.uid}`).
- [x] Centralized, clean Firebase configuration in `firebase-config.js` with unconfigured fallback detection.
- [x] Embedded CSS within `<style>` and JavaScript within `<script>` in each page.
- [x] Distinctive EduBridge wordmark and refined color palette (Deep Forest Green, Sage, Warm Ivory).
- [x] Clean inline SVG icons throughout; zero emoji clutter.
- [x] Fixed desktop sidebar with collapsible hamburger toggle (~40px square, 20px icon).
- [x] Mobile sliding sidebar with overlay backdrop and separate topbar hamburger toggle.
- [x] Live dynamic date display and profile avatar initials in top navigation bar.
- [x] Full search and category filtering on Home, Scholarships, Internships, Hackathons, and Learn.
- [x] Interactive bookmarking synchronized across pages via user-scoped storage.
- [x] Personal dashboard with metric cards, filter pills, and item removal.
- [x] Student profile editor with interest chips and instant avatar synchronization.
- [x] All sample opportunities clearly identified and designated for testing.
