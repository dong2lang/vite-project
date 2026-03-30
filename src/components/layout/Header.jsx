function Header() {
  const moveTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <header className="fixed w-full top-0 flex justify-between items-center px-8 py-4 bg-black/70 backdrop-blur-md z-50">
      <h1 className="font-bold text-xl">MyPortfolio</h1>
      <nav className="flex gap-6 text-sm">
        <button onClick={() => moveTo('about')} className="hover:text-blue-400">About</button>
        <button onClick={() => moveTo('contact')} className="hover:text-blue-400">Contact</button>
      </nav>
    </header>
  )
}

export default Header