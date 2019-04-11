// Delete Node with a Given Key
// Given the head of a linked list and a key, delete the node with this given key from the linked list.

let delete_node = function(head, key) {
    let prev = null; //this is a sublist pointer secondary inplace list
    let current = head; //reader pointer
    
    while (current) { //while there is a value to read
        if (current.data === key) {
          //two conditons the key is found at the head 
          //else the key is found but not at the head
            if (current === head) {
                head = head.next;
                current = head;
            } else { //else the key is found but not at the head
                prev.next = current.next;
                current = current.next;// remove this line ?? this is not need you have break statement because this will run until the end
            }
          break; // I created this so you don't continue to loop thru whole list
        } else { //key is not found note:this will hit null if not found
          //*note prev pointer is like a secondary list pointer that is not equal to the key
            prev = current;
            current = current.next;
        }
    }

    //  key not found in list
    // the current pointer is intialized was empty from the start when parameter was passed in
    if (!current) {
        return head;
    }

    return head;
};


// Runtime Complexity
// O(n)

// Memory Complexity
// O(1)