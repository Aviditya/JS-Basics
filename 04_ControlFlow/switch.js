// Switch case
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;

switch (month) {// month is the key here
    case 1: // 1 the value
        console.log('Jan');
        break;
    case 2: 
        console.log('Feb');
        break;
        // break stops the execution of any lines below it after the case is matched else all code below it will be executed till default, default doesnt executes.
    case 3: 
        console.log('Mar');
        break;
    case 4: // value can be string or numbers too
        console.log('Apr');
        break;

    default:
        console.log('Default case matched!');
        break;
}
//---//