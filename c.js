// let arr = [1,2,3,4,5,6,7,8,10]; //Soal yang diketahui
// const findMissingNum = (arr) => { // membuat variable beserta arrow function
//   for(var i = 0; i < arr.length - 1; i++) { // menggunakan perulangan for dan kondisi yang diambil adalah pangjang data
// let angka1 = arr[i]+1;
// let angka2 = arr[i +1];
// console.log($('(angka1) = $(angka2)'))
//     if(arr[i] + 1 != arr[i+1] ) { 
//       return arr[i] + 1;
//     }
//   }
  
//   return false;
// }
// console.log(findMissingNum(arr)); // Returns 9, the missing number

// //Pendekatan saya terhadap solusi ini adalah dengan menyadari bahwa angkanya berurutan. 
// //Karena array sudah diurutkan, kita bisa menyelesaikannya dalam satu kali jalan 
// //dengan melihat ke depan menggunakan arr [i] + 1 dan membandingkannya dengan 
// //arr [i + 1]. Jika arr [i + 1] tidak sama dengan arr [i] + 1, artinya arr [i] + 1 adalah bilangan yang hilang.



// const heroes = [
//     { name: "Zilong", weapon: "qwertyujimp"},
//     { name: "Uranus", weapon: "zzssdtwmncvaklq"},
//     { name: "Faany", weapon: "qwerjzaklgiuop"}
// ]


// heroes.forEach(hero =>{
//     let word = { j: 0, a: 0, g:0, o:0}
//     for(let i = 0; i < hero.weapon.length; i++){
//         for (key in word) {
//             if(hero.weapon[i] == key) word[key]++
//         }
//         hero.result = word 
//     }
//     let counter = 0
//     for (key in word){
//         if(word[key] == 1) counter++
//     }
//     if(counter == 4) console.log(`${hero.name} is the best hero`)
// })


//Clue : hero yang terbaik mengandung huruf "j, a, g, o " didalam weapon
// Tebak siapa hero terbaik nya 
const heroes = [
    { name: "Zilong", weapon: "qwertyujimp"},
    { name: "Uranus", weapon: "zzssdtwmncvaklq"},
    { name: "Faany", weapon: "qwerjzaklgiuop"}
]


heroes.forEach(hero =>{
    let word = { j: 0, a: 0, g:0, o:0}
    for(let i = 0; i < hero.weapon.length; i++){
        for (key in word) {
            if(hero.weapon[i] == key) word[key]++
        }
        hero.result = word 
    }
    let counter = 0
    for (key in word){let arr = [1,2,3,4,5,6,7,8,10]; //Soal yang diketahui
        // const findMissingNum = (arr) => { // membuat variable beserta arrow function
        //   for(var i = 0; i < arr.length - 1; i++) { // menggunakan perulangan for dan kondisi yang diambil adalah pangjang data
        // let angka1 = arr[i]+1;
        // let angka2 = arr[i +1];
        // console.log($('(angka1) = $(angka2)'))
        //     if(arr[i] + 1 != arr[i+1] ) { 
        //       return arr[i] + 1;
        //     }
        //   }
          
        //   return false;
        // }
        // console.log(findMissingNum(arr)); // Returns 9, the missing number
        
        // //Pendekatan saya terhadap solusi ini adalah dengan menyadari bahwa angkanya berurutan. 
        // //Karena array sudah diurutkan, kita bisa menyelesaikannya dalam satu kali jalan 
        // //dengan melihat ke depan menggunakan arr [i] + 1 dan membandingkannya dengan 
        // //arr [i + 1]. Jika arr [i + 1] tidak sama dengan arr [i] + 1, artinya arr [i] + 1 adalah bilangan yang hilang.
        
        
        
        // const heroes = [
        //     { name: "Zilong", weapon: "qwertyujimp"},
        //     { name: "Uranus", weapon: "zzssdtwmncvaklq"},
        //     { name: "Faany", weapon: "qwerjzaklgiuop"}
        // ]
        
        
        // heroes.forEach(hero =>{
        //     let word = { j: 0, a: 0, g:0, o:0}
        //     for(let i = 0; i < hero.weapon.length; i++){
        //         for (key in word) {
        //             if(hero.weapon[i] == key) word[key]++
        //         }
        //         hero.result = word 
        //     }
        //     let counter = 0
        //     for (key in word){
        //         if(word[key] == 1) counter++
        //     }
        //     if(counter == 4) console.log(`${hero.name} is the best hero`)
        // })
        if(word[key] == 1) counter++
    }
    if(counter == 4) console.log(`${hero.name} is the best hero`)
});






