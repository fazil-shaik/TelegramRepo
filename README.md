# Telegram Login App (Tauri + Next.js)

This project is a **desktop authentication app** built with **Tauri + Next.js**. It enables **Telegram-based login** with **OTP authentication** and **Two-Step Verification (2FA)**, displaying a success message upon login.

## 🚀 Features
- **Telegram OTP Login** (Sends & Verifies OTP)
- **Two-Step Verification** (If enabled)
- **Success Screen with Telegram Username**
- **Dark Mode / Light Mode Toggle**
- **Tauri Desktop Packaging**
- **Uses Next.js App Router (`app/` directory)**

---

## 📂 Folder Structure
```
📦 telegram-login-app
├── 📂 app
│   ├── 📂 api
│   │   ├── 📂 send-otp
│   │   │   ├── route.ts
│   │   ├── 📂 verify-otp
│   │   │   ├── route.ts
│   │   ├── 📂 verify-password
│   │   │   ├── route.ts
│   ├── 📂 otp
│   │   ├── page.tsx
│   ├── 📂 password
│   │   ├── page.tsx
│   ├── 📂 success
│   │   ├── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
├── 📂 components
│   ├── ThemeToggle.tsx
├── 📂 utils
│   ├── telegramAuth.ts
├── 📂 public
│   ├── favicon.ico
├── 📂 styles
│   ├── theme.ts
├── 📂 tauri
│   ├── tauri.conf.json
├── .env
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
├── README.md
```

---

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/telegram-login-app.git
cd telegram-login-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory:
```
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_API_ID=YOUR_API_ID
TELEGRAM_API_HASH=YOUR_API_HASH
```
> Get these from [my.telegram.org](https://my.telegram.org/).

### 4️⃣ Start the Development Server
```sh
npm run dev
```
The app will be available at **http://localhost:3000**.

### 5️⃣ Build the Tauri Desktop App
```sh
npm run tauri build
```
This generates the executable (`.exe` for Windows, `.app` for macOS).

---

## 🖥️ Usage
1. **Enter your phone number** on the login page.
2. **Receive and enter the OTP** sent to your Telegram.
3. If **Two-Step Verification** is enabled, **enter your password**.
4. Upon success, the app will **display your Telegram username**.

---

## 🌙 Dark Mode / Light Mode
Click the **toggle switch** on the UI to change the theme.

---

## 🔧 Tech Stack
- **Tauri** (Desktop App Framework)
- **Next.js** (Frontend Framework)
- **Node-Telegram-Bot-API** (Telegram API Integration)
- **Telegram** (library)
- **TypeScript** (Strong Typing)
- **Material UI** (UI Components)

---

## 📝 License
This project is licensed under the MIT License.

---

Happy coding! 🚀

