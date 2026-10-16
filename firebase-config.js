// =============================================================================
// EduBridge — Firebase Authentication Client Configuration
// =============================================================================
// This file initializes Firebase Authentication using the official modular Web SDK.
// 
// INSTRUCTIONS FOR SETUP:
// 1. Create a free project at https://console.firebase.google.com/
// 2. In your Firebase Console, navigate to "Authentication" > "Sign-in method"
//    and enable "Email/Password".
// 3. Go to "Project Settings" (gear icon) > "General" > "Your apps" > click "</>" (Web).
// 4. Register your app (e.g. "EduBridge Web") and copy the firebaseConfig values below.
// 5. Replace the placeholder values in the `firebaseConfig` object below.
// =============================================================================

import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  sendPasswordResetEmail, 
  updateProfile,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// REPLACE THESE PLACEHOLDER VALUES WITH YOUR FIREBASE PROJECT CONFIGURATION:
export const firebaseConfig = {
  apiKey: "AIzaSyDCAazyA4XICY-JS5Xp5dJ3nNtryJAOy24",
  authDomain: "edu-bridge-dc41a.firebaseapp.com",
  projectId: "edu-bridge-dc41a",
  storageBucket: "edu-bridge-dc41a.firebasestorage.app",
  messagingSenderId: "127133357441",
  appId: "1:127133357441:web:ab4038847ff5aee777c480",
  measurementId: "G-BLCNRX073W"
};

/**
 * Returns true if the user has replaced the default placeholder configuration.
 */
export function isFirebaseConfigured() {
  return (
    firebaseConfig.apiKey &&
    firebaseConfig.apiKey !== "YOUR_API_KEY" &&
    firebaseConfig.projectId &&
    firebaseConfig.projectId !== "YOUR_PROJECT_ID"
  );
}

// Initialize Firebase App singleton safely
let app = null;
let auth = null;

if (isFirebaseConfigured()) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
  } catch (error) {
    console.error("EduBridge Firebase Initialization Error:", error);
  }
}

export { 
  app, 
  auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  sendPasswordResetEmail, 
  updateProfile,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
};

