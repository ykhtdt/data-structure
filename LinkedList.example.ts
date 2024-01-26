import LinkedList from './LinkedList';

const linkedList = new LinkedList<number>();

linkedList.insert(0);
console.log(
  linkedList.print(),
  linkedList.head?.data,
  linkedList.tail?.data
);

linkedList.insert(1);
console.log(
  linkedList.print(),
  linkedList.head?.data,
  linkedList.tail?.data
);

linkedList.insert(2);
console.log(
  linkedList.print(),
  linkedList.head?.data,
  linkedList.tail?.data
);

linkedList.insert(3);
console.log(
  linkedList.print(),
  linkedList.head?.data,
  linkedList.tail?.data
);

console.log(linkedList.getNode(0));
console.log(linkedList.getNode(1));
console.log(linkedList.getNode(2));
console.log(linkedList.getNode(3));

console.log(linkedList.print(), `LinkedList size : ${linkedList.size}`);

linkedList.remove(linkedList.size - 1);
console.log(
  linkedList.print(),
);

linkedList.remove(linkedList.size - 1);
console.log(
  linkedList.print(),
);

linkedList.insert(9);
console.log(
  linkedList.print(),
  linkedList.head?.data,
  linkedList.tail?.data
);

linkedList.insert(11, 2);
console.log(
  linkedList.print(),
  linkedList.head?.data,
  linkedList.tail?.data
);