const person = {
    name: 'safty',
    age: 23,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places' : ['bandarban', 'sundarban']
}

console.log(person.married)
const income = person.salary;
console.log(income);
console.log(person['profession'])
const boyosh = person['age'];
console.log(boyosh)
console.log(person["fav places"])

person.salary = 34000;
person["fav places"] = ['mali','pataya']
console.log(person);

const keyName = 'profession';
console.log(person[keyName])
console.log(keyName)
person[keyName] = 'devops'
console.log(person)