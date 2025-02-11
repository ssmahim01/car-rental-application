<div align="center">
  <img width="100%" height="370" src="/public/car-house.png" />
</div>

---

# 🚗 Car House (Car Rental Application)

**A user-friendly platform that allows customers to book rental cars efficiently while enabling businesses to manage their operations seamlessly.**

---

## 📌 Purpose

The main objective of this project is to provide a smooth and **hassle-free car rental experience** for users while offering businesses **better management and insights** into their operations.

---

## ✨ Core Features

### **For Users (Customers)**
- **🚘 Convenience:** Browse and book cars from an available catalog.
- **🔍 Transparent Pricing:** View daily rental prices and total costs.
- **📅 Booking Management:** Modify booking dates if needed.
- **📊 Data Insights:** Visual aids like bar charts and line charts help analyze pricing trends.

### **For Admin/Business**
- **📦 Efficient Car Inventory Management:** Track car availability and prevent overbooking.
- **📈 Data Analytics:** Get insights into pricing trends and user preferences.
- **❌ Error Prevention:** Prevents users from booking the same car twice.
- **🤝 Customer Retention:** Clear information and flexibility improve user experience.

---

## 🛠 Used Main Technologies

| Technology | Purpose |
|------------|---------|
| **Tailwind CSS** | CSS Framework |
| **Daisy UI** | Tailwind Component Library |
| **React** | JavaScript Library |
| **Firebase** | Authentication |

---

## 🔑 Key Features

### 🔐 **Authentication**
- Secure register & login using **email and password**.
- Google login integration for **quick authentication**.

### 🚗 **Car Browsing and Booking**
- Browse cars with images, models, and rental prices.
- Only **logged-in users** can book cars.

### 📅 **Booking Management**
- View **current and past bookings**.
- Modify booking dates or cancel any booking.

### 💰 **Transparent Pricing**
- Clearly displays **daily rental prices** and **total booking costs**.

---

## 📦 Used Dependencies

```json
"dependencies": {
    "@tanstack/react-query": "^5.62.9",
    "axios": "^1.7.9",
    "date-fns": "^4.1.0",
    "firebase": "^11.1.0",
    "framer-motion": "^11.15.0",
    "localforage": "^1.10.0",
    "match-sorter": "^8.0.0",
    "motion": "^11.15.0",
    "react": "^18.3.1",
    "react-datepicker": "^7.5.0",
    "react-dom": "^18.3.1",
    "react-dropzone": "^14.3.5",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.0",
    "recharts": "^2.15.0",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.15.3"
}
```

---

## ⚙️ Setup & Installation

### ✅ **Clone The Repository**
```sh
git clone https://github.com/ssmahim01/car-rental-application.git
cd car-rental-application
```

### 📥 **Install Dependencies**
```sh
npm install
```

### 🔑 **Set Up Environment Variables**
1. Create a **`.env.local`** file in the root directory.
2. Add the required **API keys and URLs**:
```sh
VITE_apiKey=Your_firebase_apiKey
VITE_authDomain=Your_firebase_authDomain
VITE_projectId=Your_firebase_projectId
VITE_storageBucket=Your_firebase_storageBucket
VITE_messagingSenderId=Your_firebase_messagingSenderId
VITE_appId=Your_firebase_appId
VITE_UNIQUE_URL=Your_serverURL
```

### 🚀 **Run The Application**
```sh
npm run dev
```

---

## 🌍 Live Demo

- **🔗 Live Project:** [Car House (Car Rental)](https://car-rental-client.web.app)

---

## 🔗 Server Repository

- **[Car Rental Application Server](https://github.com/ssmahim01/car-rental-application-server)**

---

## 📚 Used npm Packages

| Package | Documentation |
|---------|--------------|
| **axios** | [Docs](https://axios-http.com/docs/intro) |
| **date-fns** | [Docs](https://date-fns.org) |
| **motion** | [Docs](https://motion.dev) |
| **react-datepicker** | [Docs](https://reactdatepicker.com) |
| **react-icons** | [Docs](https://react-icons.github.io/react-icons) |
| **sweetalert2** | [Docs](https://sweetalert2.github.io) |
| **recharts** | [Docs](https://recharts.org/en-US) |

---

## 🔧 Vite + React Setup

This project is set up using **Vite** for fast development.

Official plugins:
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)** - Uses Babel for Fast Refresh.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)** - Uses SWC for Fast Refresh.