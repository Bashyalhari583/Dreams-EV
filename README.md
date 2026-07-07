# MiChe Auto Nepal — React + Node.js + MySQL

Premium electric and petrol bikes/scooters dealership website.

## Tech Stack

- **Frontend**: React 18, Tailwind CSS, React Router, Vite
- **Backend**: Node.js, Express, MySQL
- **AI Chat**: DeepInfra (Mistral-7B) — API key stays on server, never exposed to browser
- **Email**: Nodemailer (Gmail SMTP)
- **Security**: Helmet, CORS, rate limiting, input validation, HPP protection

## Project Structure

```
dreams-ev/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Navbar, Footer, ChatWidget, VehicleCard, SearchOverlay
│   │   ├── pages/          # Home, EV, Petrol, VehicleDetail, Dealers, News, About, Contact
│   │   ├── data/           # Vehicle & blog data
│   │   ├── App.jsx         # Routes
│   │   └── main.jsx        # Entry point
│   ├── tailwind.config.js
│   └── vite.config.js      # Proxies /api to backend in dev
├── server/                 # Node.js backend
│   ├── config/db.js        # MySQL connection pool + table init
│   ├── models/Lead.js      # Lead CRUD queries
│   ├── routes/contact.js   # POST /api/contact — validated, rate-limited, emails admin
│   ├── routes/chat.js      # POST /api/chat — calls DeepInfra securely
│   ├── middleware/security.js  # Rate limiters, sanitizer
│   └── server.js           # Express app with helmet, cors, hpp
├── .env.example            # Copy to .env and fill in your values
├── .gitignore
└── README.md
```

## Setup

### 1. MySQL Database

```sql
CREATE DATABASE miche_auto CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

The `leads` table is auto-created on server start.

### 2. Environment Variables

```bash
cp .env.example .env
```

Edit `.env` with your values:

```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=miche_auto
DB_USER=root
DB_PASSWORD=your_password

DEEPINFRA_API_KEY=your_deepinfra_key

MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password
ADMIN_EMAIL=admin@example.com

CORS_ORIGIN=http://localhost:5173
```

### 3. Install Dependencies

```bash
npm run setup
```

This runs `npm install` in root, server, and client.

### 4. Development

```bash
npm run dev
```

Opens frontend at `http://localhost:5173` and backend at `http://localhost:5000`.
Vite proxies `/api/*` requests to the backend automatically.

### 5. Production Build

```bash
npm run build        # Builds React into client/dist
npm start            # Runs Express serving the built frontend + API
```

Set `NODE_ENV=production` and `CORS_ORIGIN=https://yourdomain.com` in `.env`.

## API Endpoints

| Method | Endpoint       | Purpose                        | Rate Limit           |
|--------|----------------|--------------------------------|----------------------|
| POST   | /api/contact   | Submit lead inquiry            | 5 per 15 min per IP  |
| POST   | /api/chat      | AI chat (DeepInfra)            | 30 per 5 min per IP  |
| GET    | /api/health    | Health check                   | 100 per 15 min       |

## Security

- Helmet sets secure HTTP headers
- CORS restricted to your frontend origin
- Rate limiting on all API routes
- Input validation with express-validator
- Body size capped at 10KB
- HPP (HTTP Parameter Pollution) protection
- API keys only on server — never sent to browser
- All user inputs sanitized before DB insert

## n8n Integration (Optional)

If you want to route chat through your existing n8n webhook instead of calling DeepInfra directly, change the fetch URL in `server/routes/chat.js`:

```js
// Replace the DeepInfra fetch call with:
const response = await fetch("https://n8n.srv1704676.hstgr.cloud/webhook/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: userMessage, history: newHistory }),
});
```
