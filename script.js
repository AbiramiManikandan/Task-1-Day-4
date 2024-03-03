//Print odd numbers in an array
//Using an Anonymous Function
(function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const oddNumbers = numbers.filter(function(num) {
        return num % 2 !== 0;
    });
    console.log("Odd numbers:", oddNumbers);
})();

//Using an IIFE (Immediately Invoked Function Expression)
(function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const oddNumbers = (function() {
        return numbers.filter(function(num) {
            return num % 2 !== 0;
        });
    })();
    console.log("Odd numbers:", oddNumbers);
})();

//Convert all the strings to title caps in a string array
//Using an Anonymous Function
(function() {
    const strings = ["hello world", "good morning", "javascript is awesome"];
    const titleCapsStrings = strings.map(function(str) {
        return str.toLowerCase().split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
    console.log("Original strings:", strings);
    console.log("Title caps strings:", titleCapsStrings);
})();

//Using an IIFE (Immediately Invoked Function Expression)
(function() {
    (function() {
        const strings = ["hello world", "good morning", "javascript is awesome"];
        const titleCapsStrings = strings.map(function(str) {
            return str.toLowerCase().split(' ').map(function(word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(' ');
        });
        console.log("Original strings:", strings);
        console.log("Title caps strings:", titleCapsStrings);
    })();
})();

//Sum of all numbers in an array
//Using an Anonymous Function
(function() {
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce(function(total, num) {
        return total + num;
    }, 0);
    console.log("Sum of numbers:", sum);
})();

//Using an IIFE (Immediately Invoked Function Expression)
(function() {
    (function() {
        const numbers = [1, 2, 3, 4, 5];
        const sum = numbers.reduce(function(total, num) {
            return total + num;
        }, 0);
        console.log("Sum of numbers:", sum);
    })();
})();


//Return all the prime numbers in an array
//Using an Anonymous Function
(function() {
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const primeNumbers = numbers.filter(function(num) {
        return isPrime(num);
    });
    console.log("Prime numbers:", primeNumbers);
})();

//Using an IIFE (Immediately Invoked Function Expression)
(function() {
    (function() {
        function isPrime(num) {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }

        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const primeNumbers = numbers.filter(function(num) {
            return isPrime(num);
        });
        console.log("Prime numbers:", primeNumbers);
    })();
})();


//Return all the palindromes in an array
//Using an Anonymous Function
(function() {
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    const strings = ["madam", "racecar", "hello", "level", "world"];
    const palindromes = strings.filter(function(str) {
        return isPalindrome(str);
    });
    console.log("Palindromes:", palindromes);
})();

//Using an IIFE (Immediately Invoked Function Expression)
(function() {
    (function() {
        function isPalindrome(str) {
            return str === str.split('').reverse().join('');
        }

        const strings = ["madam", "racecar", "hello", "level", "world"];
        const palindromes = strings.filter(function(str) {
            return isPalindrome(str);
        });
        console.log("Palindromes:", palindromes);
    })();
})();


//Return median of two sorted arrays of the same size.
//Using an Anonymous Function
(function() {
    (function() {
        function findMedianSortedArrays(nums1, nums2) {
            const merged = nums1.concat(nums2).sort((a, b) => a - b);
            const len = merged.length;
            const mid = Math.floor(len / 2);
            if (len % 2 === 0) {
                return (merged[mid - 1] + merged[mid]) / 2;
            } else {
                return merged[mid];
            }
        }

        const nums1 = [1, 3, 5];
        const nums2 = [2, 4, 6];
        console.log("Median:", findMedianSortedArrays(nums1, nums2));
    })();
})();

//Using an IIFE (Immediately Invoked Function Expression)
(function() {
    (function() {
        function findMedianSortedArrays(nums1, nums2) {
            const merged = nums1.concat(nums2).sort((a, b) => a - b);
            const len = merged.length;
            const mid = Math.floor(len / 2);
            if (len % 2 === 0) {
                return (merged[mid - 1] + merged[mid]) / 2;
            } else {
                return merged[mid];
            }
        }

        const nums1 = [1, 3, 5];
        const nums2 = [2, 4, 6];
        console.log("Median:", findMedianSortedArrays(nums1, nums2));
    })();
})();


//Remove duplicates from an array
//Using an Anonymous Function
(function() {
    function removeDuplicates(arr) {
        return arr.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
    }

    const array = [1, 2, 2, 3, 4, 4, 5];
    const uniqueArray = removeDuplicates(array);
    console.log("Array with duplicates:", array);
    console.log("Array without duplicates:", uniqueArray);
})();

//Using an IIFE (Immediately Invoked Function Expression)
(function() {
    (function() {
        function removeDuplicates(arr) {
            return arr.filter((value, index, self) => {
                return self.indexOf(value) === index;
            });
        }

        const array = [1, 2, 2, 3, 4, 4, 5];
        const uniqueArray = removeDuplicates(array);
        console.log("Array with duplicates:", array);
        console.log("Array without duplicates:", uniqueArray);
    })();
})();


//Rotate an array by k times
//Using an Anonymous Function
(function() {
    function rotateArray(arr, k) {
        const n = arr.length;
        k %= n; // Ensure k is within the range of array length
        const rotated = arr.slice(n - k).concat(arr.slice(0, n - k));
        return rotated;
    }

    const array = [1, 2, 3, 4, 5];
    const k = 2;
    const rotatedArray = rotateArray(array, k);
    console.log("Original array:", array);
    console.log("Rotated array:", rotatedArray);
})();

//Using an IIFE (Immediately Invoked Function Expression)
(function() {
    (function() {
        function rotateArray(arr, k) {
            const n = arr.length;
            k %= n; // Ensure k is within the range of array length
            const rotated = arr.slice(n - k).concat(arr.slice(0, n - k));
            return rotated;
        }

        const array = [1, 2, 3, 4, 5];
        const k = 2;
        const rotatedArray = rotateArray(array, k);
        console.log("Original array:", array);
        console.log("Rotated array:", rotatedArray);
    })();
})();



