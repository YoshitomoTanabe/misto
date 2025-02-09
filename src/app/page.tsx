"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1>misto</h1>
      <button onClick={handleLogin} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
        ログイン
      </button>
      <p>a</p>
    </div>
  );
}