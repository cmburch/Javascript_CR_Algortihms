
// Add Two Integers
// Given the head pointers of two linked lists where each linked list represents an integer number (each node is a digit), add them and return the resulting linked list.

let add_integers = function(integer1, integer2) {

    let result = null;
    let last = null; //this is the tail pointer
    let carry = 0;

    while (integer1 || integer2 || carry > 0) {
        let first = !integer1 ? 0 : integer1.data;
        let second = !integer2 ? 0 : integer2.data;
        let sum = first + second + carry;
        let pNew = create_linked_list([sum]);
        carry = Math.floor(sum / 10);
      //this is the head of the linked list
        if (!result) {
            result = pNew;
        } else {
            last.next = pNew;
        }

        last = pNew;
        if (integer1) {
            integer1 = integer1.next;
        }

        if (integer2) {
            integer2 = integer2.next;
        }
    }

    return result;
};