# Nisa Portfolio – Backend

Node.js + Express API.

## Kurulum

```bash
cd backend
npm install
cp .env.example .env
# .env içine GEMINI_API_KEY ekle (NisaBot için)
```

## Çalıştırma

```bash
npm run dev
```

API: http://localhost:3001

- `POST /api/contact` – İletişim formu (body: name, email, message)
- `POST /api/chat` – NisaBot (body: message, lang?, history?)
- `GET /api/health` – Sağlık kontrolü
