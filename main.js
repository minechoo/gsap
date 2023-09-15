let split = new SplitText('h1');
console.log(split);

let tl = gsap.timeline({
	scrollTrigger: {
		trigger: '#sec2',
		start: 'top 50%',
		end: 'top 0%',
		markers: true,
		toggleActions: 'restart pause reverse reset',
	},
});

tl.from(split.chars, { scale: 2, opacity: 0, stagger: 0.1 });
tl.from('button', { x: 500, opacity: 0 });
