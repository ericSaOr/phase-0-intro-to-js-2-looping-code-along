
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
//   } 

//   const gifts = ["teddy bear", "drone", "doll"];

//   function wrapGifts(gifts) {
//       for (let i = 0; i < gifts.length; i++){
//       console.log('Wrapped ${gifts[i]} and added a bow!');
//       debugger;
//       }

//       return gifts;
//   }

//   wrapGifts(gifts);

const arr = ['Lisa', 'Kaitlin', 'Jan'];
const str = 'suprise';

function writeCards (arr, str){
    const messageArray = [];
    for(let i = 0; i < arr.length; i++){
       messageArray.push(`Thank you, ${arr[i]}, for the wonderful ${str} gift!`);
        
    }
    return messageArray;

}
// writeCards(["Eric", "Alex", "Bob"], "birthday");

function countDown (num = 10){
    while( num >= 0){
        console.log(num--);
    }
}

