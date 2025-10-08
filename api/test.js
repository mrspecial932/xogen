// Simple test function to verify Vercel serverless functions work
module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle both GET and POST
  if (req.method === 'GET' || req.method === 'POST') {
    return res.status(200).json({
      success: true,
      message: 'Test function is working!',
      method: req.method,
      timestamp: new Date().toISOString()
    });
  }

  // Method not allowed
  res.setHeader('Allow', ['GET', 'POST', 'OPTIONS']);
  return res.status(405).json({
    success: false,
    message: `Method ${req.method} not allowed`
  });
};
