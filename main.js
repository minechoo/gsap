let tl = gsap.timeline({
	scrollTrigger: {
		trigger: '#sec2',
		start: 'top 50%',
		end: 'top 0%',
		markers: true,
		//toggleActions: 'restart pause reverse reset',
		scrub: 1,
	},
});

tl.to('.box', {
	scale: 3,
	opacity: 0,
	rotation: 360,
});
