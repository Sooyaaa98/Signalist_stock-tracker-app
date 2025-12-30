📈 Signalist — Intelligent Stock Tracking & Alerts Platform

Signalist is a modern, full-stack stock market tracking application designed to help users discover stocks, monitor
watchlists, and stay informed through real-time market data and alerts. Built with performance, scalability, and clean
UX in mind, Signalist combines server-side rendering, secure authentication, and live financial data into a seamless
experience.

🚀 Features
🔍 Stock Discovery & Search

Powerful stock search with instant results

Command-style search interface for fast navigation

View real-time prices and daily changes

⭐ Watchlist (Wishlist)

Add and manage stocks in a personalized watchlist

Securely stored per user

Displays:

Current price

Daily change (absolute & percentage)

Market capitalization

P/E ratio

Protected routes ensure privacy

🔔 Price Alerts

Create price-based alerts for tracked stocks

Clean alert panel UI

Designed for future extensibility (email / push notifications)

🔐 Authentication & Security

Fully authenticated user flow

Session-based access control

Watchlist and alerts available only to logged-in users

⚡ Performance & UX

Server-side rendering for faster load times

Responsive design (desktop & mobile)

Minimal, clean UI with dark-mode styling

🛠️ Tech Stack
Frontend

Next.js (App Router) — Server-side rendering & routing

React — Component-based UI

TypeScript — Type safety and maintainability

Tailwind CSS — Utility-first styling

Lucide Icons — Clean, modern icons

Backend & Services

Finnhub API — Real-time stock market data

Better Auth — Authentication & session management

Server Actions — Secure data fetching & mutations

Tooling

Git & GitHub — Version control

ESLint / Prettier — Code quality & formatting

📂 Project Structure
app/
├─ layout.tsx # Root layout
├─ page.tsx # Home page
├─ search/ # Stock search
├─ watchlist/ # User watchlist (protected)
├─ sign-in/ # Authentication
components/
├─ ui/ # Reusable UI components
├─ NavItems.tsx # Navigation items
├─ SearchCommand.tsx # Search interface
lib/
├─ actions/ # Server actions
├─ auth/ # Authentication logic
├─ constants.ts # Navigation & config constants

🔐 Environment Variables

Create a .env.local file in the root directory and add:

FINNHUB_API_KEY=your_finnhub_api_key
NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key

⚠️ Never commit .env.local to GitHub.

🧑‍💻 Getting Started
1️⃣ Clone the repository
git clone https://github.com/Sooyaaa98/Signalist_stock-tracker-app
cd signalist

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

Open 👉 http://localhost:3000

🔒 Route Protection

Public:

Home

Search

Protected:

Watchlist

Alerts

Unauthorized users are automatically redirected to the Sign In page.

🧠 Design Philosophy

Signalist is built with the belief that:

Data should be fast and accessible

UI should stay out of the way

Auth and security should be invisible but strict

Code should be readable, scalable, and production-ready

Every feature is designed to be easily extensible for future additions such as:

Email / push notifications

Portfolio tracking

Advanced analytics

News integration

🧪 Known Considerations

Finnhub API has rate limits — caching is used where possible

Market data may occasionally return null values (handled gracefully in UI)

Browser extensions like Grammarly may cause hydration warnings in development (safe to ignore)

🛣️ Roadmap

🔔 Persistent alert scheduling

📊 Advanced stock analytics

📱 Mobile-first optimizations

📩 Notification delivery (email / push)

💾 Portfolio & investment tracking

🤝 Contributing

Contributions are welcome!

Fork the repo

Create a new branch

Commit your changes

Open a pull request

🙌 Acknowledgements

Finnhub for providing reliable market data

Open-source community for tools and libraries

Inspiration from real-world trading platforms

⭐ If you like this project, consider starring the repository!
