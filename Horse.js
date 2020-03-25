function Horse(name){
    this.name = name;
}
Horse.prototype.run = function(){
    console.log(this.name+ " is running");
}Horse.prototype.eat = function(){
    console.log("Eating")
}
module.exports = Horse;