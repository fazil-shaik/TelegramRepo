import { sendOTP } from "../../utils/telegramAuth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { phoneNumber } = await req.json();
    if (!phoneNumber) {
      return NextResponse.json({ success: false, message: "Phone number is required" }, { status: 400 });
    }

    const result = await sendOTP(phoneNumber);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in OTP API:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
