import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Christof Happ',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Red tiles on a screen on the wall',
			'Scripts in strange programming languages',
			'Some annoying technology preventing me to finish my ticket and breaking production'
		],
		// Which CI/CD tools do you use in your project?
		tools: ':sadpanda:',
		// What do you want to learn in this workshop? 
		expectations: [
			'Share knowledge about the basics of CI/CD'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'reading books', 
			'cooking', 
			'playing computer games'
		]
	}
});
