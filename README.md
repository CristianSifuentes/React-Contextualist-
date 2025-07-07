
# React 19 Context Todo • Engineer Edition

> **Goal:** Not just run a demo—**master** Context, hooks, and clean architecture from first principles all the way to expert‑level patterns.  
> By the end you’ll know *why* every folder exists and *how* to scale it in production.
> A minimal, **type‑safe** Todo app that demonstrates React 19’s Context API, a reducer‑based Provider, and zero prop‑drilling.

---

## Table of Contents
1. [Quick Start](#quick-start)
2. [Scripts](#scripts)
3. [Project Structure](#project-structure)
4. [Architecture Deep‑Dive](#architecture-deep-dive)
5. [Step‑by‑Step Guide](#step-by-step-guide)
   * [Beginner](#beginner-track)
   * [Intermediate](#intermediate-track)
   * [Advanced](#advanced-track)
   * [Expert](#expert-track)
6. [Scripts & Tooling](#scripts--tooling)
7. [Performance Tips](#performance-tips)
8. [FAQ](#faq)
9. [Contributing](#contributing)
10. [Credits & Further Reading](#credits--further-reading)
11. [Highlights](#highlights)

---

## Quick Start

```bash
pnpm install     # Or yarn / npm
pnpm dev         # 👉 http://localhost:5173
```

Production build:

```bash
pnpm build
pnpm preview     # Serves /dist for a sanity check
```

---

<!-- ## Getting Started

```bash
pnpm install   # or npm install / yarn
pnpm dev       # starts Vite dev server
```

Open `http://localhost:5173` in your browser. -->

## Scripts

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Launch dev server (Vite) |
| `pnpm build` | Production build into `dist/` |
| `pnpm preview` | Preview built bundle |


---


## Project Structure

```
react19-context-todo/
│
├─ src/
│  ├─ context/          # Global state (Context + Provider + custom hook)
│  │   ├─ TodoContext.tsx
│  │   ├─ TodoProvider.tsx
│  │   └─ useTodo.ts
│  ├─ components/       # Dumb, focused UI pieces
│  │   ├─ AddTodo.tsx
│  │   ├─ TodoItem.tsx
│  │   └─ TodoList.tsx
│  ├─ App.tsx           # App shell / composition root
│  ├─ main.tsx          # ReactDOM.render / hydration
│  └─ styles.css        # Tiny util classes (replace w/ Tailwind if you like)
├─ public/ (optional)   # Static assets
├─ package.json
├─ vite.config.ts
└─ README.md            # ← you are here
```

> **Why flat + feature folders?** Small demo = fewer folders; larger apps can sub‑divide by domain (e.g. `todos/`, `auth/`, `dashboard/`).

---

## Architecture Deep‑Dive

| Layer | Purpose | Technologies |
|-------|---------|--------------|
| **Context** | Global state, pure reducer, broadcast via Provider | `createContext`, `useReducer`, TypeScript generics |
| **UI** | Presentational components, memoized | Function components + `memo` |
| **Hooks** | Encapsulate state logic, prevent misuse | Custom `useTodo` |
| **Utilities** | Non‑React helpers | `nanoid` for IDs |

Classic **Clean Architecture** distilled for a tiny SPA.

---

## Step‑by‑Step Guide

### Beginner Track
> **Focus:** React fundamentals

1. Fork and clone the repo.  
2. Open `src/components/AddTodo.tsx` – observe `useState` & `onChange`.  
3. Insert `console.log(text)` in `handleSubmit` to trace state.

**Concepts Covered**
* JSX
* Local component state
* Synthetic events

---

### Intermediate Track
> **Focus:** Context + Reducer

1. Add a new action to `TodoAction`:

   ```ts
   | { type: 'clear-completed' }
   ```

2. Extend `todoReducer` to filter out completed todos.  
3. Place a **Clear Completed** button in `App.tsx` that dispatches it.

**Concepts Covered**
* Discriminated union types
* Pure functions & immutability
* React DevTools Context inspection

---

### Advanced Track
> **Focus:** Persistence & Testing

1. Persist state to `localStorage` via `useEffect`.  
2. Lazy‑hydrate initial state with the third param of `useReducer`.  
3. Add unit tests using **Vitest** or **React Testing Library**.

**Concepts Covered**
* Side‑effects lifecycle
* Lazy initializer pattern
* Test‑driven Context logic

---

### Expert Track
> **Focus:** Modern React R&D

1. **Migrate to Server Components**  
   * Keep `TodoProvider` client‑side; fetch data on the server.
2. **Add Suspense + `useOptimistic`** for instant UI feedback.  
3. Profile bundle with **Source Map Explorer** & optimize code‑split points.

**Concepts Covered**
* React 19 Server/Client boundary
* Optimistic UI updates
* Perf budgeting (FCP, TBT)

---

## Scripts & Tooling

| Command | Description |
|---------|-------------|
| `pnpm dev` | Hot‑reload dev server (Vite) |
| `pnpm build` | Production bundle → `/dist` |
| `pnpm preview` | Serves built bundle locally |
| `pnpm lint` | _(Add ESLint/Prettier)_ |
| `pnpm test` | _(Add Vitest)_ |

---

## Performance Tips

* **Memoize** `TodoItem` – avoids list re‑renders.
* **Stable Provider value** – spread state rather than new objects.
* **Automatic batching** – React 19 groups state updates.
* **Lazy load** heavy routes with `React.lazy()` when scaling.

---

## FAQ

| Question | Answer |
|----------|--------|
| Why no Redux? | Context + reducer suffices; swap later if state fan‑out grows. |
| Vite vs CRA? | Instant HMR, native ESM, less config. |
| Tailwind support? | Just add `tailwindcss` & import its CSS. |

---

## Contributing

1. **Fork** → feature branch.  
2. `pnpm lint && pnpm test`.  
3. PR with a concise description and **why** it helps.

Follows [Conventional Commits](https://www.conventionalcommits.org).

---

## Credits & Further Reading

* [React Docs – Context](https://react.dev/learn/passing-data-deeply-with-context)
* [React 19 RFC – Batching](https://github.com/reactjs/rfcs/pull/219)
* [Kent C. Dodds – `useReducer`](https://kentcdodds.com/blog/how-to-useuseReducer-properly)
* Header art by DALL‑E.

---


## Highlights

* **`createContext` + `useReducer`** for predictable state
* **TypeScript 5.5** generics remove runtime casts
* **React 19 automatic batching** keeps UI smooth
* `nanoid` for tiny unique IDs

Enjoy hacking! ✨


> Built with ❤️ & a passion for clean, scalable state‑management.  
> **Happy hacking!** ✨


