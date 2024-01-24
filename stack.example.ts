import Stack from "./stack";

const stack = new Stack<string>();

stack.push("first");
stack.push("in");
stack.push("last");
stack.push("out");

while (stack.peek()) {
  console.log(stack.stack, stack.pop());
}