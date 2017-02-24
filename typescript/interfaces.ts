interface MyPersona{
	first_name:string;
	last_name:string;
	twitter_account?:string;
}

let personaUnos:MyPersona = {
	first_name:'Willy',
	last_name:'Bardales',
	twitter_account:'@willybc'
}

let personaDoss:MyPersona = {
	first_name:'Pepe',
	last_name:'Perez',
}

console.log(personaUnos);
console.log(personaDoss);