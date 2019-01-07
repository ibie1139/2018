
class Computer {
    //Here, constructor is like the default value
    constructor() {
       this.id= 0;//though this is a constuctor, it's of Class, not of Object, thus use ";", not using "," between the properties
       this.type = 'unknown';
    }
    insertInfo(id, type) {
        this.id = id;
        this.type = type;
    }
}

//Derived Class
class Computer1 extends Computer {
    constructor() {
        super();
        this.brand = 'Unknown';
    }
    insertInfo(type, id, brand) {
        super.insertInfo(type, id);
        this.brand = brand;
        return `Computer id: ${this.id}; type: ${this.type}; brand:${this.brand}`;
    }
}
let computer1 = new Computer1();

export { Computer, Computer1, computer1 };