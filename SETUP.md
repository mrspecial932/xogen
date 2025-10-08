# Quick Setup Guide

## 🚀 5-Minute Setup

### 1. Install Dependencies

```bash
npm run install:all
```

This installs dependencies for both frontend and backend.

### 2. Configure Backend Email

Create a `.env` file in the `backend/` directory:

```bash
cd backend
```

Create `.env` file with the following content:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

### 3. Get Gmail App Password

1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification if not already enabled
3. Go to https://myaccount.google.com/apppasswords
4. Select "Mail" and generate a password
5. Copy the 16-character password
6. Use it as `EMAIL_PASS` in your `.env` file

### 4. Run the Application

```bash
cd ..  # Go back to root
npm run dev:all
```

This starts:
- Frontend on http://localhost:5173
- Backend on http://localhost:5000

### 5. Test the Application

1. Open http://localhost:5173 in your browser
2. Navigate to the Contact page
3. Fill out the form and submit
4. Check if the email is sent successfully

## 🌐 Production Deployment (Vercel)

### 1. Push to GitHub

```bash
git add .
git commit -m "Setup complete"
git push origin main
```

### 2. Deploy to Vercel

1. Go to https://vercel.com
2. Import your repository
3. Vercel will auto-detect the configuration

### 3. Add Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 4. Deploy

Click "Deploy" or push to main branch to trigger automatic deployment.

## ✅ Verification Checklist

- [ ] Dependencies installed for frontend
- [ ] Dependencies installed for backend
- [ ] `.env` file created in `backend/` directory
- [ ] Gmail App Password generated and added to `.env`
- [ ] Frontend runs on http://localhost:5173
- [ ] Backend runs on http://localhost:5000
- [ ] Contact form sends emails successfully
- [ ] Environment variables added in Vercel
- [ ] Production deployment successful

## 🆘 Common Issues

### Issue: "Cannot find module 'express'"
**Solution:** Run `cd backend && npm install`

### Issue: "EAUTH" or email authentication error
**Solution:** 
- Make sure you're using a Gmail App Password, not your regular password
- Verify the credentials in `.env` file
- Check if 2-Step Verification is enabled

### Issue: "Cannot connect to localhost:5000"
**Solution:** Make sure the backend server is running with `npm run dev:backend`

### Issue: 405 Error on Vercel
**Solution:**
- Check environment variables in Vercel dashboard
- Redeploy after adding environment variables
- Check Vercel function logs for errors

## 📚 Need More Help?

See the full [README.md](README.md) for detailed documentation.

