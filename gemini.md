# User se kis language mein baat karni hai?
**Ans :** user se hamesha roman urdu mein baat karni hai apne

# Project Analysis: Café Cosmo


## Overview
This project is a statically-generated website for a cafe named 'Café Cosmo', built with Next.js, React, and TypeScript. The main purpose is to showcase a menu of products and provide an online ordering experience.

## Technology Stack
- **Framework:** Next.js
- **UI Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS

## Key Features
- **Homepage:** Visually engaging homepage with a hero video (`public/hero/hero_animation.mp4`) and a menu preview.
- **Menu Display:** Displays various menu items categorized (e.g., bakery, breakfast, coffees, desserts, drinks, iced coffee, lunch, mocktail, tea).
- **Product Detail Pages:** Dedicated pages for each product, accessible via dynamic routing (`src/app/product/[slug]/page.tsx`).
- **Shopping Cart:** Functionality to add products to a shopping cart, indicated by the `src/app/cart/page.tsx` and the `quantity` property in the `Product` type.
- **Static Data:** Product data is stored locally in `src/data/products.ts`.

## Architecture and Structure
The application is well-structured, utilizing the Next.js App Router for page management and routing. Reusable components are organized in `src/components/`.

### Core Files and Directories:
- `src/app/layout.tsx`: Defines the global layout, including `Navbar`, `Footer`, and `SplashProvider`.
- `src/app/page.tsx`: The main entry point for the homepage, composing `Hero` and `Menu` components.
- `src/data/products.ts`: The single source of truth for all product data, stored as a static array.
- `src/types/Product.ts`: TypeScript type definition for the product data structure, including an optional `quantity` property for cart functionality.
- `src/components/ProductCard.tsx`: A reusable component for displaying individual product information and linking to detail pages.
- `src/app/product/[slug]/page.tsx`: Handles dynamic routing for individual product detail pages.
- `src/app/cart/page.tsx`: The page responsible for displaying the shopping cart content.
- `public/`: Contains static assets like images and videos used across the site.

## Further Analysis (Potential Areas for Deeper Dive)
- **Navbar and Footer:** Detailed analysis of `src/components/Navbar.tsx` and `src/components/Footer.tsx` for navigation and global elements.
- **Full Menu Page:** How `src/app/menu/page.tsx` displays the complete menu.
- **Product Detail Page Logic:** The implementation details of `src/app/product/[slug]/page.tsx`.
- **Cart Functionality:** How items are added, removed, and managed within the cart, including state management.
- **Checkout Process:** The implementation of `src/app/checkout/page.tsx`.
- **Contact and About Pages:** Details of `src/app/contact/page.tsx` and `src/app/about/page.tsx`.

---

# Senior Developer Workflow

Senior developers don't just focus on writing code; they follow a complete process. Here are some key points:

1.  **Planning and Design:** Before writing code, thoroughly understand the problem and create a plan. This includes system design, architecture, and technology selection.

2.  **Clean and Maintainable Code:** Write clean, readable, and maintainable code that other developers can easily understand and modify.

3.  **Testing:** Write unit and integration tests for the code to ensure its quality and prevent future issues.

4.  **Code Review:** Review code from other developers and provide feedback to improve code quality.

5.  **Big Picture Thinking:** Always keep the larger project context in mind, including aspects like performance, security, and scalability.

6.  **Effective Tool Usage:** Make effective use of version control (like Git), debuggers, and other development tools.

# GitHub Workflow

I (the Gemini agent) will handle all GitHub operations for this project (such as creating `commits`, `pushes`, and `pull requests`). After each task, I will systematically manage the code in version control.