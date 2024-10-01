function one() {
  console.log("Running snippets"); //first execution
  Two(); //also first execution (called within scope or context)
}

function Two() {
  console.log("Two"); // under first execution
  three(); //also execute (called within scope or context)
}
function three() {
  console.log("three"); //under first execution
}

one(); //first calling [after all executions of One context all things will removed according to stack behaviour LIFO (Last In First Out)]
Two(); //second calling (works as first calling)
three(); // third calling (works as first calling)
