# Week 1 Capstone — React Daily Practice Lab

Beginner React project covering your teacher's Week 1 tasks:

- Todo App (add / edit / delete / complete / filter)
- Persist todos in **localStorage**
- Product Gallery with **Fake Store API**
- Loading / error / empty UI states
- Search by title + category filter
- Responsive layout (mobile + desktop)
- Clean folder structure

---

## Topics practiced

1. `useEffect` mental model  
2. Dependency array rules  
3. Cleanup functions  
4. Fetching data in React  
5. Loading / error / empty UI  
6. Syncing state with localStorage  
7. Component breakdown  
8. Search & filter UI  
9. Responsive layout  
10. README writing  

---

## Setup

### Requirements

- Node.js 18+ (recommended)
- npm

### Install & run

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

---

## Project structure

```
src/
  api/
    products.js          # clean fetch helpers (not inside components)
  components/
    TodoApp/             # todo feature
    ProductGallery/      # products feature
    ui/                  # LoadingSpinner, ErrorMessage, EmptyState
  hooks/
    useLocalStorage.js   # persist state across refresh
  App.jsx
  App.css
  index.css
  main.jsx
```

---

## Features checklist (teacher tasks)

| # | Task | Done |
|---|------|------|
| 1 | Persist Todo App in localStorage | ✅ |
| 2 | Fetch public API list (products) | ✅ |
| 3 | Loading spinner + error message | ✅ |
| 4 | Empty-state UI when no data | ✅ |
| 5 | Refactor fetch into clean function | ✅ `src/api/products.js` |
| 6 | Product Gallery (Fake Store API) | ✅ |
| 7 | Search by title | ✅ |
| 8 | Category filter | ✅ |
| 9 | Responsive layout | ✅ |
| 10 | README with setup steps | ✅ |
| 11 | Push to GitHub | ⬜ (you do this) |

---

## Screenshots

Add your own screenshots here after running the app:

1. Todo App tab (with filters)  
2. Product Gallery on desktop  
3. Product Gallery on mobile  

Example:

```md
![Todo App](./docs/todo.png)
![Product Gallery](./docs/gallery.png)
```

---

## API used

[Fake Store API](https://fakestoreapi.com/products)

---

## Push to GitHub (task 11)

```bash
git init
git add .
git commit -m "Week 1 capstone: todo + product gallery"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

Replace `YOUR_REPO_URL` with your GitHub repository URL.
