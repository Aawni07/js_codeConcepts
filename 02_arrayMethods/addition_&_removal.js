//- push()
//> adds the ele to the end of an array
//> Modifies the original Array. Returns the new ArrayLength

//?> Append the ele to an array
let num = [1,2,3]
console.log(num.push(40));  // 4, returns the newArray length

//?> Append multiple ele to an array
console.log(num.push(50,60));   //6, returns the new Array length

//?> Append ele of an array to another Array
let alphas=['a','b','c']
let nums = [1,2,3,4]

for (const ele of alphas) {
    nums.push(ele)
}
console.log(nums);

//= Using ES_6, spreadOperator is used to spread the ele of `alphas` and push them to the `nums` array at the same time.
