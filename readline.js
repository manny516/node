const readline = require('readline');

let rl =  readline.createInterface(process.stdin,process.stdout);

let personInfo = {
	name : '',
	age : '',
	hobbies : []
}

rl.question("What is your name ", (answer) =>{

	personInfo.name = answer;

	rl.question(`${personInfo.name} How old are you? `,(answer) =>{
		
		personInfo.age = answer;

		rl.setPrompt(`${personInfo.name} What are your favorite Hobbies `);
		rl.prompt();

		rl.on('line', (userHobbies) =>{

			let exitPhrase = "exit";

			if(userHobbies.toLowerCase().trim() === exitPhrase){

				rl.close();

				process.stdout.write(`You're name is ${personInfo.name},\n you are ${personInfo.age} years old,\n and your hobbies are\xa0`); 

				let hobbieReturn = personInfo.hobbies.forEach((person) =>{
					process.stdout.write(`${person.toString()},\xa0`); 
				});  

				process.stdout.write('\n\n');

			}else{

				if(userHobbies != exitPhrase){
					personInfo.hobbies.push(userHobbies);
				}

				console.log(personInfo.hobbies);
				rl.setPrompt(`${personInfo.name} What are your favorite Hobbies (if done type "exit") `);
				rl.prompt();
			}

		});

	});

});
