var chalk = require('chalk');
function Cat(name){
    this.name = name;
}
Cat.prototype.sleep = function(){
    console.log("Sleeping");
}
module.exports = Cat;