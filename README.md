# ecr (v0.1.0)

## Project Overview

This is a Next.js-based web application that includes features like:

- Stripe payment integration for secure transactions.
- Modern UI components built with Radix UI and Tailwind CSS.
- A scalable backend using Prisma ORM.

**Purpose:** This project serves as a foundation for an e-commerce or product management system. It allows users to interact with a product catalog, make purchases, and handle payments through Stripe.

## Getting Started

Follow the steps below to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v16 or later)
- npm (v7 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ecr
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory of your project and configure it with the following:
     ```env
        DATABASE_URL = "file:./dev.db"
        ADMIN_USERNAME = "admin"
        HASHED_ADMIN_PASSWORD = "1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w=="
        STRIPE_SECRET_KEY= "sk_test_51QLRZd2KksTdseXEfUTOd1VZC6WFuan8GVEw2n2jHXGUXo7j5TGlWTDmhLLNsyJO4FyARIIFNpu4CJyE1XtGxE2I00mpqEMCKy"
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY= "pk_test_51QLRZd2KksTdseXEUn7Settk8CPTbQXKGF6p42DGpYnyjthcOGzwpPoiqP302vvYrBWzUXo3BEhCGt2mJL8BgkVV00eQijwNkH"
        NEXT_PUBLIC_SERVER_URL = "http://localhost:3000"
        STRIPE_WEBHOOK_SECRET = "whsec_8991fb4213ef92bd24d271fac16b4fc899dc178a60bd29fdd0f84eb93b34bf47"
     ```
   - **Note:** The Stripe-related keys (`NEXT_PUBLIC_STRIPE_PUBLIC_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`) included above are examples and may have expired. You must generate your own keys from your Stripe account. Refer to the [Stripe Documentation](https://stripe.com/docs/keys) for more details.

4. Generate Prisma client (if using Prisma):
   ```bash
   npx prisma generate
   ```

### Running the Project

To start the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

### Admin Panel Access

The application includes an admin panel. The default credentials for accessing the admin panel are:

- **Username:** `admin`
- **Password:** `1234`

These credentials are stored in the database in a hashed format. You can update them after logging in.

### Stripe Webhook Setup

To enable Stripe's webhook functionality, you'll need the Stripe CLI:

1. Install the Stripe CLI by following the instructions [here](https://stripe.com/docs/stripe-cli).

2. Run the following command to listen for Stripe events and forward them to your local application:
   ```bash
   stripe listen --forward-to localhost:3000/webhooks/stripe
   ```
   - This command listens for events from Stripe and forwards them to your local webhook handler.
   - Make sure your application is running at `localhost:3000`.

## Scripts

The following npm scripts are available:

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the project for production.
- **`npm run start`**: Start the production server.
- **`npm run lint`**: Lint your codebase.

## Dependencies

The project uses the following key dependencies:

- **Next.js**: React framework for building web applications.
- **Stripe.js**: Stripe integration library.
- **Prisma**: ORM for database management.
- **Tailwind CSS**: Utility-first CSS framework.
- **Radix UI**: Accessible UI components.

---

For more information, refer to the official documentation of the tools used in this project.
