class Stack<Element = any> {
  stack: Element[];

  constructor() {
    this.stack = [];
  }

  push(element: Element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

export default Stack;