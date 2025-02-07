import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import "dotenv/config"; 

const apiId = process.env.TELEGRAM_API_ID ? Number(process.env.TELEGRAM_API_ID) : undefined;
const apiHash = process.env.TELEGRAM_API_HASH;

if (!apiId || !apiHash) {
  throw new Error("TELEGRAM_API_ID or TELEGRAM_API_HASH is missing. Check your .env file.");
}

const session = new StringSession(""); 
const client = new TelegramClient(session, apiId, apiHash, { connectionRetries: 5 });

export const sendOTP = async (phoneNumber: string) => {
  try {
    await client.connect(); // Connect to Telegram servers
    const result = await client.sendCode({ apiId, apiHash }, phoneNumber); // Corrected function call
    return { success: true, message: "OTP sent successfully", phoneCodeHash: result.phoneCodeHash };
  } catch (error) {
    console.error("Error sending OTP:", error);
    return { success: false, message: "Failed to send OTP" };
  }
};
