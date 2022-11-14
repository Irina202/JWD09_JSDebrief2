
function countDown(){
    let count = 10;
    while (count>=0){
        console.log(count--)
    }
};
countDown();


function writeCards(arr= ['Melanie', 'Liza', 'Ann', 'Kate'], event='wedding') {
for (let i=0; i < arr.length; i++) {
    console.log(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
}
}

writeCards();