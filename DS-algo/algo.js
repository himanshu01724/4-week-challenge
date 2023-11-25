// // const arr = [100,23,96,5,89,1,-1,3]

// // const twoSum = (num,sum) =>{
// //     const res = []
// //     for(let i=0;i<num.length;i++){
// //         for(let j=i+1;j<num.length;j++){
// //             if (num[i]+num[j] == sum){
// //                 res.push(num[i],num[j])
// //             }
            
// //         }
// //     }
// //     return res
    
// // }

// // const bubbleSort = (num) =>{
// //     let res = 0;
// //     for(let i=0;i<num.length;i++){
// //         for(let j=0;j<num.length-1;j++){
// //             if (num[j+1]<num[j]){
// //                 res = num[j+1]
// //                 num[j+1]=num[j]
// //                 num[j]=res
// //             }
// //         }
// //     }
// //     return num;
// // }
// // const sorted = bubbleSort(arr);

// // const twoSumTwo = (num,inp) =>{
// //     //two pointer method or binary search algorithm
// //     l = 0;
// //     h = num.length-1;
// //     while(l<h){
// //         if (num[l]+num[h]===inp){
// //             return [num[l],num[h]]
// //         }
// //         else if(num[l]+num[h]>inp){
// //             h -=1;
// //         }
// //         else{
// //             l+=1;
// //         }
// //     }
// // }


// // const inp = [-1,0,1,2,-1,-4]

// // //3sum pending...




// // const twosum =(nums, target) => {
// //     for(let i=0;i>nums.length;i++){
// //         for(let j=0;j<nums.length;j++){
// //             if(nums[i]+nums[j+1] === target){
// //                 console.log(i,j)
// //             }
// //             else
// //                 return 0
// //         }
// //     }
// // };
// // var twosum1 = function (nums,target){
// //     for(let i=0;i<nums.length;i++){
// //         for(let j=0;j<nums.length;j++){
// //             if(nums[i]+nums[j+1] === target){
// //                 return [i,j+1]
// //             }
// //             else
// //                 return 0
// //         }
// //     }
// // }

// // console.log(twosum1(nums,target))

// // for(let i=0;i<nums.length;i++){
// //     for(let j=0;j<nums.length;j++){
// //         console.log(i,j+1)
// //     } 
// // }

// // var person = {
// //     firstName: "John",
// //     lastName: "Doe",
// //     age: 25,
// //     address: {
// //       street: "123 Main Street",
// //       city: "Anytown",
// //       state: "CA",
// //       zipCode: "12345"
// //     },
// //     hobbies: ["reading", "coding", "traveling"],
// //     isStudent: true,
// //   };

// // const {zipCode, ...other} = person.address;
// // const {firstName,...r} = person

// // // console.log(zipCode,other)
// // // console.log(firstName,r)


// // const [target,...nums]= [9,2,7,11,15]

// // const add = function(...numbers){
// //     let res = 0
// //     numbers.forEach((val)=>{
// //         res = res+val
// //     })
// //     return res
// // }

// // console.log(add(1,0,1,3,4))
// // console.log(add(...nums))


// const [case1,case2,case3,case4] = [[7,1,5,3,6,4],[7,6,4,3,1],[100,108,113,99,1000,2000],[2,4,1]]

// const stock = function(nums){
//     const newarr = [...nums]
//     newarr.sort((a,b)=>a-b)
//     console.log(newarr)
//     let init = newarr[0]
//     let final = newarr[newarr.length-1]
//     let checkinit = nums.indexOf(init)
//     let checkFinal = nums.indexOf(final)
//     console.log(nums)
//     console.log(init,final)
//     console.log(checkinit,checkFinal)
//     if (checkinit<checkFinal){
//         return final-init
//     }
//     else
//         return 0
// }

// const exchange = function(nums){
//         let res = nums[0]
//         let diff = 0
//         for(let i=1;i<nums.length;i++){
//             if(nums[i]<res){
//                 res = nums[i]
//             }
//         }
//         let posinit = nums.indexOf(res)
//         //console.log(posinit)
//         for(let i = posinit;i<posinit+1;i++){
//             for(let j = i+1;j<nums.length;j++){
//                 if (nums[j]-nums[i]>diff){
//                     diff = nums[j]-nums[i]
//                 }
//             }
//             return diff
//         }
// }

// //console.log(exchange(case4))
// //exchange(case1)


