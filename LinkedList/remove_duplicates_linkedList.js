// Remove Duplicates from a Linked List
// Remove duplicate nodes from a linked list of integers while keeping only the first occurrence of duplicates.


//notes: sublist pointer used
let remove_duplicates = function(head) {

    if (!head) {
        return head;
    }

    // Let's track existing values.
    //intialize the head node to the sublist pointer after it is add the the hashset
    let dup_set = new Set();
    dup_set.add(head.data);
    let curr = head; //sublist of unique value and it also reads upcoming/next values

    while (curr.next) {
        if (dup_set.has(curr.next.data)) {
            // Duplicate node found. Let's remove it from the list.
            curr.next = curr.next.next;
        } else {
            // Element not found in map, let's add it.
            dup_set.add(curr.next.data);
            curr = curr.next;
        }
    }

    return head;
};



// Runtime Complexity
// O(n)

// Memory Complexity
// O(n)