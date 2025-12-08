# Project: Clothing App

### Overview

- Intro
- Features
- Technologies and Techniques
- Figma
- Future Enhancements
- Known Issues / Lessons Learned
- Project Pitch Video

---

## Intro

This project is a React application that displays clothing items based on the current weather and allows users to view, add, and delete items through interactive modals. It demonstrates component composition, state management with hooks, CRUD operations with a backend API, and responsive design principles. The app provides a clean, user‑friendly interface where clicking on an item card opens a modal with more details, and users can manage their wardrobe dynamically.

---

## Features

- View clothing items filtered by current weather conditions.
- Click an item card to open a detailed modal with image and description.
- Add new clothing items via a form modal (name, image, weather).
- Delete clothing items with a confirmation modal.
- Toggle between Fahrenheit and Celsius using a context‑driven switch.
- Responsive design for mobile and desktop layouts.

---

## Technologies and Techniques Used

- **React** for component‑based architecture and state management.
- **React Router** for navigation between Home and Profile pages.
- **Context API** for global temperature unit state.
- **JavaScript ES6+** for logic and interactivity.
- **CSS (Flexbox/Grid)** for styling and responsive layout.
- **REST API integration** with `fetch` for GET, POST, DELETE requests.
- **Conditional rendering** for modal open/close states.
- **Accessible design principles** to ensure inclusive user experience.
- **Modular components**: `App`, `Main`, `Header`, `WeatherCard`, `ItemCard`, `Footer`, `ItemModal`, `AddItemModal`, `DeleteModal`, etc.

---

## Figma

All stylistic design for this project is located here:  
[Project on Figma](https://www.figma.com/design/G0AMHRrHHzn2J9oUTsGMET/SE-Fulltime-Sprint-9-Project--WTWR?node-id=311-2970&t=34SJf4lEf7z2tMPO-0)

---

## Future Enhancements

- ➡️ Add overlay click and ESC key support for closing modals.
- ➡️ Improve error handling and user feedback (loading states, success/error messages).
- ➡️ Add authentication for personalized wardrobes.
- ➡️ Deploy backend and frontend together for seamless persistence.
- ➡️ Enhance accessibility with keyboard navigation and ARIA roles.

---

## Known Issues / Lessons Learned

- Debugged the React warning: _“Cannot update a component while rendering a different component”_ by ensuring state updates only happen on user actions, not during render.
- Learned how to manage modal state cleanly (`activeModal`, `selectedCard`) to avoid stale data.
- Confirmed the importance of unique IDs (`_id`) for reliable filtering and deletion.

---

## Project Pitch Video

Check out [this video](https://www.loom.com/share/c9a0aa597f9a40ee9b16ae59466a7efc), where I describe my
project and some challenges I faced while building it.
