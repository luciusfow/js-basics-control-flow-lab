function scuberGreetingForFeet(distance){
  // Write your code here!
  
//   if (distance <= 400) {
//     return 'This one is on me!'
  
//   } else if (distance > 2000) {
//     return 'I will gladly take your thirty bucks.'
  
//   } else if (distance >= 2501) {
//     return 'No can do.'
//   }
// }
if (distance >= 2501) {
  return 'No can do.'
} else if (distance >= 2000) {
  return 'I will gladly take your thirty bucks.'
}else if (distance <= 400) {
  return 'This one is on me!'
}
}
function ternaryCheckCity(city){
  // Write your code here!
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.' // works with strick or loose equaility operator === or ==
 
}

function switchOnCharmFromTip(generous){
  // Write your code here!
  // if (generous = 'Thank you so much.'){
  //   switch(generous){ 
  //     case 'not as generous' === 'Thank you.'
  //     default 'Bye.'
  //   }
  // }
  switch (generous) {
    case "generous" :
    return 'Thank you so much.';
    break;
    case "not as generous" : 
    return 'Thank you.';
    break;
    case(generous) : 
    return 'Bye.';
  }
}