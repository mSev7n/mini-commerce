# MiniCommerce — Angular E-Commerce Demo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

This is a fully responsive e-commerce frontend built with **Angular**, **Standalone Components**, and **Tailwind CSS** as part of a technical assessment for a Frontend Developer (Angular) role.

The app demonstrates practical use of Angular routing, services, reactive state, form handling, and responsive UI design.

---

##  Features

- ✅ **Product Listing Page** with loading state
- ✅ **Product Details Page** with "Add to Cart" and "You Might Also Like"
- ✅ **Cart Page** with quantity updates and removal logic
- ✅ **Checkout Page** with user form (name & email) and cart summary
- ✅ **Order Success Page** with generated Order ID and user details
- ✅ **Responsive Design** (Mobile-first with Tailwind)
- ✅ **404 Page** for unknown routes
- ✅ **Cart Persistence** using LocalStorage
- ✅ **User-Friendly UX** with transition effects, toasts, and accessibility considerations

---


## 🛠 Tech Stack

- **Angular** with Standalone Components
- **TypeScript**
- **RxJS** Observables for cart state
- **Tailwind CSS** for styling and responsive design
- **LocalStorage** for state persistence

---

## Setting Up

Clone the project and run it locally:

use the following step by step commands:

    git clone https://github.com/your-username/mini-commerce.git
    cd mini-commerce
    npm install
    ng serve

Then open http://localhost:4200 in your browser.

## Testing Checklist
✅ Add items to cart
✅ Update and remove cart items
✅ Go through full checkout flow
✅ Confirm success screen with Order ID and user data
✅ Refresh browser — cart and state persist
✅ Test on mobile and desktop viewports
✅ Navigate to invalid route and see 404 page
✅ Submit with and without form data

## Project Structure Overview

src/
├── app/
│   ├── pages/              # All standalone pages (home, cart, checkout, etc.)
│   ├── services/           # Shared services (cartService)
│   ├── app.routes.ts       # Central route config
│   └── app.component.ts    # Root component

## Author
mSeven
Frontend Developer · Digital Craftsman

## Live Demo (Optional)
Click here to view live 