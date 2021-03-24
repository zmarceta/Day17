// Lodash

const _ = require('lodash');

// only change code below this line
// users nested array with four object starts here

var users = [
	{ firstName: "John", lastName: "Doe", age: 24, gender: "male" },
	{ firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
	{ firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
	{ firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
]

// users nested array with four object ends here

// getUsers function - list of users starts here

function getUsers() {
	var output = "";
	for (let i = 0; i < users.length; i++) {
		console.log(`${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}`);
	}
	return output;
}
// getUsers function - list of users ends here

// findUser(lastName, gender) function starts here
function findUser(lastName, gender) {
	try {
		var user = _.find(users, { 'lastName':lastName, 'gender':gender});
		var iFindUser = `${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
		console.log(iFindUser);
		return iFindUser;
	} catch (error) {
		console.log("Cannot read property 'firstName' of undefined");
		return "Cannot read property 'firstName' of undefined";		
	}
}


// findUser(lastName, gender) function ends here
// Only change code above this line

getUsers();
findUser("Doe","male");
module.exports = findUser;