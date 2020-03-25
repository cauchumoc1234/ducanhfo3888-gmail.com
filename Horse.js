function Horse(name){
    this.name = name;
}
Horse.prototype.eat = function(){
    console.log("Eating")
}
Horse.prototype.sleep = function(){
    console.log('Sleeping');
}
module.exports = Horse;