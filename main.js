array = [1,2,3,4]  //spread operator

array1 = [...array, 5,6,7];

console.log(array1);

arr1 = [1,2,3,4]
arr2=[5,6,7,8]


const [a,b,  ...others] =[...arr1, ...arr2]

console.log(a, b, others);