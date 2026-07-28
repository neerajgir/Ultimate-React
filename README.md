# Ultimate React — Learning Repository

Yeh repo React seekhne ke liye banaya gaya hai. Har concept ka alag folder hai, saath mein simple examples aur code snippets.

---

## Repo Structure

```
Ultimate-React/
├── React-Basics/     → Components, Props, Hooks (useState, useEffect, useRef)
├── Context-Api/      → Global state share karna (Context API)
└── React Router/     → Pages ke beech navigation (Routing)
```

Har folder ek **alag Vite + React** project hai. Ek baar mein ek folder open karke run karo.

---

## Quick Start

Har project ke andar jao, dependencies install karo, phir dev server chalao:

```bash
cd React-Basics      # ya Context-Api / "React Router"
npm install          # ya bun install
npm run dev          # ya bun dev
```

Browser mein open karo: `http://localhost:5173`

---

## Table of Contents

1. [React Basics](#1-react-basics)
   - [Components](#components)
   - [JSX](#jsx)
   - [Props](#props)
   - [useState Hook](#usestate-hook)
   - [useEffect Hook](#useeffect-hook)
   - [useRef Hook](#useref-hook)
2. [Context API](#2-context-api)
3. [React Router](#3-react-router)

---

## 1. React Basics

**Folder:** `React-Basics/`

### Summary

React ek JavaScript library hai jo UI (user interface) banane ke liye use hoti hai. Is project mein tumne seekha:

- UI ko chhote **components** mein todna
- Data **props** se pass karna
- State manage karna **hooks** se

---

### Components

**Kya hai?**  
Component = UI ka ek reusable piece. Jaise Nav, Footer, Card — har ek alag component hai.

**Example — Simple Component:**

```jsx
const Nav = () => {
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  )
}
```

**File:** `React-Basics/src/components/Nav.jsx`

**App mein use karna:**

```jsx
import Nav from "./components/Nav"

const App = () => {
  return (
    <>
      <Nav />
    </>
  )
}
```

---

### JSX

**Kya hai?**  
JSX = HTML jaisa syntax JavaScript ke andar. React isse UI return karne ke liye use karti hai.

```jsx
// Yeh JSX hai
return <h1>Hello World</h1>

// Yeh JavaScript hai (bina JSX)
return React.createElement('h1', null, 'Hello World')
```

**Rule:** JSX mein ek hi parent element hona chahiye. Multiple elements ke liye `<>...</>` (Fragment) use karo.

---

### Props

**Kya hai?**  
Props = Parent se child component ko data bhejne ka tareeka. Read-only hote hain — child unhe change nahi kar sakta.

**Summary:** Jaise function ko arguments dete ho, waise hi component ko props dete ho.

**Example — Props receive karna:**

```jsx
const Props = (props) => {
  return (
    <div>
      <h1>Props</h1>
      <p>Hello Myself {props.name}</p>
    </div>
  )
}
```

**Example — Props pass karna:**

```jsx
<Props name="Neeraj" />
```

**Real use case — Card component:**

```jsx
// Card.jsx — props receive karta hai
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h1>{props.name}</h1>
      <p>{props.about}</p>
    </div>
  )
}

// Hero.jsx — Card ko data deta hai
<Card name="Boy" about="A boy drive cycle" image={Image1} />
<Card name="Driver" about="A man drive tramp" image={Image2} />
```

**Files:**
- `React-Basics/src/components/Props.jsx`
- `React-Basics/src/components/Card.jsx`
- `React-Basics/src/components/Hero.jsx`

**Try karo:** `App.jsx` mein `<Props name={"Neeraj"}/>` uncomment karo.

---

### useState Hook

**Kya hai?**  
Jab UI ko change karna ho (jaise counter, form input), tab **state** use karte hain. `useState` state add karne ka React ka tareeka hai.

**Summary:**
- `useState(initialValue)` → `[value, setValue]` return karta hai
- `setValue` se UI automatically update hota hai

**Example:**

```jsx
import { useState } from 'react'

const Hooks = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
```

**Important:** State update hamesha `setCount(count + 1)` se karo, direct `count++` mat karo.

**File:** `React-Basics/src/components/Hooks.jsx`

**Try karo:** `App.jsx` mein `<Hooks/>` uncomment karo.

---

### useEffect Hook

**Kya hai?**  
Side effects handle karta hai — jaise API call, console log, timer, DOM update. Component render hone ke **baad** chalta hai.

**Summary:**
- Pehla argument = function (jo chalana hai)
- Doosra argument = dependency array (kab chalana hai)

**Example:**

```jsx
import { useEffect, useState } from 'react'

const Useeffect = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // Sirf count1 change hone par chalega
  useEffect(() => {
    console.log("Hello World")
  }, [count1])

  return (
    <div>
      <h1>{count1}</h1>
      <h1>{count2}</h1>
      <button onClick={() => setCount1(count1 + 1)}>BTN 1</button>
      <button onClick={() => setCount2(count2 + 1)}>BTN 2</button>
    </div>
  )
}
```

**Dependency array cheat sheet:**

| Array | Kab chalega |
|-------|-------------|
| `[]` | Sirf ek baar — mount par |
| `[count1]` | Jab `count1` change ho |
| (empty nahi) | Har render par |

**File:** `React-Basics/src/components/Useeffect.jsx`

**Try karo:** `App.jsx` mein `<Useeffect/>` uncomment karo, console dekho.

---

### useRef Hook

**Kya hai?**  
`useRef` ek value store karta hai jo **re-render trigger nahi karti**. DOM element ko directly access karne ke liye bhi use hota hai.

**Summary:**
- `useState` → change par UI update
- `useRef` → change par UI update **nahi** (value `ref.current` mein rehti hai)

**Example — Render count track karna:**

```jsx
import { useEffect, useRef, useState } from 'react'

const Useref = () => {
  const count = useRef(0)
  const [num, setNum] = useState(0)

  useEffect(() => {
    count.current = count.current + 1  // har render par +1
  })

  return (
    <div>
      <h1>Render count: {count.current}</h1>
      <h1>State num: {num}</h1>
      <button onClick={() => setNum(num + 1)}>Click</button>
    </div>
  )
}
```

**Kab use karein?**
- Input focus karna
- Timer / interval store karna
- Pichhle value ya render count track karna

**File:** `React-Basics/src/components/Useref.jsx`

---

## 2. Context API

**Folder:** `Context-Api/`

### Summary

Kabhi-kabhi data ko bahut neeche ke component tak bhejna padta hai (prop drilling). **Context API** se tum data ko globally share kar sakte ho — bina har level par props pass kiye.

**Flow:**
```
createContext → Provider (value set) → useContext (value read)
```

---

### Step 1 — Context banana

```jsx
import { createContext } from 'react'

export const data = createContext()
```

---

### Step 2 — Provider se wrap karna

```jsx
const UserContext = ({ children }) => {
  const userName = "Neeraj"

  return (
    <data.Provider value={userName}>
      {children}
    </data.Provider>
  )
}
```

**File:** `Context-Api/src/context/UserContext.jsx`

---

### Step 3 — Kisi bhi child mein use karna

```jsx
import { useContext } from 'react'
import { data } from './context/UserContext'

const App = () => {
  const name = useContext(data)

  return <h1>Hey Im {name}</h1>
}
```

**File:** `Context-Api/src/App.jsx`

---

### Object bhi share kar sakte ho

```jsx
// Story.jsx
const story = {
  Name: "Kala Kua",
  Author: "Neeraj Goswami",
  Storyline: "A story about man, who search for meaning in life"
}

<data.Provider value={story}>
  {children}
</data.Provider>
```

```jsx
// Card.jsx — deep nested component
const kahani = useContext(data)
return (
  <div>
    <h1>Name: {kahani.Name}</h1>
    <h2>Author: {kahani.Author}</h2>
    <p>StoryLine: {kahani.Storyline}</p>
  </div>
)
```

**Files:**
- `Context-Api/src/context/Story.jsx`
- `Context-Api/Card.jsx`

---

### Nested Providers

Do alag contexts ek saath use kar sakte ho:

```jsx
// main.jsx
<UserContext>
  <Story>
    <App />
  </Story>
</UserContext>
```

**File:** `Context-Api/src/main.jsx`

---

## 3. React Router

**Folder:** `React Router/`

### Summary

Single Page App (SPA) mein bina page reload ke alag-alag "pages" dikhane ke liye **React Router** use hota hai.

**Main concepts:**
- `createBrowserRouter` — routes define karna
- `RouterProvider` — app ko router se wrap karna
- `Route` — path aur component link karna
- `NavLink` — navigation links
- `Outlet` — nested routes ke liye child render karna

---

### Routes setup (JSX style)

```jsx
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
```

**File:** `React Router/src/main.jsx`

---

### Layout + Nested Routes (Outlet)

Parent route mein common layout (Nav, Footer) rakho, child routes `Outlet` mein render honge:

```jsx
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />   {/* Yahan Home / About / Contact render hoga */}
      <Footer />
    </div>
  )
}
```

**File:** `React Router/src/App.jsx`

---

### Navigation links

```jsx
import { NavLink } from 'react-router-dom'

<NavLink to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/contact">Contact</NavLink>
```

`NavLink` automatically active class add karta hai jab route match ho.

**File:** `React Router/src/components/Nav.jsx`

---

### Routes (alternative object style)

Yeh approach bhi use kar sakte ho — `main.jsx` mein commented hai:

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> }
    ]
  }
])
```

---

## Concept Map (Quick Revision)

```
React App
│
├── Components        → UI ke tukde (Nav, Card, Footer)
├── Props             → Parent → Child data pass
├── useState          → UI wali state (counter, input)
├── useEffect         → Side effects (API, console, timer)
├── useRef            → Bina re-render ke value / DOM access
│
├── Context API       → Global data (theme, user, auth)
│   ├── createContext
│   ├── Provider
│   └── useContext
│
└── React Router      → Multi-page feel, single page app
    ├── createBrowserRouter
    ├── Route / Outlet
    └── NavLink
```

---

## How to Practice

1. `React-Basics/src/App.jsx` kholo
2. Jo concept seekhna ho, us component ko uncomment karo
3. Code change karke dekho kya hota hai
4. Console open rakho (`useEffect` ke liye)

**Example — App.jsx mein switch karna:**

```jsx
// Sirf ek component active rakho learning ke liye
<Hooks />       // useState
<Useeffect />   // useEffect
<Useref />      // useRef
<Props name="Neeraj" />  // Props
<Hero />        // Props + reusable Card
```

---

## Tech Stack

| Tool | Version |
|------|---------|
| React | 19.x |
| Vite | 8.x |
| React Router DOM | 7.x (Router project only) |

---

## Learning Path (Suggested Order)

1. **React-Basics** — Components → Props → useState → useEffect → useRef
2. **Context-Api** — Jab prop drilling samajh aa jaye
3. **React Router** — Jab multi-page navigation chahiye ho

---

## Useful Links

- [React Official Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Vite Docs](https://vite.dev)

---

Happy Learning!
