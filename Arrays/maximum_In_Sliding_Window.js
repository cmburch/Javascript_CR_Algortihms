let find_max_sliding_window = (arr,window_size)=>{
    if(window_size > arr.length){
        return;
    }
    let result = [];
    let window_ = [];

    for (let i = 0; i < window_size; i++) {
        while(window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]){
            window_pop();
        }
        window_.push(i);
    }
    result.push(arr[window_[0]]);

    for (let i = window_size; i < arr.length; i++) {
        while(window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]){
            window_pop();
        }
        //remove element outside of window
        if(window_.length > 0 && (window_[0] <= i - window_size)){
            window_.shift();
        } 
        window_.push(i);
        result.push(arr[window_[0]]);
    }

    return result;
}


// Runtime Complexity
// O(n)

// Memory Complexity
// O(w)