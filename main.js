gsap.to('.box1', {
	x: 2000,

	scrollTrigger: {
		trigger: '.box1',
		start: 'top 50%',
		end: 'top 0%',
		scrub: 1,
		markers: true,
		id: 'box1',
	},
});

gsap.to('.box2', {
	x: 4000,

	scrollTrigger: {
		trigger: '.box1',
		start: 'top 50%',
		end: 'top 0%',
		scrub: 1,
		markers: true,
		id: 'box2',
	},
});
