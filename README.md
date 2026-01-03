# 🚀 QuickFlick – Smart To-Do Application

QuickFlick is a modern, feature-rich **To-Do List web application** built using **React + Vite**.  
It helps users efficiently manage tasks with priorities, filters, sorting, and persistent storage — all wrapped in a clean, responsive UI.

---

## ✨ Features

### 🏠 Landing Experience
- Elegant landing page with a motivating tagline
- Clear navigation across all pages
- Smooth transition into the app

### 📝 Task Management
- Add new tasks with:
  - Title
  - Description
  - Due date
  - Priority level (Low / Medium / High)
- Edit tasks inline
- Delete tasks directly while editing
- Mark tasks as completed using a checkbox

### 🎯 Smart Organization
- Priority color indicators on task cards
- Filters:
  - All tasks
  - Completed tasks
  - Pending tasks
  - Priority-based filtering
- Sorting options:
  - By due date
  - By creation time
  - By priority

### 💾 Data Persistence
- Tasks are saved automatically using **LocalStorage**
- Data remains intact even after page refresh

### 🎨 UI & UX Enhancements
- Responsive layout (desktop & mobile friendly)
- Animated interactions for better user experience
- Hover-based action buttons for a clean interface
- Minimizable / expandable task form
- Smooth transitions and visual feedback

---

## 🛠️ Tech Stack

### Frontend
- **React** – Component-based UI development
- **Vite** – Fast build tool and development server
- **JSX** – Declarative UI structure
- **CSS3** – Responsive styling and animations

### State Management
- React Hooks:
  - `useState`
  - `useEffect`

### Storage
- **Browser LocalStorage** for persistent task data

---

## 📱 Responsive Design

QuickFlick is fully responsive and optimized for:
- Desktop
- Tablet
- Mobile devices

---

## 📂 Project Structure

```txt
src/
│── components/
│   ├── Landing.jsx
│   ├── FilterBar.jsx
│   ├── TodoApp.jsx
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   └── TaskItem.jsx
│
│── App.jsx
│── main.jsx
│── index.css
├── styles.css
