import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
// import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
      <>
        <Header message="WELCOME!" />

        <Main message="React (also known as React.js or ReactJS) is a free and open-source
          front-end JavaScript library for building user interfaces based on
          components. It is maintained by Meta (formerly Facebook) and a
          community of individual developers and companies. React can be used to
          develop single-page, mobile, or server-rendered applications with
          frameworks like Next.js. Because React is only concerned with the user
          interface and rendering components to the DOM, React applications
          often rely on libraries for routing and other client-side
          functionality."/>

        <Footer message="You can find the React doc at https://react.dev/" />
      </>
  )
}

export default App
