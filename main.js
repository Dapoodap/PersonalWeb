var typed = new Typed('#multiText', {
	strings: ['Frontend Developer.', 'UI Designer.', 'Student.'],
	typeSpeed: 60,
	backSpeed:60,
	loop: true,
	loopCount: Infinity,
	startDelay:500,
});
const scrollUp = ScrollReveal({
	origin :'top',
	distance : '30px',
	duration : '4000',
	reset : true
})
scrollUp.reveal('.face,.me,.porto,.card--1,.card--2,.card--3,.edu',{
	interval:200
})
