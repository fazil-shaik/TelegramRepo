"use client";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const params = useSearchParams();
  const phone = params.get("phone") || "";

  const handleVerifyPassword = async () => {
    const res = await fetch("/api/verify-password", {
      method: "POST",
      body: JSON.stringify({ phoneNumber: phone, password }),
    });
    const data = await res.json();

    if (data.success) {
      router.push(`/success?username=${data.user.username}`);
    } else {
      setError(data.message);
    }
  };

  return (
    <>
      <TextField fullWidth type="password" label="2-Step Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" onClick={handleVerifyPassword}>Login</Button>
      {error && <p>{error}</p>}
    </>
  );
}
