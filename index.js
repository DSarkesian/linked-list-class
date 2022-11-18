class Node {
  constructor(data,next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0
  }
  // insert first node
  insertFirst(data){
    this.head = new Node(data, this.head);
    this.size ++;
  }

  //insert last node
  insertLast(data){
    let node = new Node(data);
    let current;
// if list is empty add node to head

    if(!this.head){
      this.head = node;
    }else{
      current = this.head;
      //traversing through the list
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    this.size++;

  }

  //insert at index
  insertAt(data, index){
    //if index is out of range
    if(index>0 && index > this.size){
      return;
    }

    //if first index
    if(index===0){
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0
    while(count<index){
      previous = current; // node before index we want to insert
      count++;
      current = current.next// node after index
    }
    node.next = current;
    previous.next = node;

  }

  // get at index

  getAtIndex(index){
    //if index is to big return nothing
    if(index> this.size){
      return;
    }

    //edge case for empty list
    let count = 0;
    let current = this.head

    while(index>count){
      count ++;
      current = current.next
    }
    console.log(current);
    return current


  }

  //remove at index
  removeAt(index){
    if(index> 0 && index > this.size){
      return;
    }

    let current = this.head;
    let prev;
    let count = 0;

    if(index===0){
      this.head = current.next
    }else{
      while(count<index){
        count++;
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
    }
    this.size--;

  }

  //clear list

  //print list
  printListData(){
    let current = this.head;

    while(current){
      console.log(current.data)
      current = current.next
    }
  }

}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(200);
ll.getAtIndex(2);
ll.insertLast(400)
ll.insertAt(500,1)

ll.printListData();
// console.log(ll)
