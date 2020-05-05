class ClassDemo {
    public readonly fullName: string;
    public age: number;

    constructor(fullName: string, age: number) {
        this.fullName = fullName;
        this.age = age;
    }

    public display(): void {
        console.log(this.fullName);
        console.log(this.age)
    }
}

function UiMiddleware() {
    let demoObj = new ClassDemo("Kishor", 35);
    demoObj.display();

    demoObj.age = 33;
    //demoObj.fullName = "Kishor Naik";// Cannot assign to 'fullName' because it is a read-only property.

    demoObj.display();
}

UiMiddleware();