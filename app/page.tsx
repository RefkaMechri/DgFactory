"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../CSS/Loginpage.module.css";

type Tab = "login" | "signup";

export default function LoginPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <main className={styles.page}>
      {/* ---------------- LEFT: illustration ---------------- */}
      <section className={styles.illustration}>
        <div className={styles.overlay} />

        <div className={styles.brandHeader}>
          <div>
            <p className={styles.brandName}>YK DIGITAL</p>
            <p className={styles.brandSub}>DIGITAL FACTORY</p>
          </div>
        </div>

        {/* card + tagline share one flow wrapper so they stack with a fixed
            gap instead of two independently-positioned absolute blocks */}
        <div className={styles.content}>


          <div className={styles.tagline}>
            <p className={styles.taglineTitle}>
              Votre transformation bancaire digitale
              <br />
              <span className={styles.taglineAccent}>commence ici.</span>
            </p>
            <p className={styles.taglineBody}>
              Pilotez les produits digitaux, suivez les KPIs et accompagnez
              les squads de YK factory depuis une plateforme moderne et
              sécurisée.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- RIGHT: form ---------------- */}
      <section className={styles.formSide}>
        <div className={styles.formWrap}>
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>Ready to continue your quest?</p>

          <div className={styles.tabs}>
            <button
              type="button"
              className={`${styles.tab} ${
                activeTab === "login" ? styles.tabActive : ""
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              type="button"
              className={`${styles.tab} ${
                activeTab === "signup" ? styles.tabActive : ""
              }`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
            <div
              className={`${styles.tabIndicator} ${
                activeTab === "signup" ? styles.tabIndicatorRight : ""
              }`}
            />
          </div>

          <div className={styles.field}>
            <div className={styles.label}>
              <span>Email Address</span>
            </div>
            <div className={styles.inputBox}>
              <span className={styles.inputIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M3 7l9 6 9-6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                type="email"
                placeholder="imen@example.com"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.field}>
            <div className={styles.label}>
              <span>Password</span>
              <a href="/forgot-password" className={styles.forgotLink}>
                Forgot password?
              </a>
            </div>
            <div className={styles.inputBox}>
              <span className={styles.inputIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="5"
                    y="10"
                    width="14"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 10V7a4 4 0 118 0v3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.checkboxRow}>
            <input
              id="keepLoggedIn"
              type="checkbox"
              className={styles.checkbox}
              checked={keepLoggedIn}
              onChange={(e) => setKeepLoggedIn(e.target.checked)}
            />
            <label htmlFor="keepLoggedIn" className={styles.checkboxLabel}>
              Keep me logged in to the realm
            </label>
          </div>

          <button
            type="button"
            className={styles.submitBtn}
            onClick={handleLogin}
          >
            Enter World
          </button>

          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerText}>OR CONTINUE WITH</span>
            <span className={styles.dividerLine} />
          </div>

          <div className={styles.oauthRow}>
            <button type="button" className={styles.oauthBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.08 3.56-5.14 3.56-8.82z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29A11.98 11.98 0 000 12c0 1.93.46 3.76 1.29 5.38l3.98-3.09z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
                />
              </svg>
              Google
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}