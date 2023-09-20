let defaultOwner = { firstName: "마틴", lastName: "파울러" };
export function getDefaultOwner() {
    return new Person(defaultOwner);
}
export function setDefaultOwner(arg) {
    defaultOwner = arg;
}

class Person {
    constructor(data) {
        this._lastName = data.lastName;
        this._firstName = data.firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get firstName() {
        return this._firstName;
    }
}
