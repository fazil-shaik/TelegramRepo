"use client";
import { Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const params = useSearchParams();
  const username = params.get("username") || "User";

  return <Typography variant="h5">Hello, {username}</Typography>;
}
