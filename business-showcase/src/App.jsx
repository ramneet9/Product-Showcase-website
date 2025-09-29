import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function Navbar() {
	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
				<a href="/" className="flex items-center font-semibold">
					<img src="/logo.png" alt="NEWTECH POWER SYSTEMS" className="h-16 w-16 md:h-28 md:w-28 rounded-sm object-contain" />
				</a>
				<nav className="flex items-center gap-8 text-base md:text-lg">
					<NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-400' : 'text-zinc-300 hover:text-white') + ' px-2 py-1 md:px-3 md:py-2'}>Home</NavLink>
					<NavLink to="/products" className={({ isActive }) => (isActive ? 'text-blue-400' : 'text-zinc-300 hover:text-white') + ' px-2 py-1 md:px-3 md:py-2'}>Products</NavLink>
					<NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-400' : 'text-zinc-300 hover:text-white') + ' px-2 py-1 md:px-3 md:py-2'}>About</NavLink>
					<NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-blue-400' : 'text-zinc-300 hover:text-white') + ' px-2 py-1 md:px-3 md:py-2'}>Contact</NavLink>
				</nav>
			</div>
		</header>
	)
}

function Footer() {
	return (
		<footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-400">
			<div className="mx-auto max-w-7xl px-4">
				<p>© Copyright NEWTECH POWER SYSTEMS. All Rights Reserved</p>
				<p className="mt-1">Designed by <a href="https://www.instagram.com/ramneetzz/" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white underline-offset-2 hover:underline">Ramneet Singh</a></p>
			</div>
		</footer>
	)
}

function AppShell() {
	return (
		<div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
			<Navbar />
			<main className="flex-1 pt-20">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default function App() {
	return (
		<BrowserRouter>
			<AppShell />
		</BrowserRouter>
	)
}
