export default function About() {
	return (
		<section className="mx-auto max-w-5xl px-4 py-20">
			<header className="mb-12 text-center">
				<h1 className="text-4xl font-bold md:text-5xl mb-4">About Us</h1>
			</header>

			{/* Who We Are */}
			<div className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-white">Who We Are</h2>
				<p className="text-zinc-300 leading-relaxed">
					Radiance is an Indian manufacturer focused on dependable electrical and power backup solutions. With years of hands-on experience in power electronics and heating components, we design products that balance performance, reliability, and value.
				</p>
			</div>

			{/* What We Do */}
			<div className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-white">What We Do</h2>
				<p className="text-zinc-300 mb-4 leading-relaxed">
					We manufacture and supply:
				</p>
				<ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
					<li>Backup battery systems</li>
					<li>Home UPS and inverter-based solutions</li>
					<li>Heating and theta coils for domestic and commercial use</li>
				</ul>
				<p className="text-zinc-300 mt-4 leading-relaxed">
					Our approach emphasizes solid engineering, quality materials, and strict testing standards.
				</p>
			</div>

			{/* Our Philosophy */}
			<div className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-white">Our Philosophy</h2>
				<p className="text-zinc-300 mb-4 leading-relaxed">
					At Radiance, we believe power solutions should be:
				</p>
				<div className="space-y-4">
					<div className="rounded-lg border border-white/10 bg-white/5 p-4">
						<h3 className="font-semibold text-white mb-2">Reliable</h3>
						<p className="text-zinc-300 text-sm">Perform consistently without compromise</p>
					</div>
					<div className="rounded-lg border border-white/10 bg-white/5 p-4">
						<h3 className="font-semibold text-white mb-2">Practical</h3>
						<p className="text-zinc-300 text-sm">Designed for real usage, not ideal conditions</p>
					</div>
					<div className="rounded-lg border border-white/10 bg-white/5 p-4">
						<h3 className="font-semibold text-white mb-2">Durable</h3>
						<p className="text-zinc-300 text-sm">Built to last, not just to sell</p>
					</div>
				</div>
			</div>

			{/* Our Commitment */}
			<div className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-white">Our Commitment</h2>
				<p className="text-zinc-300 leading-relaxed">
					We are committed to continuous improvement, customer trust, and delivering products that stand up to daily use and long-term demand.
				</p>
			</div>
		</section>
	)
}
