"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import "./page.css";

export default function LoginPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const redirect = searchParams.get("redirect") || "/";
    window.location.href = `/api/auth/login?redirect=${encodeURIComponent(redirect)}`;
  }, [searchParams]);

  return (
    <div className="login-redirect">
      <div className="login-spinner" />
      <p>Redirecting you to secure login…</p>
    </div>
  );
}