var demo = /** @class */ (function () {
    function demo(fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }
    demo.prototype.display = function () {
        console.log(this.fullName);
        console.log(this.age);
    };
    return demo;
}());
function UiMiddleware() {
    var demoObj = new demo("Kishor", 35);
    demoObj.display();
    demoObj.age = 33;
    //demoObj.fullName = "Kishor Naik";// Cannot assign to 'fullName' because it is a read-only property.
    demoObj.display();
}
UiMiddleware();
