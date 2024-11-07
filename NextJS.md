# Next.js Starter
_Common Setup for Next.js and Tailwind CSS (With Bulma)_

## Create Next App
```sh
npx create-next-app .
```

## Setup Tailwind
#### 1. Install Tailwind
```sh
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```
#### 2. Create configuration files
```sh
npx tailwindcss init -p
```
#### 3. Modify tailwind.config.js
```js
purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
```
#### 4. Include Tailwind in CSS `styles/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```
#### 5. Add Bulma
```sh
npm install bulma

```

## Quick Setup
Using the following line we can setup next.js with tailwind configs
```
npx create-next-app --tailwind .

```


## Setup AOS Animation
#### 1. Install AOS
```sh
npm i aos
```
#### 2. Configure AOS
Import and add in `_app.js`
```js
import AOS from 'aos';
import "aos/dist/aos.css";
import {useEffect} from 'react';

 useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
```


## Setup React Icons
#### 1. React Icons

```sh
npm i react-icons
```
#### 2. Find Icons

[`Search For Icons`](https://react-icons.github.io/react-icons)

## Setup React Loaders
#### 1. React Icons

```sh
npm i react-loader-spinner
```
#### 2. Find Loaders

[`View Loading Spinners`](https://mhnpd.github.io/react-loader-spinner/docs/category/components)



## Add daisyUI
#### 1. Install daisyUI
```sh
npm i daisyui
```
#### 2. Configure with `tailwind.config.js`
```js
module.exports = {
  //...
  plugins: [require("daisyui")],
}
```
#### 3. Components
Checkout the built-in components in **dailsyUI**

**[`Browse Available Components`](https://daisyui.com/components/)**

## Add Toastify

#### 1. Install `react-toastify`
```sh
npm i react-toastify
```


## Quick Install Common Packages
```
npm i aos react-icons react-loader-spinner react-toastify daisyui
```

## PRISMA ORM
Install
```
npm install prisma --save-dev
```
Initialize
```
npx prisma init --datasource-provider sqlite
```
## PRIMEREACT 
[View Installation](https://primereact.org/installation/)
Installation
```
npm install primereact
```

Basic Styling
```
import "primereact/resources/themes/lara-light-cyan/theme.css";
```


