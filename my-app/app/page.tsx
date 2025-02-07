// // "use client"
// // import { useState } from "react";
// // import { TextField, Button, Container, Typography, Switch } from "@mui/material";

// // export default function Home({ darkMode, setDarkMode }) {
// //   const [step, setStep] = useState(1);
// //   const [phone, setPhone] = useState("");
// //   const [otp, setOtp] = useState(["", "", "", "", ""]);
// //   const [password, setPassword] = useState("");
// //   const [username, setUsername] = useState("");

// //   const handleOTPChange = (index, value) => {
// //     if (/^\d*$/.test(value)) {
// //       const newOtp = [...otp];
// //       newOtp[index] = value;
// //       setOtp(newOtp);
// //       if (value && index < 4) document.getElementById(`otp-${index + 1}`)?.focus();
// //     }
// //   };

// //   const handleLogin = async () => {
// //     setTimeout(() => {
// //       setUsername("TelegramUser123");
// //       setStep(4);
// //     }, 2000);
// //   };

// //   return (
// //     <Container style={{ textAlign: "center", marginTop: "20px" }}>
// //       <Typography variant="h4">Telegram Login</Typography>
// //       <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />

// //       {step === 1 && (
// //         <>
// //           <TextField fullWidth label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
// //           <Button variant="contained" onClick={() => setStep(2)}>Next</Button>
// //         </>
// //       )}

// //       {step === 2 && (
// //         <>
// //           <Typography variant="h6">Enter OTP</Typography>
// //           <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
// //             {otp.map((digit, i) => (
// //               <TextField key={i} id={`otp-${i}`} variant="outlined" value={digit} onChange={(e) => handleOTPChange(i, e.target.value)} inputProps={{ maxLength: 1, style: { textAlign: "center" } }} />
// //             ))}
// //           </div>
// //           <Button variant="contained" onClick={() => setStep(3)}>Next</Button>
// //         </>
// //       )}

// //       {step === 3 && (
// //         <>
// //           <TextField fullWidth type="password" label="2-Step Verification Password" value={password} onChange={(e) => setPassword(e.target.value)} />
// //           <Button variant="contained" onClick={handleLogin}>Login</Button>
// //         </>
// //       )}

// //       {step === 4 && (
// //         <Typography variant="h5">Hello, {username}</Typography>
// //       )}
// //     </Container>
// //   );
// // }


// "use client";
// import { useState } from "react";
// import { TextField, Button } from "@mui/material";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const [phone, setPhone] = useState("");
//   const router = useRouter();

//   return (
//     <>
//       <TextField fullWidth label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
//       <Button variant="contained" onClick={() => router.push("/otp")}>Next</Button>
//     </>
//   );
// }


"use client";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSendOTP = async () => {
    const res = await fetch("/api/send-otp", {
      method: "POST",
      body: JSON.stringify({ phoneNumber: phone }),
    });
    const data = await res.json();

    if (data.success) {
      router.push(`/otp?phone=${phone}`);
    } else {
      setError(data.message);
    }
  };

  return (
    <>
      <TextField fullWidth label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <Button variant="contained" onClick={handleSendOTP}>Next</Button>
      {error && <p>{error}</p>}
    </>
  );
}
