import SinglyLinkedList from './SinglyLinkedList';

const singlyLinkedList = new SinglyLinkedList<number>();

console.log(singlyLinkedList.isEmpty());

singlyLinkedList.insert(0);
console.log(
  singlyLinkedList.print(),
  singlyLinkedList.head?.data,
  singlyLinkedList.tail?.data
);

singlyLinkedList.insert(1);
console.log(
  singlyLinkedList.print(),
  singlyLinkedList.head?.data,
  singlyLinkedList.tail?.data
);

singlyLinkedList.insert(2);
console.log(
  singlyLinkedList.print(),
  singlyLinkedList.head?.data,
  singlyLinkedList.tail?.data
);

singlyLinkedList.insert(3);
console.log(
  singlyLinkedList.print(),
  singlyLinkedList.head?.data,
  singlyLinkedList.tail?.data
);

console.log(singlyLinkedList.getNode(0));
console.log(singlyLinkedList.getNode(1));
console.log(singlyLinkedList.getNode(2));
console.log(singlyLinkedList.getNode(3));

console.log(singlyLinkedList.print(), `singlyLinkedList size : ${singlyLinkedList.size}`);

singlyLinkedList.remove(singlyLinkedList.size - 1);
console.log(
  singlyLinkedList.print(),
);

singlyLinkedList.remove(singlyLinkedList.size - 1);
console.log(
  singlyLinkedList.print(),
);

singlyLinkedList.insert(9);
console.log(
  singlyLinkedList.print(),
  singlyLinkedList.head?.data,
  singlyLinkedList.tail?.data
);

singlyLinkedList.insert(11, 2);
console.log(
  singlyLinkedList.print(),
  singlyLinkedList.head?.data,
  singlyLinkedList.tail?.data
);

console.log(singlyLinkedList.getSize());