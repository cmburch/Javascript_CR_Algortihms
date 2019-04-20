let find_length = function(head) {
    let length = 0;
    while (head) {
        length++;
        head = head.next;
    }

    return length;
};

let adjust_rotations_needed = function(n, length) {
  //2 scenarios posite or negative number
  
    //  If n is positive then number of rotations performed is from right side
    //  and if n is negative then number of rotations performed from left side
    //  Let's optimize the number of rotations.
    //  Handle case if 'n' is a negative number.
    n = n % length;
  //modulo example -3 % 2 = -1
  //modulo example 2 % 5 = 2
  //-2 % 5  = -2


  //check if n is negative
    if (n < 0) {
      //converts into positive number if N is negatve
        n = n + length;
    }
  
  //-0 is return if modulo is a large number
    return n;
};

let rotate_list = function(head, n) {

    if (!head || n === 0) {
        return;
    }

    //  find length of the linked list
    let length = find_length(head);

    //  Let's optimize the number of rotations.
    //  Handle case if 'n' is a negative number.

    //  If n (number of rotations required) is bigger than
    //  length of linked list or if n is negative then
    //  we need to adjust total number of rotations needed
    n = adjust_rotations_needed(n, length);

    //no rotations are need just return the list
    if (n === 0) {
        return head;
    }

    //  Find the start of rotated list.
    //  If we have 1, 2, 3, 4, 5 where n = 2,
    //  4 is the start of rotated list.
  //count down time temp moves
  
    let rotations_count = length - n - 1;//wall that stop pointer ,also end of first list that will be split in half
    let temp = head;

  //find the the correct place to put the temp pointer 
  //prep for spliting the list
    while (rotations_count > 0) {
        rotations_count--;
        temp = temp.next;
    }

    //  After the above loop temp will be pointing
    //  to one node prior to rotation point
    let new_head = temp.next;

    //  Set new end of list.
    temp.next = null;

    //  Iterate to the end of list and 
    //  link that to original head.
    temp = new_head;
    while (temp.next) {
        temp = temp.next;
    }

    temp.next = head;

    return new_head;
};