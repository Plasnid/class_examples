// * thats right, es6 makes use of the class keyword
class Henchman {
    // * classes need to have a constructor, and that constructor is called automatically
    constructor(henchName, likesCandygrams, favouriteSheriff) {
        // * "this" refers to the Henchman class
        //* we are wetting the values of the henchman based on our inputs henchName, likesCandygrams, favouriteSheriff
        this.likesCandygrams = likesCandygrams;
        this.favouriteSheriff = favouriteSheriff;
        this.henchName = henchName;
        this.weaponOfChoice = "evil stare";
        console.log(`There is a new henchman in town and his name is ${this.henchName}`);
        if (this.likesCandygrams == true) {
            console.log(`I hear he likes candy from Sherif ${this.favouriteSheriff}`)
        }
    }
    //notice that we don't need the function keyword to declare a function
    acceptCandyGram() {
        let chanceKaboom = Math.random();
        if (chanceKaboom < 0.90) {
            console.log(`${this.henchName} is pawn of fate!`);
        } else {
            console.log(`Yum! Candy from Sherif ${this.favouriteSheriff}!`);
        }
    }
    //static functions are accessible from the class, but not from instances of the class
    static isHenchmanTough(henchName) {
        if (henchName == "Mongo") {
            console.log(`${henchName} just punched out sheriffs horse!`);
        } else {
            console.log(`not sure if ${henchName} is tough`)
        }
    }
    //getters and setters expose values without exposing what they are really called in the class
    get weapon() {
        return this.weaponOfChoice;
    }
    set weapon(wp) {
        this.weaponOfChoice = wp;
    }
}
let mongo = new Henchman("Mongo", true, "Bart");
Henchman.isHenchmanTough("Mongo");
console.log(`This Henchman fights with ${mongo.weapon}`);
mongo.weapon = "fists";
console.log(`This Henchman fights with ${mongo.weapon}`);

//* extending a class
//we begin with class LifeForm
class LifeForm{
    //as with all classes, this has a constructor
    constructor(homePlanet, foodType){
        console.log(`I am a lifeform that is from ${homePlanet} and I eat ${foodType}`);
        this.homePlanet = homePlanet;
        this.foodType = foodType;
    }
    //lifeform has an eat method too
    eat(food){
        if(food==this.foodType){
        console.log(`I like this ${food} meal!`);
        }else{
        console.log(`I don't like the ${food} meal!`);
        }
    }
};
console.log("lets make a lifeform!");
    //here we make an ameoba which loves to eat minerals
    let ameoba = new LifeForm("Earth", "Minerals");
    //and here we can see that the minerals are a hit, but the steak, not so much
    ameoba.eat("Minerals");
    ameoba.eat("Steak");
  //now we make a new class that has everything that LifeForm was, but with a little something extra
  //it extends from LifeForm
class Florb extends LifeForm{
    //unlike lifeform, this one asks for the number of tentacles
    constructor(homePlanet, foodType, numTentacles){
      //just like with ES5 we call the constructor with the values needed by the original class
        super(homePlanet, foodType);
        this.numTentacles = numTentacles;
    }
    //our Florb can trot, but a basic lifeform cannot
    tentacleTrot(){
        console.log("I am trotting along on my tentacles!!");
    }
};

let alien = new Florb("Zerkblatt", "Snozwuzzles", 12);
alien.eat("Xanthborks");
alien.tentacleTrot();
