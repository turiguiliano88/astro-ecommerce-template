# Astro Ecommerce Template
[Demo](https://astro.minh.berlin)

## Description

This is the simplified version of this [Astro Vendure storefront project](https://github.com/turiguiliano88/astro-vendure-storefront).
Data is hardcoded and only meant for showcase purpose.
You can use this template as a starting point to build your storefront.

## Features

This project supports common ecommerce flow such as ordering and managing profile.

- Order flow:
  1. Add item to cart
  2. Modify cart
  3. Add shipping address
  4. Authorize payment (dummy payment provider for now)

- Profile management:
  - Orders
  - Addresses
  - Account detail

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

### React components

These are responsible for building UI components and interactivities on the client. As they are just React components, you can probably extract and use them anywhere else (in React project, or Nextjs project ...).
It also follows design-guide carefully in order to create modern looking UI. By quickly modifying color primary / typography / spacing system in tailwind-themes.js you are good to go with your brand.

```
├── src/
│   ├── components/
│   │   ├── ui
│   │   │    └── Button
│   │   │    └── Input
│   │   │    └── ...
│   │   ├── icon
│   │   │    └── ShoppingBag
│   │   │    └── Search
│   │   │    └── ...
│   │   ├── cart
│   │   │    └── index.jsx
│   │   │    └── ...
│   │   ├── checkout
│   │   │    └── index.jsx
│   │   │    └── ...
│   │   ├── product
│   │   │    └── index.jsx
│   │   │    └── ...
│   │   ├── profile
│   │   │    └── index.jsx
│   │   │    └── ...
│   │   ├── login
│   │   │    └── index.jsx
│   │   │    └── ...
│   │   ├── register
│   │   │    └── index.jsx
│   │   │    └── ...
```

### Astro components

These are responsible for layout / non-state Astro component rendered at server.

```
├── src/
│   ├── pages/
│   │   └── index.astro
│   │   └── login.astro
│   │   └── register.astro
│   │   └── cart.astro
│   │   └── checkout.astro
│   │   ├── product
│   │   │    └── [slug].astro
│   │   ├── collection
│   │   │    └── [slug].astro
│   ├── layouts/
│   │   └── base.astro
```
## Future improvements

1. Animation
2. Addresses management
3. ...

## Powered by
- [Astro](https://astro.build)
- [React](https://reactjs.org)
- [TailwindCSS](https://tailwindcss.com)
- ...

## About me

I am Minh from Berlin. Coding and desiging are my jobs. Sometimes they make me happy :)

Hope you find this project useful!
