interface MyPersona{
	first_name:string;
	last_name:string;
	twitter_account?:string;
}

let personaUno:MyPersona = {
	first_name:'Willy',
	last_name:'Bardales',
	twitter_account:'@willybc'
}

let personaDos:MyPersona = {
	first_name:'Pepe',
	last_name:'Perez',
}

console.log(personaUno);
console.log(personaDos);