// const buySell = function(num){
//     let i = 0;
//     let j = 1;
//     let res = 0
//     while (j<num.length){
//         if (num[i]<num[j]){
//             let profit = num[j]-num[i]
//             res = Math.max(res,profit)
//         }
//         else
//             i=j
//     j+=1
//     }
//     return res
// }
// // console.log(buySell(case4))




// const problem3 = function(nums){
//     let res = 0
//     for(let i=0;i<nums.length;i++){        
//         for(let j=0;j<nums.length-i;j++){
//             if(nums[j+1]<nums[j]){
//                 res = nums[j+1]
//                 nums[j+1] = nums[j]
//                 nums[j]=res
//             }
//         }
//     }

    
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]-i != 1){
//             return true
//         }
//     }
//     return false
// }
//problem3(case5)

// const problem4 = function(num){
//     num.sort((a,b)=>a-b)
//     if(num.length <= 1){
//         return false
//     }
//     else
//     {
//     for(let i=0;i<num.length;i++){    
//         let test = num[i]-i
//         if(test < 1){
//             return true
//         }
//     }
//     return false
//     }
    
// }
//console.log(problem3(case4))
//problem4(case4)
//console.log(case4.length)
//console.log(problem4(case3))








//const [case1,case2,case3,case4,case5,case6,case7] = [[1,2,3,1],[1,2,3,4],[1,1,1,3,3,4,3,2,4,2],[0],[3,1],[0,4,5,0,3,6],[2,14,18,22,22]]


// const hashSet = (num) =>{
//     const numSet = new Set(num)
//     if(num.length === numSet.length){
//         return false
//     }
//     return true
// }
// console.log(hashSet(case7))

// const bubble = function(num){
//     let res = 0
//     for(let i=0;i<num.length;i++){
//         console.log(`first ${i}`)
//         for(let j=0;j<num.length-i;j++){
//             console.log(`second ${j}`)
//             if(num[j+1]<num[j]){
//                 res = num[j+1]
//                 num[j+1] = num[j]
//                 num[j] = res
//             }
//         }
//     }
//     return num
// }
// console.log(bubble(case7))

// const duplicate = function(num){
//     let i = 0
//     let j = 0
//     if(num.length < 1){
//         return false
//     }
//     else{
//     console.log(num)
//     for(i;i<num.length;i++){
//         for(j;j<num.length-i;j++){
//             console.log(num[i],num[j])
//             if (num[j] === num[j+1])
//                 return true
//         }
//     }
//     return false
//     }
// }
//console.log(duplicate(case6))



// const bruteForce = (num) =>{
//     for(let i = 0;i<num.length;i++){
//         console.log(`BFfirst ${i}`)
//         for(let j = 0;j<i;j++){
//             console.log(`BFsecond ${j}`)
//         }
//     }
// }
// bruteForce(case7)



// const productSelf = function(num){
// let test = []
// let res = 1

// for(let i=0;i<num.length;i++){
//     res = res*num[i]
// }
// console.log(res)
// for(let j=0;j<num.length;j++){
//     test.push(res/num[j])
// }
// return test
// }

// console.log(productSelf(case0))

const [case0,case1,case2,case3,case4,case5,case6,case7] = [[1,2,3,4],[-1,1,0,-3,3],[2,1,4,6],[1,1,1,3,3,4,3,2,4,2],[0],[3,1],[0,4,5,0,3,6],[2,14,18,22,22]]

const problem5 = function(num){
    const res = new Array(num.length).fill(1)
    let prefix = 1

    for(let i=0;i<num.length;i++){
        res[i] = prefix
        prefix*=num[i]
    }
    console.log(res)
    let postfix = 1
    for(let i=num.length-1;i>=0;i--){
        res[i]*= postfix;
        postfix*=num[i]
        console.log(res,postfix)
    }
    return res
}

//console.log(problem5(case2))

// const test = new Array(case1.length).fill(1)
// console.log(test)

var productExceptSelf = function(nums) {
    const res = new Array(nums.length).fill(1)
    let prefix = 1
    for(let i=0;i<nums.length;i++){
        res[i] = prefix
        prefix *= nums[i]
    }
    let postfix = 1
    for(let i=nums.length-1;i>=0;i--){
        res[i]*= postfix;
        console.log(res)
        postfix*= nums[i]
    }
    return res
 };

 console.log(productExceptSelf(case0))