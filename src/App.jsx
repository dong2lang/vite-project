import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Contact />
    </div>
  )
}

export default App