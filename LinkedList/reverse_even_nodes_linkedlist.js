//merge the second list into list one
let merge_alternating = function(list1, list2) {
    if (!list1) {
        return list2;
    }

    if (!list2) {
        return list1;
    }
    
  //this list is getting modified in place and return at the end,this variable is an important pattern
    let head = list1;
  //list1 is a pointer that point to a sublist
  //list1.next is the element that is getting pointed at by list2 node
  //while there is something to point at and there is a node to insert that is what this line is saying
    while (list1.next && list2) {
        let temp = list2;
        list2 = list2.next;

        temp.next = list1.next;
        list1.next = temp;
//temp was the node inserted into list1. list1 move to node after the inserted node
        list1 = temp.next;
    }
//one element in linked list or nothing for list2 node to point at
    if (!list1.next) {
        list1.next = list2;
    }

    return head;
};

///reader and leader-reader pointers (curr :reader && curr.next:leader-reader)
let reverse_even_nodes = function(head) {

    // Let's extract even nodes from the existing
    // list and create a new list consisting of 
    // even nodes. We will push the even nodes at
    // head since we want them to be in reverse order.

  
    let curr = head; //modifies the head list removing all even nodes
    let list_even = null; //head pointer of even nodes

    while (curr && curr.next) {
        let even = curr.next;
        curr.next = even.next;

        // Push at the head of new list.
        even.next = list_even;
        list_even = even; //is the head pointer of even list

        curr = curr.next;
    }

    // Now, merge the two lists
    // Original: 1,2,3,4,5
    // Modified original: 1,3,5
    // List_even: 4,2
    // Merged: 1,4,3,2,5

    return merge_alternating(head, list_even);
};