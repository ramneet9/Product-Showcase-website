import React from 'react'

function ProductCard({ imageSrc, productData, onOpen }) {
	return (
		<button
			type="button"
			onClick={() => onOpen({ imageSrc, productData })}
			className="group block w-full flex-shrink-0 rounded-xl border border-white/10 bg-white/5 p-2 text-left transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
		>
			<div className="relative h-72 overflow-hidden rounded-lg border border-white/10 sm:h-80 md:h-96">
				<img src={imageSrc} alt="Product" className="h-full w-full object-cover" loading="lazy" decoding="async" />
				<div className="absolute inset-0 flex items-end bg-black/0 opacity-0 transition group-hover:bg-black/50 group-hover:opacity-100">
					<p className="w-full p-4 text-sm text-zinc-100/90">Click to view details</p>
				</div>
			</div>
		</button>
	)
}

function ScrollableSection({ title, children }) {
	const scrollRef = React.useRef(null)
	const [isPaused, setIsPaused] = React.useState(false)
	const directionRef = React.useRef(1) // 1 for right, -1 for left
	const pauseTimeoutRef = React.useRef(null)

	const scrollLeft = () => {
		if (scrollRef.current) {
			// Clear any existing pause timeout
			if (pauseTimeoutRef.current) {
				clearTimeout(pauseTimeoutRef.current)
			}
			// Scroll to left end
			scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
			// Pause for 2 seconds
			setIsPaused(true)
			directionRef.current = 1 // Set direction to right after pause
			pauseTimeoutRef.current = setTimeout(() => {
				setIsPaused(false)
			}, 2000)
		}
	}

	const scrollRight = () => {
		if (scrollRef.current) {
			// Clear any existing pause timeout
			if (pauseTimeoutRef.current) {
				clearTimeout(pauseTimeoutRef.current)
			}
			const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
			// Scroll to right end
			scrollRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' })
			// Pause for 2 seconds
			setIsPaused(true)
			directionRef.current = -1 // Set direction to left after pause
			pauseTimeoutRef.current = setTimeout(() => {
				setIsPaused(false)
			}, 2000)
		}
	}

	// Auto-scroll functionality - 60fps smooth scrolling with reverse direction
	React.useEffect(() => {
		if (!scrollRef.current || isPaused) return

		const scrollContainer = scrollRef.current
		let animationFrameId = null

		const autoScroll = () => {
			if (isPaused || !scrollContainer) {
				if (animationFrameId) {
					cancelAnimationFrame(animationFrameId)
				}
				return
			}

			const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth
			const currentScroll = scrollContainer.scrollLeft
			
			// Reverse direction when reaching either end
			if (currentScroll >= maxScroll - 1) {
				// Reached right end, reverse to left
				directionRef.current = -1
			} else if (currentScroll <= 1) {
				// Reached left end, reverse to right
				directionRef.current = 1
			}

			// Scroll in current direction - 1px per frame at 60fps = 60px per second
			scrollContainer.scrollBy({ left: directionRef.current, behavior: 'auto' })

			animationFrameId = requestAnimationFrame(autoScroll)
		}

		animationFrameId = requestAnimationFrame(autoScroll)

		return () => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId)
			}
			if (pauseTimeoutRef.current) {
				clearTimeout(pauseTimeoutRef.current)
			}
		}
	}, [isPaused])

	return (
		<div className="mb-12">
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-2xl font-semibold text-white">{title}</h2>
				<div className="flex gap-2">
					<button
						type="button"
						onClick={scrollLeft}
						className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
						aria-label="Scroll left"
					>
						<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button
						type="button"
						onClick={scrollRight}
						className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
						aria-label="Scroll right"
					>
						<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
			</div>
			<div 
				ref={scrollRef}
				className="overflow-x-auto pb-4 scrollbar-hide"
				style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
				onMouseEnter={() => setIsPaused(true)}
				onMouseLeave={() => setIsPaused(false)}
			>
				<div className="flex gap-6" style={{ width: 'max-content' }}>
					{children}
				</div>
			</div>
		</div>
	)
}

