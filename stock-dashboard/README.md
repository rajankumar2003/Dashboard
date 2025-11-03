# Stock Dashboard Web Application

A fullstack web application for live stock monitoring, built with **Spring Boot** (Java) and **React**.  
Supports JWT authentication, real-time updates via WebSocket/STOMP, and user-specific stock subscriptions.

---

## Features

- User Login and Registration (JWT Auth)
- Real-time stock prices (WebSocket, STOMP)
- Subscribe/unsubscribe to specific stocks
- Material UI (MUI) based responsive UI
- Protected profile and dashboard pages
- Modern SPA navigation (React Router)

---

## Technologies Used

- **Frontend**: React, React Router, Material UI
- **Backend**: Spring Boot (Java), Spring Security (JWT), WebSocket/STOMP messaging
- **Communication**: JSON REST + WebSocket (no SockJS fallback for clean modern support)

---

## Getting Started

### Clone this repo
git clone https://github.com/rajankumar2003/Stock-Dashboard.git
cd Stock_Dashboard


---

### Backend Setup

1. **Move to backend directory (or root if mono-repo):**
2. Build with Maven/Gradle:
    ```
    ./mvnw spring-boot:run
    ```
    or
    ```
    ./gradlew bootRun
    ```
3. The backend will start at [http://localhost:8080](http://localhost:8080) by default.

#### Note:
- Make sure to set up any required DB config (if not using in-memory/demo data).
- JWT signing secret/config is set in `application.properties`.

---

### Frontend Setup

1. Move to frontend directory:
    ```
    cd frontend
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Start the React server:
    ```
    npm start
    ```
4. This will run the frontend on [http://localhost:3000](http://localhost:3000) by default.

---

## Usage

- Register a new account or login with existing credentials.
- View the live stock dashboard, subscribe/unsubscribe to different stocks.
- Visit the Profile page to see your email and logout.

---

## Directory Structure

project-root/
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── dashboard/
│   │   │   │       ├── StockService.java
│   │   │   │       ├── WebSocketConfig.java
│   │   │   │       ├── JwtHandshakeInterceptor.java
│   │   │   │       ├── models/    # (e.g. StockPrice.java, User.java ...)
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── static/        
│   ├── pom.xml
│   └── ... (other Spring Boot config)
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Protected.js
│   │   │   ├── StockCard.js
│   │   │   └── ... (reusable UI pieces)
│   │   ├── contexts/
│   │   │   └── AuthContext.js
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── Profile.js
│   │   │   └── Login.js
│   │   ├── services/
│   │   │   └── socketService.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── Login.css            
│   ├── package.json
│   └── ... (configuration: .env, README.md, etc.)
│
├── README.md
└── LICENSE



---

## Customization

- **Add more stocks**: Edit the supported symbols array in both backend and frontend.
- **Styling**: Tweak components with MUI `sx` or CSS.
- **Authentication**: JWT handling, AuthContext, and backend security config.

---

## Contributing

PRs welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)

---

## Acknowledgements

- [Spring Boot](https://spring.io/projects/spring-boot)
- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)

