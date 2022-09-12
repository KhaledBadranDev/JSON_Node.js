const usersJsonObj = require('./json_example')
// ####################################################
// Kindly uncomment only the part that you want to test
// ####################################################


// ####################################################
// print the whole json object
// console.log(usersJsonObj)
// ####################################################


// ####################################################
// access elements of a json object
// 1st way
// console.log(usersJsonObj.user1.age)

// 2nd way: bracket notation:
// console.log(usersJsonObj["user1"]["age"])

// bracket notation is better because it can be used with variables
// const user = "user1"
// console.log(usersJsonObj.user)  // would return undefined
// console.log(usersJsonObj[user])
// ####################################################


// ####################################################
// update/manipulate data in a json object
// const newUsersAge = 20 
// usersJsonObj[user].age = newUsersAge 
// console.log(usersJsonObj["user1"])
// ####################################################


// ####################################################
// how many users/keys in the json object
// console.log(Object.keys(usersJsonObj)) // prints all the keys/users
// console.log(Object.keys(usersJsonObj).length) // prints how many users/keys we have.
// ####################################################
