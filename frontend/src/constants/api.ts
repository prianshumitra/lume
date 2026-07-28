// Why?
//
// Instead of writing:
//
// import.meta.env.VITE_API_URL
//
// everywhere, we'll simply write:
//
// API_URL
//
// This gives us one central place for the backend URL.

export const API_URL = import.meta.env.VITE_API_URL;