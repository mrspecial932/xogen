# Xogen - AI Solutions Website

A modern, full-stack web application for Xogen, an AI solutions company. Built with React (frontend) and Express (backend), with seamless deployment on Vercel.

## 🏗️ Project Structure

```
xogen-master/
├── src/                    # Frontend React application
│   ├── pages/             # Page components
│   ├── assets/            # Images and static assets
│   └── ...
├── backend/               # Backend Express server (local dev)
│   ├── server.js         # Express server
│   ├── package.json      # Backend dependencies
│   └── README.md         # Backend documentation
├── api/                   # Vercel serverless functions (production)
│   └── send-email.js     # Email API endpoint
├── public/               # Public static files
├── package.json          # Frontend dependencies
└── vercel.json           # Vercel deployment config
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd xogen-master
   ```

2. **Install dependencies for both frontend and backend:**
   ```bash
   npm run install:all
   ```

   Or manually:
   ```bash
   npm install          # Install frontend dependencies
   cd backend
   npm install          # Install backend dependencies
   cd ..
   ```

3. **Set up environment variables:**
   
   For **local development**, create a `.env` file in the `backend/` directory:
   ```bash
   cd backend
   cp .env.example .env
   ```
   
   Edit the `.env` file with your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   ```

### Running the Application

#### Option 1: Run Everything (Recommended for development)
```bash
npm run dev:all
```
This starts both the frontend (Vite) and backend (Express) servers concurrently.

#### Option 2: Run Separately
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run dev:backend
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 📡 API Endpoints

### Local Development
- `POST http://localhost:5000/api/send-email` - Send contact form email
- `GET http://localhost:5000/api/health` - Health check

### Production (Vercel)
- `POST https://your-domain.vercel.app/api/send-email` - Send contact form email

## 🌐 Deployment

### Deploying to Vercel

1. **Connect your repository to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Import your Git repository
   - Vercel will auto-detect the configuration

2. **Set environment variables in Vercel:**
   
   Go to Project Settings → Environment Variables and add:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

3. **Deploy:**
   ```bash
   git push origin main
   ```
   
   Vercel will automatically deploy your changes.

### Build Configuration

The project uses:
- **Frontend**: Vite for building React app → outputs to `dist/`
- **Backend (Production)**: Vercel Serverless Functions in `api/` directory
- **Backend (Local)**: Express server in `backend/` directory

## 📧 Email Configuration

### Gmail Setup

1. Enable 2-factor authentication on your Gmail account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Create an app password for "Mail"
4. Use this password in your environment variables

### Other Email Providers

You can use any SMTP provider (Outlook, Yahoo, SendGrid, etc.) by updating:
- `SMTP_HOST` - Your provider's SMTP server
- `SMTP_PORT` - Provider's SMTP port (usually 587 or 465)
- `EMAIL_USER` - Your email/username
- `EMAIL_PASS` - Your password/app password

## 🛠️ Development

### Available Scripts

**Frontend:**
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

**Backend:**
- `npm run dev:backend` - Start Express server
- `npm run dev:all` - Start both frontend and backend

**Both:**
- `npm run install:all` - Install all dependencies

### Technologies Used

**Frontend:**
- React 18
- React Router
- Tailwind CSS
- Vite
- AOS (Animate On Scroll)

**Backend:**
- Express.js
- Nodemailer
- CORS
- dotenv

## 📂 Important Files

- `vercel.json` - Vercel deployment configuration
- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `api/send-email.js` - Production serverless function
- `backend/server.js` - Development Express server

## 🔒 Security

- Never commit `.env` files to Git
- Use app-specific passwords for email
- Keep SMTP credentials secure
- All sensitive data should be in environment variables

## 📝 Notes

- The `backend/` folder is for **local development only**
- In production, Vercel uses the serverless function in `api/send-email.js`
- The frontend automatically detects the environment and calls the correct API endpoint
- The old `server.js` in the root can be safely deleted

## 🐛 Troubleshooting

### Frontend not connecting to backend locally
- Make sure backend is running on port 5000
- Check CORS settings in `backend/server.js`

### Email not sending
- Verify environment variables are set correctly
- Check email credentials
- For Gmail, ensure you're using an App Password
- Check SMTP server and port settings

### 405 Error on Vercel
- Ensure environment variables are set in Vercel dashboard
- Check that `api/send-email.js` is using CommonJS syntax
- Verify `vercel.json` configuration

## 📄 License

Private - All rights reserved

## 👥 Team

Xogen - Revolutionizing business with cutting-edge AI solutions

