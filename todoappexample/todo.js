// let todo = [];
// let input = prompt("What would like to do?");
// while (input !== "quit" && input !== "q") {
    
//     if (input === "list") { 
//         console.log("@@@@@@@@@@@@@@@@@@@@@@@@")
//         for (let i = 0; i < todo.length; i++) { 
//             console.log(`${i} : ${ todo[i]}`)
//         }
//         console.log("@@@@@@@@@@@@@@@@@@@@@@@@")
//     } else if (input === "new") {
//         let newtodo = prompt("Enter new todo"); 
//         todo.push(newtodo); 
//     } else if(input === "delete"){ 
//         let indexToDelete = parseInt(prompt("Which Number to delete"))
//         if (!Number.isNaN(indexToDelete)) {
//             const deleted = todo.splice(indexToDelete, 1);
//             console.log(`okey, deleted ${deleted[0]}`)
//         } else { 
//             console.log("Unknown index"); 
//         }
      
//     }
//     input = prompt("What would you like to do?");
// }
// console.log('okey Quit The App');
