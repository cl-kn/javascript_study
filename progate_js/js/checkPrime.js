export let CheckPrime = class  {

    checkPrime(num){

        if (num == 0 || num == 1) {
            return false;
        }

        for (let i = 2; i < num; i++) {
            if (num % i == 0) 
                return false;
        }
        return true;
    }

    printPrime(primeNumber) {
        let count = 0;

        for (let i = 0; i < primeNumber; i++) {
            if (this.checkPrime(i) == false) {
                // code
            } else {
                count++;
            }
        }
        console.log(primeNumber + "以下の素数合計：" + count + "個");
    }
}

// export class CheckPrime {

//     function checkPrime(num) {

//         if (num == 0 || num == 1) {
//             return false;
//         }

//         for (let i = 2; i < num; i++) {
//             if (num % i == 0)
//                 return false;

//         }
//         return true;
//     }

//     function printPrime (primeNumber) {

//         let count = 0;

//         for (let i = 0; i < primeNumber; i++) {
//             if (checkPrime(i) == false) {

//             }else {
//                 count++;
//             }
//         }
//     }

//     console.log(primeNumber + "以下の素数合計：" + count + "個");

// }
