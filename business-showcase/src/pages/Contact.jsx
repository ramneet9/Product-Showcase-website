export default function Contact() {
	return (
		<section className="mx-auto max-w-5xl px-4 py-20">
			<header className="mb-10 text-center">
				<h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
				<p className="mx-auto mt-3 max-w-2xl text-zinc-300">Get in touch for enquiries, support, or quotes.</p>
			</header>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				<div className="space-y-4">
					<div className="rounded-xl border border-white/10 bg-white/5 p-5">
						<h2 className="text-xl font-semibold">Contact Details</h2>
						<div className="mt-3 space-y-2 text-zinc-300">
							<p><span className="text-zinc-400">Emails:</span> <a className="text-blue-400 hover:underline" href="mailto:newtechpower@yahoo.com">newtechpower@yahoo.com</a></p>
							<p><span className="text-zinc-400">Number:</span> <a className="text-blue-400 hover:underline" href="tel:+919115707310">9115707310</a>, <a className="text-blue-400 hover:underline" href="tel:+919212532381">9212532381</a></p>
							<p><span className="text-zinc-400">Mobile:</span> <a className="text-blue-400 hover:underline" href="tel:+917529052912">7529052912</a></p>
						</div>
					</div>

					<div className="rounded-xl border border-white/10 bg-white/5 p-5">
						<h2 className="text-xl font-semibold">Address</h2>
						<div className="mt-3 space-y-1 text-zinc-300">
							<p>Newtech power systems</p>
							<p>B-71 Opp B-52</p>
							<p>Swarn park Telco Road mundka</p>
							<p><span className="text-zinc-400">GST:</span> 07AAS PK833 9A1ZJ</p>
							<p className="pt-2"><a className="text-blue-400 hover:underline" href="https://www.google.com/maps/place/NEWTECH+POWER+SYSTEMS/data=!4m2!3m1!1s0x0:0x7d777581b718d885?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noreferrer">View on Google Maps</a></p>
						</div>
					</div>
				</div>

				<div className="rounded-xl border border-white/10 bg-white/5 p-2 md:p-3">
					<div className="h-80 w-full overflow-hidden rounded-lg border border-white/10 md:h-[480px]">
						<iframe
							title="NEWTECH POWER SYSTEMS Location"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							allowFullScreen
							className="h-full w-full"
							src="https://www.google.com/maps?q=28.6789892,77.0342543&z=15&output=embed"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}


