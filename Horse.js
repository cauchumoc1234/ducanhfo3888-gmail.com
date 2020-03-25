function Horse(name){
    this.name = name;
}
Horse.prototype.eat = function(){
    console.log("Eating")
}
module.exports = Horse;