import Stack from "./Stack";

const stack = new Stack<string>();

stack.push("first");
stack.push("in");
stack.push("last");
stack.push("out");

while (stack.peek()) {
  console.log(stack.pop());
  console.log(stack.stack);
}