export default function Products() {
	// ============================================
	// PRODUCT DATA - EDIT VALUES BELOW
	// ============================================
	
	// Common specifications for Radiance products (same for all)
	const radianceCommonSpecs = {
		brand: "Radiance",
		type: "Wall Hanging Table Top",
		capacity: "12V/7.2Ah",
		batteryType: "Inbuilt Lithium/Lead Battery",
		phase: "Single phase",
		backupTime: "4-5 Hours",
		protection: "Shortcircuit, overcurrent, overvoltage",
		voltage: "12V",
		wattage: "55W",
		powerBackupLED: "12 hours on single 5 watt LED Bulb",
		chargingCurrent: "2.5 Amp",
		mobileLaptopChargingPoint: "35W"
	}

	// SECTION 1: Transformer Based Charging (Top 3 products)
	// EDIT THE 4 CUSTOM FIELDS BELOW FOR EACH PRODUCT:
	const transformerProducts = [
		{ 
			src: "/images/radiance_pages-to-jpg-0006.jpg", 
			inbuiltLED: "Yes - 4W",  // ← Edit this
			inbuiltBulbHolder: "Yes",  // ← Edit this
			chargingTransformerBased: "Yes",  // ← Edit this
			chargingSMPSBased: "No"  // ← Edit this
		},
		{ 
			src: "/images/radiance_pages-to-jpg-0005.jpg", 
			inbuiltLED: "Yes - 7.5W",  // ← Edit this
			inbuiltBulbHolder: "Yes",  // ← Edit this
			chargingTransformerBased: "Yes",  // ← Edit this
			chargingSMPSBased: "No"  // ← Edit this
		},
		{ 
			src: "/images/radiance_pages-to-jpg-0009.jpg", 
			inbuiltLED: "Yes - 7.5W",  // ← Edit this
			inbuiltBulbHolder: "Yes",  // ← Edit this
			chargingTransformerBased: "Yes",  // ← Edit this
			chargingSMPSBased: "No"  // ← Edit this
		},
	]

	// SECTION 2: SMPS Based Charging (Rest of the products)
	// EDIT THE 4 CUSTOM FIELDS BELOW FOR EACH PRODUCT:
	const smpsProducts = [
		{ 
			src: "/images/radiance_pages-to-jpg-0002.jpg", 
			inbuiltLED: "Yes - 11W",  // ← Edit this
			inbuiltBulbHolder: "No",  // ← Edit this
			chargingTransformerBased: "No",  // ← Edit this
			chargingSMPSBased: "Yes"  // ← Edit this
		},
		{ 
			src: "/images/rd-666.jpeg", 
			inbuiltLED: "Yes - 5W",  // ← Edit this
			inbuiltBulbHolder: "Yes",  // ← Edit this
			chargingTransformerBased: "No",  // ← Edit this
			chargingSMPSBased: "Yes"  // ← Edit this
		},
		{ 
			src: "/images/radiance_pages-to-jpg-0004.jpg", 
			inbuiltLED: "Yes - 7.5W",  // ← Edit this
			inbuiltBulbHolder: "No",  // ← Edit this
			chargingTransformerBased: "No",  // ← Edit this
			chargingSMPSBased: "Yes"  // ← Edit this
		},
		{ 
			src: "/images/radiance_pages-to-jpg-0003.jpg", 
			inbuiltLED: "Yes - 9W",  // ← Edit this
			inbuiltBulbHolder: "No",  // ← Edit this
			chargingTransformerBased: "No",  // ← Edit this
			chargingSMPSBased: "Yes"  // ← Edit this
		},
		{ 
			src: "/images/radiance_pages-to-jpg-0010.jpg", 
			inbuiltLED: "Yes - 7.5W",  // ← Edit this
			inbuiltBulbHolder: "Yes",  // ← Edit this
			chargingTransformerBased: "No",  // ← Edit this
			chargingSMPSBased: "Yes"  // ← Edit this
		},
	]

	// Common specifications for Theeta Coil products (same for all)
	const theetaCommonSpecs = {
		coilElement: "Fitted with ISI Marked 'Theeta' Coil Element",
		powerConsumptionNote: "Less Power Consumption",
		durability: "Durable and Long Lasting",
		body: "Heavy Duty Stainless Steel Body",
		features: "Rust Proof, Shock Proof, Insulated Robust Stainless Steel Body Complete with Connecting Lead and Plug",
		heatControl: "Heat Control Three Step 'Rotary Regulator' Switch",
		inputSpec: "Input Current Specification: 220-230 Volts 50Hz Ac Only",
		warranty: "One Year off Site Warranty - Life Long Service",
		usage: "Ideal For Homes, Kitchens, Restaurants for Personal and Commercial Use",
		compatibility: "Any Metal Vassal, Tawa Pot, Griddle or Frying Pan Can be Placed on this Multi Purpose Hot Plate Coil for Easy Heating & Cooking"
	}

	// SECTION 3: Theeta Coil ISI (Hot Plate) - Products
	// EDIT ONLY THE POWER CONSUMPTION FIELD FOR EACH PRODUCT:
	const theetaProducts = [
		{ 
			src: "/images/no-1.jpeg",
			powerConsumption: "1250W"  // ← Edit this
		},
		{ 
			src: "/images/no-2.jpeg",
			powerConsumption: "2000W"  // ← Edit this
		},
		{ 
			src: "/images/no-22.jpeg",
			powerConsumption: "2000W"  // ← Edit this
		},
		{ 
			src: "/images/no-3.jpeg",
			powerConsumption: "2000W"  // ← Edit this
		},
		{ 
			src: "/images/no-4.jpeg",
			powerConsumption: "000+1000W"  // ← Edit this
		},
		{ 
			src: "/images/no-6.jpeg",
			powerConsumption: "1000W"  // ← Edit this
		},
		{ 
			src: "/images/no-7.jpeg",
			isInfrared: true  // Special product with infrared specs
		},
		{ 
			src: "/images/gold-coil.png",
			isInfrared: true,  // Special product with infrared specs
			colour: "Gold"  // Override color to Gold
		},
	]

	// Infrared product specifications (for no-7)
	const infraredSpecs = {
		heatingElements: "1",
		colour: "Black",
		powerSource: "Corded Electric",
		fuelType: "Electric",
		features: "Quick heating, quick cooking. No electromagnetic radiation. Adjustable temperature and power. 2-way cooking control.",
		timer: "180 minutes",
		powerConsumption: "2000W",
		display: "2000/2200/2500",
		voltage: "220-250V~50Hz"
	}

	// Modal state - stores { imageSrc, productData, productType } or null
	const [openProduct, setOpenProduct] = React.useState(null)

	// Close on ESC
	React.useEffect(() => {
		function onKey(e) {
			if (e.key === 'Escape') setOpenProduct(null)
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [])

	function renderProductSpecs(productData, productType) {
		if (productType === 'infrared') {
			return (
				<div className="space-y-3 text-sm">
					<h4 className="mb-4 text-lg font-semibold text-white">Infrared Specification</h4>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Heating Elements:</span>
						<span className="text-zinc-200">{productData.heatingElements}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Colour:</span>
						<span className="text-zinc-200">{productData.colour}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Power Source:</span>
						<span className="text-zinc-200">{productData.powerSource}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Fuel Type:</span>
						<span className="text-zinc-200">{productData.fuelType}</span>
					</div>
					<div className="flex flex-col gap-2 border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Features:</span>
						<span className="text-zinc-200 text-xs">{productData.features}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Timer:</span>
						<span className="text-zinc-200">{productData.timer}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Power Consumption:</span>
						<span className="text-zinc-200">{productData.powerConsumption}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Display:</span>
						<span className="text-zinc-200">{productData.display}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-medium text-zinc-400">Voltage:</span>
						<span className="text-zinc-200">{productData.voltage}</span>
					</div>
				</div>
			)
		} else if (productType === 'theeta') {
			return (
				<div className="space-y-3 text-sm">
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Coil Element:</span>
						<span className="text-zinc-200">{productData.coilElement}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Power Consumption:</span>
						<span className="text-zinc-200">{productData.powerConsumption}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Power Efficiency:</span>
						<span className="text-zinc-200">{productData.powerConsumptionNote}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Durability:</span>
						<span className="text-zinc-200">{productData.durability}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Body:</span>
						<span className="text-zinc-200">{productData.body}</span>
					</div>
					<div className="flex flex-col gap-2 border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Features:</span>
						<span className="text-zinc-200 text-xs">{productData.features}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Heat Control:</span>
						<span className="text-zinc-200">{productData.heatControl}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Input Specification:</span>
						<span className="text-zinc-200 text-xs">{productData.inputSpec}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Warranty:</span>
						<span className="text-zinc-200">{productData.warranty}</span>
					</div>
					<div className="flex flex-col gap-2 border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Usage:</span>
						<span className="text-zinc-200 text-xs">{productData.usage}</span>
					</div>
					<div className="flex flex-col gap-2">
						<span className="font-medium text-zinc-400">Compatibility:</span>
						<span className="text-zinc-200 text-xs">{productData.compatibility}</span>
					</div>
				</div>
			)
		} else {
			// Radiance product specs
			return (
				<div className="space-y-3 text-sm">
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Brand:</span>
						<span className="text-zinc-200">{productData.brand}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Type:</span>
						<span className="text-zinc-200">{productData.type}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Capacity:</span>
						<span className="text-zinc-200">{productData.capacity}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Battery Type:</span>
						<span className="text-zinc-200">{productData.batteryType}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Phase:</span>
						<span className="text-zinc-200">{productData.phase}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Backup Time:</span>
						<span className="text-zinc-200">{productData.backupTime}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Protection:</span>
						<span className="text-zinc-200">{productData.protection}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Voltage:</span>
						<span className="text-zinc-200">{productData.voltage}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Wattage:</span>
						<span className="text-zinc-200">{productData.wattage}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Power Back Up on LED:</span>
						<span className="text-zinc-200">{productData.powerBackupLED}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Charging Current:</span>
						<span className="text-zinc-200">{productData.chargingCurrent}</span>
					</div>
					<div className="flex justify-between border-b border-white/10 pb-2">
						<span className="font-medium text-zinc-400">Mobile/Laptop Charging Point:</span>
						<span className="text-zinc-200">{productData.mobileLaptopChargingPoint}</span>
					</div>
					<div className="mt-4 space-y-2 border-t border-white/10 pt-4">
						<div className="flex justify-between">
							<span className="font-medium text-zinc-400">Inbuilt LED:</span>
							<span className="text-zinc-200">{productData.inbuiltLED}</span>
						</div>
						<div className="flex justify-between">
							<span className="font-medium text-zinc-400">Inbuilt Bulb Holder:</span>
							<span className="text-zinc-200">{productData.inbuiltBulbHolder}</span>
						</div>
						<div className="flex justify-between">
							<span className="font-medium text-zinc-400">Charging Transformer Based:</span>
							<span className="text-zinc-200">{productData.chargingTransformerBased}</span>
						</div>
						<div className="flex justify-between">
							<span className="font-medium text-zinc-400">Charging SMPS Based:</span>
							<span className="text-zinc-200">{productData.chargingSMPSBased}</span>
						</div>
					</div>
				</div>
			)
		}
	}

	return (
		<section className="mx-auto max-w-7xl px-4 py-20">
			<header className="mb-10 text-center">
				<h1 className="text-4xl font-bold md:text-5xl">Our Products</h1>
				<p className="mx-auto mt-3 max-w-2xl text-zinc-300">Explore our range below.</p>
			</header>

			{/* SECTION 1: Transformer Based Charging */}
			<ScrollableSection title="Transformer Based Charging">
				{transformerProducts.map((product) => (
					<div key={product.src} className="w-80 flex-shrink-0">
						<ProductCard 
							imageSrc={product.src} 
							productData={{ ...radianceCommonSpecs, ...product }} 
							onOpen={(data) => setOpenProduct({ ...data, productType: 'radiance' })} 
						/>
					</div>
				))}
			</ScrollableSection>

			{/* SECTION 2: SMPS Based Charging */}
			<ScrollableSection title="SMPS Based Charging">
				{smpsProducts.map((product) => (
					<div key={product.src} className="w-80 flex-shrink-0">
						<ProductCard 
							imageSrc={product.src} 
							productData={{ ...radianceCommonSpecs, ...product }} 
							onOpen={(data) => setOpenProduct({ ...data, productType: 'radiance' })} 
						/>
					</div>
				))}
			</ScrollableSection>

			{/* SECTION 3: Theeta Coil ISI (Hot Plate) */}
			<ScrollableSection title="Theeta Coil ISI (Hot Plate)">
				{theetaProducts.map((product) => (
					<div key={product.src} className="w-80 flex-shrink-0">
						<ProductCard 
							imageSrc={product.src} 
							productData={product.isInfrared 
								? { ...infraredSpecs, ...(product.colour && { colour: product.colour }) } 
								: { ...theetaCommonSpecs, ...product }
							} 
							onOpen={(data) => setOpenProduct({ ...data, productType: product.isInfrared ? 'infrared' : 'theeta' })} 
						/>
					</div>
				))}
			</ScrollableSection>

			<div className="mt-10 flex items-center justify-center">
				<a href="/contact" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500">
					Learn More
				</a>
			</div>

			{/* Modal */}
			{openProduct && (
				<div
					role="dialog"
					aria-modal="true"
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
					onClick={() => setOpenProduct(null)}
				>
					<div className="relative flex max-h-[90vh] max-w-6xl flex-col gap-4 rounded-lg bg-zinc-900 md:flex-row" onClick={(e) => e.stopPropagation()}>
						<button
							type="button"
							aria-label="Close"
							onClick={() => setOpenProduct(null)}
							className="absolute -right-3 -top-3 z-10 rounded-full bg-white/90 p-2 text-black shadow hover:bg-white"
						>
							×
						</button>
						<div className="flex-1 overflow-hidden rounded-lg">
							<img src={openProduct.imageSrc} alt="Product Preview" className="h-full w-full object-contain" />
						</div>
						<div className="flex flex-1 flex-col justify-center rounded-lg border border-white/10 bg-white/5 p-6 md:p-8 overflow-y-auto max-h-[90vh]">
							<h3 className="mb-6 text-2xl font-bold text-white">Product Specifications</h3>
							{renderProductSpecs(openProduct.productData, openProduct.productType)}
						</div>
					</div>
				</div>
			)}
		</section>
	)
}
