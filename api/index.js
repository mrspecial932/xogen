// Vercel serverless wrapper for Express server
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create nodemailer transporter with custom SMTP settings
const getTransporterConfig = () => {
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  
  // Port 465 requires SSL (secure: true)
  // Port 587 requires TLS (secure: false)
  const isSSL = smtpPort === 465;
  
  return {
    host: smtpHost,
    port: smtpPort,
    secure: isSSL, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false // Accept self-signed certificates
    },
    debug: true, // Enable debug output
    logger: true // Log to console
  };
};

const transporter = nodemailer.createTransporter(getTransporterConfig());

// Log configuration (without password)
console.log('Email Configuration:');
console.log('- Host:', process.env.SMTP_HOST || 'smtp.gmail.com');
console.log('- Port:', process.env.SMTP_PORT || '587');
console.log('- User:', process.env.EMAIL_USER);
console.log('- SSL/TLS:', parseInt(process.env.SMTP_PORT || '587') === 465 ? 'SSL' : 'TLS');

// Test email configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('Email configuration error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, service, comment } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !comment) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hr@xogen.ai',
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f22b0a; border-bottom: 2px solid #f22b0a; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service Type:</strong> ${service || 'Service enquiry'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message</h3>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #f22b0a;">
              ${comment}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the Xogen contact form.</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Service Type: ${service || 'Service enquiry'}
        
        Message:
        ${comment}
      `,
      replyTo: email, // Allow replying directly to the customer
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!',
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode
    });
    
    // Provide specific error messages based on error type
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your email credentials.';
    } else if (error.code === 'ESOCKET') {
      errorMessage = 'Cannot connect to email server. Please check your SMTP settings.';
    } else if (error.responseCode === 535) {
      errorMessage = 'Invalid email or password. Please verify your credentials.';
    }
    
    res.status(500).json({ 
      success: false, 
      message: errorMessage,
      error: error.message,
      code: error.code
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Export the Express app for Vercel
module.exports = app;
