Here's your updated README with **pnpm** instead of **npm** and other improvements:  

- **Uses `pnpm` for package management**  
- **Enhances contribution guidelines**  
- **Adds deployment instructions**  
- **Improves the features list with future roadmap items**  

---

## E-Commerce Platform (Monorepo)

Welcome to the **E-Commerce Platform**! This project is a full-stack e-commerce solution built as a **monorepo**, using modern tools and technologies to provide a seamless shopping experience. The repository is structured with separate packages for the **backend** and **client** (frontend), managed using **Lerna** and **Nx** for efficient development and scalability.

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Monorepo Structure](#monorepo-structure)  
3. [Technologies Used](#technologies-used)  
4. [Installation](#installation)  
5. [Running the Application](#running-the-application)  
6. [Scripts and Commands](#scripts-and-commands)  
7. [Features](#features)  
8. [Deployment](#deployment)  
9. [Contributing](#contributing)  
10. [License](#license)  
11. [Contact](#contact)  

---

## Project Overview

This e-commerce platform consists of two main components:  
1. **Backend**: A Node.js and Express.js application that handles API requests, database interactions, authentication, and more.  
2. **Client**: A Next.js-based frontend application that provides a responsive and interactive user interface.  

The monorepo setup allows for **shared dependencies**, **streamlined development**, and **easier collaboration**.

---

## Monorepo Structure

```
root/
├── packages/
│   ├── backend/          # Backend application (Node.js + Express.js)
│   └── client/           # Frontend application (Next.js)
├── package.json          # Root package.json for monorepo
├── pnpm-workspace.yaml   # pnpm workspace configuration
├── lerna.json            # Lerna configuration
└── README.md             # This file
```

---

## Technologies Used

### Backend
- **Runtime**: Node.js  
- **Framework**: Express.js  
- **Database**: MongoDB (Mongoose ODM)  
- **Authentication**: JSON Web Tokens (JWT), bcryptjs  
- **File Uploads**: Multer, Cloudinary  
- **Security**: Helmet, HPP, Express Mongo Sanitize, XSS-Clean, Express Rate Limit  
- **Email**: Nodemailer  
- **Image Processing**: Sharp  

### Frontend
- **Framework**: Next.js (React 18)  
- **UI Libraries**: Material-UI (MUI), NextUI  
- **Animations**: GSAP, Framer Motion  
- **State Management**: React Query (TanStack Query)  
- **Styling**: Emotion, TailwindCSS  
- **Storybook**: For component documentation and testing  

### Monorepo Management
- **pnpm**: Fast and efficient package manager  
- **Lerna**: For managing packages and dependencies  
- **Nx**: For advanced monorepo tooling  
- **Concurrently**: For running multiple commands simultaneously  

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Eyadfezex/e-commerce.git
   cd e-commerce
   ```

2. **Install Dependencies with `pnpm`**:
   ```bash
   pnpm install
   ```

3. **Bootstrap the Monorepo**:
   ```bash
   pnpm run bootstrap
   ```

4. **Set Up Environment Variables**:  

   - **For the backend (`packages/backend/.env`)**:  
     ```
     PORT=3001
     MONGODB_URI=mongodb://localhost:27017/ecommerce
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     EMAIL_USER=your_email_user
     EMAIL_PASSWORD=your_email_password
     ```

   - **For the client (`packages/client/.env.local`)**:  
     ```
     NEXT_PUBLIC_API_URL=http://localhost:3001
     ```

---

## Running the Application

### Start the Backend
```bash
pnpm --filter backend start
```
Backend server will run at `http://localhost:3001`.

### Start the Client
```bash
pnpm --filter client dev
```
Frontend application will run at `http://localhost:3000`.

### Start Both Backend and Client
```bash
pnpm run dev
```
This runs both services concurrently.

---

## Scripts and Commands

### Root Monorepo Scripts
| Script               | Description                                                      |
|----------------------|------------------------------------------------------------------|
| `pnpm run dev`      | Runs both backend and client in development mode concurrently.  |
| `pnpm run dev_server` | Starts the backend server.                                      |
| `pnpm run dev_client` | Starts the client (frontend).                                   |
| `pnpm run build`    | Builds the client for production.                               |
| `pnpm run start`    | Starts the client in production mode.                           |
| `pnpm run story`    | Launches Storybook for the frontend.                           |

---

## Features

### Backend
✅ User authentication (JWT)  
✅ Product management (CRUD operations)  
✅ File uploads (Cloudinary + Multer)  
✅ Email notifications (Nodemailer)  
✅ Security middleware (rate limiting, CORS, sanitization, XSS protection)  

### Frontend
✅ Responsive and interactive UI  
✅ Product browsing, search, and filtering  
✅ Shopping cart and checkout functionality  
✅ Animations and transitions (GSAP, Framer Motion)  
✅ Storybook for component documentation  

### Future Roadmap 🚀
🔜 Admin Dashboard for managing products and users  
🔜 Payment Gateway Integration (Stripe/PayPal)  
🔜 Wishlist and Order History  
🔜 Progressive Web App (PWA) support  

---

## Deployment

### Deploy Backend (Vercel or Railway)
1. Push your backend code to GitHub.  
2. Deploy on **Railway.app** or **Vercel Functions**.  
3. Set up your **MongoDB Atlas** database.  

### Deploy Frontend (Vercel)
1. Push your frontend code to GitHub.  
2. Deploy on **Vercel**.  
3. Add your `.env.local` variables in Vercel settings.  

---

## Contributing

We welcome contributions! If you'd like to contribute:  

1. **Fork the repository**  
2. **Create a new branch** (`feature/your-feature`)  
3. **Commit your changes**  
4. **Push to your branch**  
5. **Open a Pull Request (PR)**  

For more details, check [CONTRIBUTING.md](CONTRIBUTING.md) (Coming Soon).

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Contact

📧 **Email**: [Eyad__Ahmed@outlook.com](mailto:Eyad__Ahmed@outlook.com)  
🔗 **GitHub**: [Eyadfezex](https://github.com/Eyadfezex)  
💼 **LinkedIn**: [Eyad Ahmed](https://www.linkedin.com/in/eyadahmed/)  

---

Thank you for checking out the **E-Commerce Platform**! Happy coding! 🚀🔥  

---

Let me know if you need further refinements! 🚀
