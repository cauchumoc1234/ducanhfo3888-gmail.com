var chalk = require('chalk');
function Cat(name){
    this.name = name;
}
Cat.prototype.sayHi = function(){
    console.log("Hi ! I am a cat. My name is " + chalk.blue(this.name));
};
module.exports = Cat;