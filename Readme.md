# 📚 Course-Planner-Advanced

A modern and responsive course management app built with **React**, **React Router**, and **Tailwind CSS**.
This project helps students stay organized by tracking courses, teachers, and tasks in an aesthetic and easy-to-use interface.

---

## 🚀 Features

* **Landing Page** – A clean homepage with a welcoming design.
* **Courses Page** – Browse all courses with search and filters.
* **Course Details** – View course info, units, schedule, and tasks.
* **Tasks Management** – See tasks per course with due dates, details, and grading criteria.
* **Teachers Directory** – Browse teachers and the courses they teach.
* **Help Center** – FAQ page with collapsible answers for common questions.
* **Floating Help Button** – Quick access to the Help page from anywhere.
* **Responsive Design** – Works seamlessly on desktop, tablet, and mobile.

---

## 🛠️ Tech Stack

* **Frontend:** React, React Router
* **Styling:** Tailwind CSS
* **Icons:** React Icons
* **Storage (Mock Data):** Local utility functions (`utils/storage.js`)

---

## 📂 Project Structure

```
course-planner-advanced/
├── src/
│   ├── components/      # Reusable components (Header, FloatingHelpButton, etc.)
│   ├── pages/           # Page components (Home, Courses, Teachers, Help, etc.)
│   ├── data/            # Course data (CourseData.js)
│   ├── utils/           # Local storage helpers
│   ├── App.jsx          # Routes setup
│   └── index.js         # App entry point
├── public/              # Static files
└── package.json
```

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Cipher-Syntax/Course-Planner-Advanced.git
cd course-planner-advanced
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

App will be available at: **[http://localhost:5173/](http://localhost:5173/)**

---

## 📸 Screenshots

* **Landing Page** – Welcome screen before courses.
* **Courses Page** – Browse, search, and filter courses.
* **Course Details + Tasks** – Organize tasks with deadlines.
* **Teachers Page** – Overview of all teachers.

---

## 🔧 Customization

* **Colors:** Currently using Tailwind’s `green-500` and `white`. Update in `tailwind.config.js` or components.
* **Data:** Modify `src/data/CourseData.js` to add/edit courses, teachers, or tasks.
* **Icons:** Uses `react-icons`, easily replaceable.

---

## 🙌 Acknowledgements

* Built with [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/).
* Icons by [React Icons](https://react-icons.github.io/react-icons/).
* Project by **Spectrum Lab**.

---
