// Lodash

const _ = require('lodash');

// only change code below this line
// users nested array with four object starts here

var users = [
	{ id: 1, firstName: "John", lastName: "Doe", age: 24, gender: "male" },
	{ id: 2, firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
	{ id: 3, firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
	{ id: 4, firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
]

// users nested array with four object ends here

// getUsers function - list of users starts here

function getUsers() {
	var output = "";
	for (let i = 0; i < users.length; i++) {
		console.log(`${users[i].id} - ${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}`);
	}
	return output;
}
// getUsers function - list of users ends here

// findUserById(id) function starts here
function findUserById(id) {
	try {
		var user = _.find(users, { 'id':id });
		var iFindUser = `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
		console.log(iFindUser);
		return iFindUser;
	} catch (error) {
		console.log("Cannot read property 'id'");
		return "Cannot read property 'id'";		
	}
}


// findUserById(id) function ends here
// Only change code above this line

getUsers();
findUserById(7);
module.exports = findUserById;