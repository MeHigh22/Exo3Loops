// let multiplicateur = parseInt(5)

// for(let i = 1; i <= 10; i++){
//     const result = i * multiplicateur;
//     console.log(`${multiplicateur} * ${i} = ${result}`)
// }


// A la place de skipper de un, on incrémente de deux avec la dernière propriété.
// for(let i = 1; i <= 10; i+=2){
//     const result = i * multiplicateur;
//     console.log(`${multiplicateur} * ${i} = ${result}`)
// }

// let desc = 2
// //On va commencer à 22.
// for(let i = 22; i > 1 ; i-=2 ){
//     console.log(`${i - desc }`);
// }

// let array = ["Farhad", "Yassin", "Alexis", "Kevin", "Junior", "Andy", "Tania", "Issam", "Mohammed","Mihai", "Loïc", "Charles", "William", "Oussama", "Ilyas", "Anthony", "Dorian", "Alain"];
// let longPrenom = [];

// for (let index = 0; index < array.length; index++) {
//     if(array[index].length > 5){
//         longPrenom.push(array[index])
//     }
//     console.log(longPrenom);
// }

// let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
// let grossesSommes = [];

// for(let index = 0; index < sommes.length; index++){
//     if(sommes[index] > 60){
//         grossesSommes.push(sommes[index]);
//         sommes.splice(index, 1);
//         --index;
//     }
// }
// console.log(grossesSommes);
// console.log(sommes)

//Exo 6
// let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
// let typeString= [];
// let typeNumber = [];
// let typeObject = [];
// let typeAutre = [];

// //On va créer un switch pour chaque typeOf qu'on a, ce qui va nous permettre
// donnees.forEach(e => {
//     switch(typeof(e)){
//         case "number":
//             typeNumber.push(e)
//             break;
//         case "string":
//             typeString.push(e)
//             break;
//         case "object":
//             typeObject.push(e)
//             break;
//         default:
//             typeAutre.push(e)
//         break;
//     }
// });

// donnees.length = 0;

// console.log(typeString);
// console.log(typeNumber);
// console.log(typeObject);
// console.log(typeAutre);
// console.log(donnees);