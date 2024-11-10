import inquirer from "inquirer";
let todos : string[] = [];
let condition=true;


while(condition){
let addTask = await inquirer.prompt([
    
    {
        name:"todo",
        type:"input",
        message:"what do you want to add in your Todo?",
    },
    {
        name:"addMore",
        type:"confirm",
        message:"do you want to add your Todo?",

    }, 
  ]);

todos.push(addTask.todo);
condition = addTask.addMore;
console.log(todos);
}
