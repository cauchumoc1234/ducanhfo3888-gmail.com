function Horse(name){
    this.name = name;
}
Horse.prototype.run = function(){
    console.log(this.name+ " is running");
}

Horse.prototype.eat = function(){
    console.log("Eating")
}
Horse.prototype.slap = function(){
    console.log("Slapping");
}
Horse.prototype.sleep = function(){
    console.log('Sleeping');
}
module.exports = Horse;