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
	x: 2000,

	scrollTrigger: {
		trigger: '.box1',
		start: 'top 50%',
		end: 'top 0%',
		scrub: 1,
		pin: true, //해당 영역에 도달하면 현재 위치값을 기준으로 position속성이 fixed로 변경되면서 브라우저 기준으로 고정
		markers: true,
		id: 'box2',
	},
});
