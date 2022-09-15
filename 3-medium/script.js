//MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.


function isThisThingOn(){
    // console.log('is this thing on');
    let str = prompt('Say something!');
    if(str.toUpperCase() === str){
        console.log('The user is shouting.');
    } else if(str.toLowerCase() === str){
        console.log('The user is whispering.');
    } else {
        console.log('The user is talking normally.');
    };
};

isThisThingOn();
