/*
An anagram is any word or phrase that exactly reproduces the letters in another order.
Write a function that creates an anagram (listing all the rearrangements of a word) of a given word.
For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, and non-words like tsae.

Hint: For your algorithm, you might want to think about a prefix and use that to create the new words.
For example, given east, use e as a prefix and you would place e in front of all six permutations of ast — ast, ats, sat, sta, tas, and tsa.
This will give you the words east, eats, esat, esta, etas, and etsa. Continue this way until you find all the anagrams for east. There should be 24 of them.
*/

/*
    Set a counter i to 0
    Until i === n, generate (n-1) permutations of the first n-1 elements adjoining the last element to each.
    Then if n is odd, switch the first element and the last one.
    If n is even, switch the ith element and the last one
    Increment i++ and repeat
*/

function anagrams(string, arr=string.split(''), n = arr.length) {

    //Base Case: <= Will be hit once n === 1, where all array values will have been pushed to the back of the array once only since n starts at arr.length.
    if (n === 1) {
        count ++
        console.log(arr, count)
    }
    else {
        //Set count i to 0 do the following operations as long as i < n-1, increment i++ and repeat
        for (let i = 0; i < n - 1; i++) {
            //Swap the last value of the array by decrementing n. Repeat the previous for loop operation through recursion with the new n value.
            anagrams(string, arr, n-1, count)
            //If n is even, swap arr[i] and arr[n-1]
            if (n % 2 === 0) {
                let placeholder = arr[i]
                arr[i] = arr[n-1]
                arr[n-1] = placeholder
            //If n is odd, swap arr[0] and arr[n-1]
            } else {
                let placeholder = arr[0]
                arr[0] = arr[n-1]
                arr[n-1] = placeholder
            }
        }
        //Swap the last value of the array by decrementing n. Repeat the previous for loop operation through recursion with the new n value.
        anagrams(string, arr, n - 1, count)
    }
}

// let count = 0
// anagrams('a')
// count = 0
// anagrams('to')
// count = 0
// anagrams('toe')
count = 0
anagrams('east')
// count = 0
// anagrams('north')
// count = 0
// anagrams('fourteen')

/*
Example for 'east':
n=4
[ 'e', 'a', 's', 't' ] 1

n=3
[ 't', 'a', 's', 'e' ] 2
[ 't', 'e', 's', 'a' ] 3
[ 't', 'e', 'a', 's' ] 4

n=2
[ 's', 'a', 't', 'e' ] 5
[ 't', 'a', 's', 'e' ] 6
[ 't', 'e', 's', 'a' ] 7
[ 's', 'e', 't', 'a' ] 8
[ 't', 'e', 's', 'a' ] 9
[ 't', 'e', 'a', 's' ] 10
[ 'a', 'e', 't', 's' ] 11
[ 't', 'e', 'a', 's' ] 12

n=1
[ 'e', 's', 't', 'a' ] 13
[ 's', 'e', 't', 'a' ] 14
[ 't', 'e', 's', 'a' ] 15
[ 'e', 't', 's', 'a' ] 16
[ 's', 't', 'e', 'a' ] 17
[ 't', 's', 'e', 'a' ] 18
[ 't', 's', 'a', 'e' ] 19
[ 's', 't', 'a', 'e' ] 20
[ 'a', 't', 's', 'e' ] 21
[ 't', 'a', 's', 'e' ] 22
[ 's', 'a', 't', 'e' ] 23
[ 'a', 's', 't', 'e' ] 24

*/


function anagramsAlt(string) {
    let arr = string.split('')
    let arr2 = []
    let n = arr.length
    let count = 0;

    //Populate arr2
    for (let i = 0; i < n; i++) {
        arr2.push(0)
    }

    count ++
    console.log(arr, count)

    let e = 0;
    while (e < n) {
        if (arr2[e] < e) {
            if (e % 2 === 0) {
                let placeholder = arr[0]
                arr[0] = arr[e]
                arr[e] = placeholder
            } else {
                // arr[arr2[e]], arr[e]
                let placeholder = arr[arr2[e]]
                arr[arr2[e]] = arr[e]
                arr[e] = placeholder
            }
            count ++
            console.log(arr, count)
            arr2[e]++
            e = 0
        } else {
            arr2[e] = 0
            e++
        }
    }
}

// anagramsAlt('a')
// anagramsAlt('to')
// anagramsAlt('toe')
// anagramsAlt('east')
// anagramsAlt('north')
// anagramsAlt('fourteen')
