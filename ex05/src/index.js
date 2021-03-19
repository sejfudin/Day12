var myPetsArray = [{ animalType: "Dog", name: "Pujdo" }, { animalType: "Cat", name: "Maca" }, { animalType: "Bird", name: "Tweety" }];

function myPetsFunction(pets) {
    var secondPet = pets[1].name;
    return secondPet;

}

console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;