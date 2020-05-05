interface IPerson {
    readonly fullName: string,
    age: number
};

let personObj: IPerson = {
    fullName: "Kishor Naik",
    age: 35
};

console.log(personObj.fullName);
console.log(personObj.age);

//personObj.fullName = "Kishor Naik"; //Cannot assign to 'fullName' because it is a read-only property.


// ReadOnly Type
let personObj1: Readonly<IPerson> = {
    fullName: "Eshaan Naik",
    age: 35
}

console.log(personObj1.fullName);
console.log(personObj1.age);

//personObj1.age = 35; // Cannot assign to 'age' because it is a read-only property.
//personObj1.fullName = "Kishor Naik"; // Cannot assign to 'age' because it is a read-only property.



