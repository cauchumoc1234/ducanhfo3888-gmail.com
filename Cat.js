var chalk = require('chalk');
function Cat(name){
    this.name = name;
}

Cat.prototype.sleep = function(){
    console.log("Sleeping");
}


Cat.prototype.run = function(){
    console.log("Running");
}


module.exports = Cat;