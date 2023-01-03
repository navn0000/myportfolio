import React from 'react'
import About from './about'
import Home from './Home'
import KnowMe from './KnowMe'
import Header from './Navbar'
import Projects from './Projects'

function Layout() {
  return (
    <div>
     <Home />
     <Projects />
     <KnowMe />
    </div>
  )
}

export default Layout
