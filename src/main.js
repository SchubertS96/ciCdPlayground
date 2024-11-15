import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Sebastian Schubert',
		// In the following fields you can either give a single string,
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Pipelines', 'Automatisation', 'New Entry'
		],
		// Which CI/CD tools do you use in your project?
		tools: ':unsure:',
		// What do you want to learn in this workshop? 
		expectations: [
			'Newbie introduction to CI/CD'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'family',
			'playing computer games'
		]
	}
});
