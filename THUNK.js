/* Thunk is is a higher-order function that wraps the computation we want to perform later */ 
/* In other words: an asynchronous functionality */
/* For example, this remindMeLater() function returns a thunk that will return a string when called.*/

const remindMeLater = task => {
  return () => {
    return `Remember to ${task}!!!`;;
  }
}

/* if you try this code */
console.log(remindMeLater('call mom'));
/* it will print [function] to the console */ 

/* BUT, if you put that function in a const before to log , for example: */

const reminder = reminderMeLater('call mom');

/* and then invoke this const, reminder(), to log */

console.log(reminder());
/* so it will be printed the message that the thunk function returns: 'Remember to call mom' */
