# Todo-List

A simple, clean Todo List web app for creating, managing, and organizing tasks. Designed for local development (runs at `http://localhost:3000/Todo-List`) and built with modern frontend tooling.

---

## Demo

Run locally and open: `http://localhost:3000/Todo-List`

---

## Key Features

* **Add tasks** — Create new todo items with a title and optional description.
* **Edit tasks** — Update task title, description, due date, or priority.
* **Delete tasks** — Remove unwanted tasks with a single click.
* **Mark complete / incomplete** — Toggle tasks between done and not done.
* **Filtering** — View `All`, `Active`, or `Completed` tasks.
* **Search** — Quick search through tasks by keywords in title/description.
* **Sorting** — Sort tasks by creation date, due date, or priority.
* **Due dates & reminders** — Assign due dates and visually highlight overdue tasks.
* **Persistent storage** — Tasks persist between sessions using localStorage (or backend API if configured).
* **Responsive UI** — Works on desktop and mobile screens.
* **Keyboard-friendly interactions** — Add/submit tasks using Enter and navigate efficiently.

> *Note*: If your app supports extra features (subtasks, tags, drag-and-drop, user auth, sync with cloud), let me know and I’ll add them to this README.

---

## Installation (local dev)

1. Clone the repo:

```bash
git clone <repo-url>
cd <repo-folder>
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

4. Open the app at: `http://localhost:3000/Todo-List`

---

## Usage

* Click **Add Task** or use the input field to create a new task.
* Click a task to open the edit view or use inline edit if available.
* Use the checkmark to mark tasks as complete.
* Use filter buttons at the top to switch between All / Active / Completed.
* Use the search box to find tasks by text.
* Sort using the sort control (if present) to reorder tasks by date or priority.

---

## Configuration

* `localStorage` key: `todo-list` (change in config if needed).
* To enable a backend API instead of localStorage, update the API base URL in `src/config` (or similar) and provide endpoints for CRUD operations.

---

## Tech Stack (example)

* React (or React + TypeScript)
* Vite / Create React App
* CSS / Tailwind / Sass
* LocalStorage or REST API

(Adjust this section to match your actual stack.)

---

## Folder Structure (suggested)

```
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   └── index.jsx
├── package.json
└── README.md
```

---

## Tests

* Run unit tests:

```bash
npm test
# or
yarn test
```

(If tests are not yet configured, add test cases for components and reducers/helpers.)

---

## Deployment

* Build for production:

```bash
npm run build
# or
yarn build
```

* Serve the `build/` folder with any static host (Netlify, Vercel, GitHub Pages) or configure backend to serve static files.

---

## Contributing

1. Fork the repository
2. Create a feature branch `git checkout -b feat/your-feature`
3. Commit your changes `git commit -m "feat: add ..."`
4. Push and open a PR

Please follow the existing code style and add tests for new features.

---

## License

This project is available under the MIT License. Update this section if you use a different license.

---

## Contact

For questions or issues, open an issue on the repository or reach out to the maintainer.
