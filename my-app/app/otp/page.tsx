"use client";
import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

export default function OTPPage() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const params = useSearchParams();
  const phone = params.get("phone") || "";

  const handleVerifyOTP = async () => {
    const res = await fetch("/api/verify-otp", {
      method: "POST",
      body: JSON.stringify({ phoneNumber: phone, code: otp }),
    });
    const data = await res.json();

    if (data.requiresPassword) {
      router.push(`/password?phone=${phone}`);
    } else if (data.success) {
      router.push(`/success?username=${data.user.username}`);
    } else {
      setError(data.message);
    }
  };

  return (
    <>
      <Typography variant="h6">Enter OTP</Typography>
      <TextField fullWidth label="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <Button variant="contained" onClick={handleVerifyOTP}>Next</Button>
      {error && <p>{error}</p>}
    </>
  );
}
