export default function About() {
	const values = [
		{ title: 'Design First', desc: 'Attention to detail and brand-consistent visuals.' },
		{ title: 'Performance', desc: 'Fast, smooth, and optimized across devices.' },
		{ title: 'Reliability', desc: 'Production-ready with modern best practices.' },
	]

	return (
		<section className="mx-auto max-w-5xl px-4 py-20">
			<header className="mb-10">
				<h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
				<p className="mt-3 max-w-2xl text-zinc-300">We help small businesses showcase products with a premium, immersive web presence.</p>
			</header>

			<div className="prose prose-invert">
				<h2>Our Values</h2>
			</div>
			<ol className="relative mt-6 border-l border-white/10 pl-6">
				{values.map((v) => (
					<li key={v.title} className="mb-8">
						<span className="absolute -left-1 mt-1 h-2 w-2 rounded-full bg-blue-500" />
						<h3 className="text-lg font-semibold">{v.title}</h3>
						<p className="mt-1 text-zinc-300">{v.desc}</p>
					</li>
				))}
			</ol>
		</section>
	)
}
