// Ex 1
//- functie care afiseaza in consola o proprietate a obiectului;
//-3 obiecte care au ca metoda functia data;
//folositi call,apply si bind astfel ca chemarea metodei dintr-un 
//obiect sa afiseze proprietatea din altul.
//Ex1.1-1.2
const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}
const person1 = {
    firstName:"Michael",
    lastName:"Duglas"
}
const person2 = {
    firstName:"Dany",
    lastName:"Moor"
}
const person3 = {
    firstName:"John",
    lastName:"Travolta"
}
console.log( person.fullName.call(person1) )
console.log( person.fullName.call(person2) )
console.log( person.fullName.call(person3) )

//Node index :Michael Duglas  Dany Moor  John Travolta
 

//Ex1.3
const car = {
    model: 'Fiat',
    year: 2000,
    showModel: function(color, engine){
        console.log(this.model, color, engine)
    }
}
const anotherCar = {
    model: 'BMW',
    year: 2020
    showModel:function(){
        console.log(this.model)
    }
}
anotherCar.showModel()
//Node index 'BMW'

car.showModel.call(anotherCar, 'black', 'metan')
//Node index:BMW black metan

car.showModel.apply(anotherCar, ['black', 'metan'])
//Node index : BMW black metan

const modelShower = car.showModel.bind(anotherCar)
modelShower('green', 'diesel')
//Node index : BMW green diesel



//Ex.2
//Creati un obiect si adaugati proprietati noi la fiecare din ele
//cel putin un atribut trebuie sa fie false si aratati cum acest
//atribut afecteaza obiectul(atributul writable-false ,nu permite
//de schimbat value pentru un anumit key a obiectului.

const person = {
    name: 'Dany',
    age: 28
}
Object.defineProperty(person, 'height' ,{
    value: 'hight',
    writable: false,
    enumerable: true,
    configurable: true,

})
person.height = 'bass'
/console.log(person)

//Node index:name: 'Dany'.age:28, height:'hight'


//Ex.3
//Creati un obiect si aplicati o metoda care nu permite ca obiectul
//sa fie exstins

const person = {
    name: 'John',
    age: 18
}
person.id = 28282828
console.log(person)

Object.preventExtensions(person)
person.city = 'Lima'
console.log(person)

//Node index:name: 'John', age: 18, id: 28282828