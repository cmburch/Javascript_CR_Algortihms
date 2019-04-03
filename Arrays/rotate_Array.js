// Rotate Array
// Given an array of integers, rotate the array by 'N' elements.

let adjustRotations = (length,n)=>{

    n = n % length;
    if(n < 0){
        n = n + length;
    }
    return n;
}

let reverse_array = (arr,start,end)=>{
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
let rotate_array = (arr,n)=>{
    if(arr.length <= 1 || n <= 1) return arr;

    let length = arr.length;
    n = adjustRotations(length,n);

    reverse_array(arr,0,length - 1);
    reverse_array(arr,0,n - 1);
    reverse_array(arr,n,length - 1);
}