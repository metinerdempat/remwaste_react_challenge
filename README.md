# Remwaste React Challenge

## About the Project

I started the project with Vite and React Router, and used Tailwind CSS for styling. I chose not to use any component library or advanced router/data frameworks because I wanted to focus on building the page myself instead of relying too much on external libraries.

I paid attention to the folder structure to make the project easy to scale and maintain. For code formatting and linting, I used Prettier and ESLint to keep the code clean and readable.

The steps are simulated using navigation from the homepage. I used localStorage to pretend that the user already completed the previous steps. For global state, I used Zustand with persist support.

Since the API you provided didn't include images, I extracted real skip images from your original website and manually added them to the data (merged them with the API data) instead of using random placeholder images.

I also added a sorting feature to the skip selection page.

## To improve the developer experience:

- I used absolute imports to avoid long relative paths.
- I Dockerized the project, but didn't add Docker Compose since it's a single-app project.
- The `.env.example` file includes `VITE_API_URL` with the given API base.

## Tech Stack

- React
- React Router
- Vite
- Tailwind CSS(with @tailwindcss/vite plugin)
- Zustand (state management)
- React Query (TanStack) (server state management)
- Axios (HTTP client)
- React Use (useful React hooks)
- TypeScript
- ESLint + Prettier (linting & formatting)
- vite-tsconfig-paths (for absolute imports)

## Try the App

Live preview: 👉 [https://remwaste-react-challange.vercel.app](https://remwaste-react-challange.vercel.app)

### Run locally with Docker:

```bash
docker build -t remwaste .
docker run -p 5173:5173 remwaste
```

### Or run with pnpm:

```bash
pnpm install
pnpm dev
```

App will be available at `http://localhost:5173`

Thanks for reviewing!
