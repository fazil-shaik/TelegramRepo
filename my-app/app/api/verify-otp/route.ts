import { verifyOTP } from "../../utils/telegramAuth";
export async function POST(req: Request) {
  const { phoneNumber, code } = await req.json();
  const result = await verifyOTP(phoneNumber, code);
  return new Response(JSON.stringify(result), { status: 200 });
}
