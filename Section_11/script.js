var database = [
	{
		username: "Jhon",
		password: "supersecret"
	},
	{
		username: "maria",
		password: "1234"
	},
	{
		username: "Sally",
		password: "123456"
	}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

function IsUserValid(username, password) {
	for (var i = 0; i < database.length; i++){
		if (database[i].username === username && database[i].password === password) {
			return true;
		} 
	}
	return false;
}
function signIn(username, password) {
    if (IsUserValid(username, password)) {
        console.log(newsfeed);
    }else
    {
        alert("Sorry, check your username or password!");
    }
}

var username = prompt("Username: ");
var password = prompt("Password: ");

signIn(username, password);
