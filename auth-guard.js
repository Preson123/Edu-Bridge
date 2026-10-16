// =============================================================================
// EduBridge — Authentication Guard & Session Management
// =============================================================================
// Protects internal pages against unauthorized access by verifying the Firebase
// Authentication state before rendering private content.
// =============================================================================

import { 
  auth, 
  isFirebaseConfigured, 
  onAuthStateChanged, 
  signOut 
} from "./firebase-config.js";

/**
 * Checks if the page was opened directly via file:// instead of a local HTTP server.
 */
export function checkProtocol() {
  if (window.location.protocol === "file:") {
    const banner = document.createElement("div");
    banner.id = "fileProtocolWarning";
    banner.style.cssText = `
      position: fixed; top: 0; left: 0; right: 0; background: #991b1b; color: #ffffff;
      padding: 12px 20px; z-index: 1000000; font-family: system-ui, sans-serif;
      font-size: 13.5px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    `;
    banner.innerHTML = `
      ⚠️ <strong>Local Web Server Required:</strong> You opened EduBridge directly via the <code>file://</code> protocol.
      Modern browsers block JavaScript ES Modules and Firebase Authentication on local file paths.
      Please open this project using <strong>VS Code Live Server</strong> (<code>http://127.0.0.1:5500/login.html</code>).
    `;
    document.body.prepend(banner);
    return false;
  }
  return true;
}

/**
 * Generates user-scoped localStorage keys to prevent data contamination across users.
 */
export function getScopedKey(baseKey, user) {
  if (!user || !user.uid) return baseKey;
  return `${baseKey}_${user.uid}`;
}

/**
 * Computes uppercase initials from a display name or email address.
 */
export function getUserInitials(user) {
  if (!user) return "ST";
  if (user.displayName && user.displayName.trim()) {
    const parts = user.displayName.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return user.displayName.slice(0, 2).toUpperCase();
  }
  if (user.email) {
    return user.email.slice(0, 2).toUpperCase();
  }
  return "ST";
}

/**
 * Safely loads user profile from scoped localStorage with clean fallbacks.
 */
export function getScopedProfile(user) {
  const defaultProfile = {
    fullName: (user && user.displayName) || (user && user.email ? user.email.split('@')[0] : "Student"),
    college: "Demo Engineering Institute",
    degree: "B.Tech Computer Science & Engineering",
    year: "3rd Year (Junior)",
    interests: ["Artificial Intelligence", "Web Development", "Cloud Systems"],
    categories: ["Scholarships", "Internships", "Hackathons", "Courses"],
    avatarInitials: getUserInitials(user)
  };

  const key = getScopedKey('edubridge_profile', user);
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultProfile;
    const parsed = JSON.parse(raw);
    return {
      fullName: parsed.fullName || defaultProfile.fullName,
      college: parsed.college || defaultProfile.college,
      degree: parsed.degree || defaultProfile.degree,
      year: parsed.year || defaultProfile.year,
      interests: Array.isArray(parsed.interests) ? parsed.interests : defaultProfile.interests,
      categories: Array.isArray(parsed.categories) ? parsed.categories : defaultProfile.categories,
      avatarInitials: parsed.avatarInitials || defaultProfile.avatarInitials
    };
  } catch (err) {
    console.warn("Error reading scoped profile:", err);
    return defaultProfile;
  }
}

/**
 * Safely writes user profile to scoped localStorage.
 */
export function saveScopedProfile(user, profile) {
  const key = getScopedKey('edubridge_profile', user);
  try {
    localStorage.setItem(key, JSON.stringify(profile));
    return true;
  } catch (err) {
    console.error("Error saving scoped profile (storage full or blocked):", err);
    return false;
  }
}

/**
 * Performs a sign-out operation and redirects to login.html.
 */
export async function handleSignOut() {
  if (auth) {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Sign-out error:", err);
    }
  }
  window.location.replace("login.html");
}

/**
 * Protects an internal page:
 * - Shows an authentication verification screen immediately.
 * - Redirects to login.html if Firebase is unconfigured or user is not logged in.
 * - Unhides the page and runs the pageCallback(user) when authenticated.
 */
export function protectPage(pageCallback) {
  checkProtocol();

  // If Firebase configuration is missing, redirect to login with notification
  if (!isFirebaseConfigured() || !auth) {
    window.location.replace("login.html?notice=unconfigured");
    return;
  }

  // Inject a lightweight overlay if not present to prevent content flashing
  let guardOverlay = document.getElementById("authGuardOverlay");
  if (!guardOverlay) {
    guardOverlay = document.createElement("div");
    guardOverlay.id = "authGuardOverlay";
    guardOverlay.style.cssText = `
      position: fixed; inset: 0; background: #f8f6f0; z-index: 99999;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      font-family: system-ui, -apple-system, sans-serif; color: #153e2e; transition: opacity 0.25s ease;
    `;
    guardOverlay.innerHTML = `
      <div style="text-align: center;">
        <div style="width: 42px; height: 42px; border: 3px solid #e2ddd4; border-top-color: #153e2e; border-radius: 50%; animation: authSpin 0.75s linear infinite; margin: 0 auto 16px;"></div>
        <div style="font-weight: 700; font-size: 1.15rem; letter-spacing: -0.02em;">Edu<span style="font-family: Georgia, serif; font-style: italic; color: #587965;">Bridge</span></div>
        <div style="font-size: 13px; color: #7d8b82; margin-top: 6px;">Verifying authenticated session...</div>
      </div>
      <style>
        @keyframes authSpin {
          to { transform: rotate(360deg); }
        }
      </style>
    `;
    document.body.appendChild(guardOverlay);
  }

  try {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Unauthenticated access attempt — redirect immediately to login
        window.location.replace("login.html");
      } else {
        // User is authenticated
        if (guardOverlay) {
          guardOverlay.style.opacity = "0";
          setTimeout(() => {
            if (guardOverlay.parentNode) guardOverlay.parentNode.removeChild(guardOverlay);
          }, 260);
        }

        // Sync user initials in topbar avatar
        const avatarEl = document.getElementById("topbarUserAvatar");
        if (avatarEl) {
          avatarEl.textContent = getUserInitials(user);
          avatarEl.setAttribute("title", user.displayName || user.email);
        }

        // Attach sign-out listeners to elements with id="signOutBtn", id="sidebarSignOutBtn", or class="btn-sign-out"
        document.querySelectorAll("#signOutBtn, #sidebarSignOutBtn, .btn-sign-out").forEach(btn => {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            handleSignOut();
          });
        });

        // Run page-specific logic
        if (typeof pageCallback === "function") {
          pageCallback(user);
        }
      }
    });
  } catch (authErr) {
    console.error("Auth Guard Listener Error:", authErr);
    window.location.replace("login.html");
  }
}
