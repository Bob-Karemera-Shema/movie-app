# Movie Explorer App

A modern, responsive web application built with **React**, **TypeScript**, **Redux Toolkit**, and **MUI** to explore popular movies using The Movie Database (TMDB) API. The app displays movie details, allows search and pagination, and showcases clean UI and state management best practices.

---

## Features

- Search Popular Movies by title
- View Movie Details
- Client-Side Routing with React Router
- State Management using Redux Toolkit
- Pagination through TMDB results
- Modular folder structure and reusable components

---

## Tech Stack

| Tech               | Description                                |
|--------------------|--------------------------------------------|
| React + Vite       | Fast front-end framework and tooling       |
| TypeScript         | Static typing for safer development        |
| Redux Toolkit      | Simplified and scalable global state       |
| React Router DOM   | Client-side navigation                     |
| Material UI (MUI)  | UI components and styling                  |
| TMDB API           | Fetch movie data and metadata              |

---

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/bob-karemera/movie-app.git
cd movie-explorer-app
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variables

Create a `.env` file in the root directory:

```bash
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

> Sign up and get your API key from [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)

### 4. Run the App Locally

```bash
npm run dev
```

The app will be available at: [http://localhost:5173](http://localhost:5173)

---

## Folder Structure

```
src/
├── api/               # API functions (TMDB)
│   └── tmdb.ts
├── components/        # Reusable UI components
│   └── MovieCard.tsx
├── pages/             # Pages for routing
│   ├── MovieList.tsx
│   └── MovieDetail.tsx
├── store/             # Redux store setup
│   ├── index.ts
│   └── moviesSlice.ts
├── types/             # TypeScript interfaces
│   └── Movie.ts
├── App.tsx            # Main app with routes
└── main.tsx           # Entry point
```

---

## API Reference

### Get Popular Movies

```ts
GET /movie/popular
Params: 
  - api_key
  - page
```

Example:

```ts
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=API_KEY&page=1`)
```

### Get Movie Details

```ts
GET /movie/{movie_id}
Params:
  - api_key
```

---

## Testing

This starter does not yet include unit tests. You can integrate:

* **Jest** and **React Testing Library** for component/unit tests
* **Mock Service Worker (MSW)** to mock TMDB API responses

---

## Contribution

Want to contribute?

1. Fork this repo
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature`
5. Create a pull request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---