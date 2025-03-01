# G SCORES

---

## ⚡ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Hanlelele/g_scores.git
```

---

### 2️⃣ Backend Setup

#### 📌 Environment Variables

Create a `.env` file in the `backend` directory and add the following:

```env
PORT=8000
MONGO_URL=your_mongodb_connection_string
```

If you want to use my MongoDB connection URL:

To connect to the MongoDB database, use the following connection string:

```
mongodb+srv://<username>:<password>@cluster0.7wnib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

## Credentials

Replace `<username>` and `<password>` with the following credentials:

- **Username:** `hanle12311`
- **Password:** `08052003`

If you need to import initial data from a CSV file, make sure to uncomment the following line in the backend code:

```js
importData();
```

#### 🚀 Start the Backend

```bash
cd backend
npm install
npm start
```

The backend will run at `http://localhost:8000`

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be accessible at: `http://localhost:5173`

---

## 🌍 Deployment Links

- **Frontend:** [Live Demo](https://gscoregoldenowl.netlify.app)
- **Backend:** [API Endpoint](https://g-scores-ljaw.onrender.com)

---
