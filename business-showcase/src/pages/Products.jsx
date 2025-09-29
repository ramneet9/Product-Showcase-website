import React from 'react'
function ProductCard({ imageSrc, description, onOpen }) {
	return (
		<button
			type="button"
			onClick={() => onOpen(imageSrc)}
			className="group block w-full rounded-xl border border-white/10 bg-white/5 p-2 text-left transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
		>
			<div className="relative h-72 overflow-hidden rounded-lg border border-white/10 sm:h-80 md:h-96">
				<img src={imageSrc} alt="Product" className="h-full w-full object-cover" loading="lazy" decoding="async" />
				<div className="absolute inset-0 flex items-end bg-black/0 opacity-0 transition group-hover:bg-black/50 group-hover:opacity-100">
					<p className="w-full p-4 text-sm text-zinc-100/90">{description}</p>
				</div>
			</div>
		</button>
	)
}

export default function Products() {
	// Centralized list: update descriptions and images here
	const products = [
		{ src: "/images/radiance_pages-to-jpg-0002.jpg", description: "Premium product with refined design and reliable performance." },
		{ src: "/images/radiance_pages-to-jpg-0003.jpg", description: "Elegant finish and durable build for everyday use." },
		{ src: "/images/radiance_pages-to-jpg-0004.jpg", description: "Engineered for efficiency and long-lasting value." },
		{ src: "/images/radiance_pages-to-jpg-0005.jpg", description: "Compact form factor with exceptional output." },
		{ src: "/images/radiance_pages-to-jpg-0006.jpg", description: "Modern styling meets practical functionality." },
		{ src: "/images/radiance_pages-to-jpg-0007.jpg", description: "Built to perform under demanding conditions." },
		{ src: "/images/radiance_pages-to-jpg-0008.jpg", description: "Clean lines and robust construction for lasting quality." },
		{ src: "/images/radiance_pages-to-jpg-0009.jpg", description: "Streamlined profile with dependable components." },
		{ src: "/images/radiance_pages-to-jpg-0010.jpg", description: "Balanced design that delivers consistent results." },
		{ src: "/images/radiance_pages-to-jpg-0011.jpg", description: "Thoughtful details and solid, everyday performance." },
		{ src: "/images/radiance_pages-to-jpg-0012.jpg", description: "Versatile solution tailored for various applications." },
	]

	// Modal state
	const [openSrc, setOpenSrc] = React.useState(null)

	// Close on ESC
	React.useEffect(() => {
		function onKey(e) {
			if (e.key === 'Escape') setOpenSrc(null)
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [])

	return (
		<section className="mx-auto max-w-7xl px-4 py-20">
			<header className="mb-10 text-center">
				<h1 className="text-4xl font-bold md:text-5xl">Our Products</h1>
				<p className="mx-auto mt-3 max-w-2xl text-zinc-300">Explore our range below.</p>
			</header>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
				{products.map(({ src, description }) => (
					<ProductCard key={src} imageSrc={src} description={description} onOpen={setOpenSrc} />
				))}
			</div>
			<div className="mt-10 flex items-center justify-center">
				<a href="/contact" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500">
					Learn More
				</a>
			</div>

			{openSrc && (
				<div
					role="dialog"
					aria-modal="true"
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
					onClick={() => setOpenSrc(null)}
				>
					<div className="relative max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
						<button
							type="button"
							aria-label="Close"
							onClick={() => setOpenSrc(null)}
							className="absolute -right-3 -top-3 rounded-full bg-white/90 p-2 text-black shadow hover:bg-white"
						>
						×
						</button>
						<img src={openSrc} alt="Preview" className="h-auto max-h-[90vh] w-auto max-w-full rounded" />
					</div>
				</div>
			)}
		</section>
	)
}
