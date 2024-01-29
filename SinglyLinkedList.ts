// 노드를 저장할 때 그 다음 순서의 자료가 있는 위치와 데이터를 갖는 방식으로 저장한다.
class SinglyLinkedListNode<Element = any> {
  // 데이터를 담는 Data Field
  data: Element;
  // 다음 노드를 기리키는 Linked Field
  next: SinglyLinkedListNode<Element> | null;

  constructor(data: Element) {
    this.data = data;
    // LinkedList의 마지막 지점은 null이다.
    this.next = null;
  }
}

class SinglyLinkedList<Element = any> {
  // LinkedList의 가장 첫 지점
  head: SinglyLinkedListNode<Element> | null = null;
  // LinkedList의 가장 마지막 지점
  tail: SinglyLinkedListNode<Element> | null = null;
  size: number = 0;

  getNode(index: number) {
    if (index < 0 || index >= this.size) {
      throw new Error('유효하지 않은 index 입니다.');
    }

    let current = this.head;

    while (index > 0) {
      current = current!.next;
        index--;
    }

    return current;
  }

  insert(data: Element, index?: number) {
    const node = new SinglyLinkedListNode(data);
    
    if (typeof index === 'undefined') {
    // 1. index가 없으면 마지막 노드 뒤에 추가한다.
      if (!this.tail) {
      // 1-1. LinkedList가 비어있는 경우
        this.head = this.tail = node;
        this.size++;
      } else {
      // 1-2. LinkedList가 비어있지 않은 경우
        this.tail.next = node;
        this.tail = this.tail.next;
        this.size++;
      }
    } else {
    // 2. index가 있으면 해당 index에 추가한다.
      if (index < 0) {
      // 2-1. index는 음수가 불가능하다.
        throw new Error('index는 반드시 0 이상이어야 합니다.');
      }

      if (index === 0) {
      // 2-2. index가 0인 경우 LinkedList의 head에 추가한다.
        node.next = this.head;
        this.head = node;
        this.size++;
      } else {
      // 2-3. index가 0보다 큰 경우 해당하는 index에 추가한다.
        const prevNode = this.getNode(index - 1);

        if (prevNode) {
          node.next = prevNode.next;
          prevNode.next = node;
          this.size++;
        } else {
          throw new Error('해당 index 앞에 노드가 존재하지 않습니다.')
        }
      }
    }
  }

  remove(index: number) {
    if (index < 0 || index >= this.size) {
      throw new Error('유효하지 않은 index 입니다.');
    }

    if (index === 0) {
    // 1. index가 0인 경우 - head를 지워야하는 경우이다.
      if (this.head) {
      // 1-1 head를 지운다.
        if (this.head.next) {
        // 1-1-1. head의 다음 노드가 head가 된다.
          this.head = this.head.next;
        } else {
        // 1-1-2. LinkedList는 size가 1인 경우이다.
          this.tail = this.head = null;
        }

        this.size--;
      }
    } else {
    // 2. index가 0이 아닌 경우
      const prevNode = this.getNode(index - 1);

      if (prevNode) {
        if (prevNode.next) {
          if (prevNode.next.next) {
            // 2-1. remove하려는 노드의 다음 노드가 존재하여 이전 노드가 가리키는 다음 노드를 remove하려는 노드의 다음 노드로 지정한다.
            prevNode.next = prevNode.next.next;
            this.size--;
          } else {
            // 2-2. remove하려는 노드가 tail인 경우이다. 이전 노드가 tail이 되어야한다.
            prevNode.next = prevNode.next.next;
            this.tail = prevNode;
            this.size--;
          }
        }
      }
    }
  }

  isEmpty() {
    return this.head === null;
  }

  getSize() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next;
    }

    return count;

    // return this.size;
  }

  print() {
    let str = '[';
    let current = this.head;

    while (current) {
      str += (str.length > 1 ? ',' : '') + current.data;
      current = current.next;
    }

    str += ']';

    return str;
  }

}

export default SinglyLinkedList;
