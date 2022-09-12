const usersJsonObj = require('./json_example')

// console.log(usersJsonObj)

// access elements of json
// 1st way
// console.log(usersJsonObj.user1.age)

// 2nd way
// console.log(usersJsonObj["user1"]["age"])

// 2nd is better because it can be used with variables
const user = "user1"
// console.log(usersJsonObj.user) 
// console.log(usersJsonObj[user])

// manipulate the data in a json object
const newUsersAge = 20 
usersJsonObj[user].age = newUsersAge
console.log(usersJsonObj["user1"])

// how many users in the json object
console.log(Object.keys(usersJsonObj))
console.log(Object.keys(usersJsonObj).length)