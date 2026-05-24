/*console.log("hello world");*/
/*
let firstName="Abinash";//string
let age=23;//int
let isMarried=false;//boolean

console.log("this person's name is "+firstName+"and he is "+age+"years old");
console.log("is he married: "+isMarried);
*/
/*
const ages=[21,22,23,24,25,26];

for(let i=0;i<ages.length;i++){
    if(ages[i]%2==0) console.log(ages[i]);
    
}*/


const personArray = ["Abinash", "Adarsh", "Rakshitha"];
const genederArray = ["male", "male", "female"];

for (let i = 0; i < personArray.length; i++) {
    if (genederArray[i] == "female")
        console.log(personArray[i]);
}

const allUsers = [{
    firstName: "Abinash",
    gender: "male",
     metadata:{
        age:23,
        isMarried:false
    }
},{
    firstName:"Adarsh",
    gender:"male",
     metadata:{
        age:20,
        isMarried:false
    }
},
{
    firstName:"Achala",
    gender:"female",
    metadata:{
        age:23,
        isMarried:true
    }
}];

for(let j=0;j<allUsers.length;j++){
    if(allUsers[j]["gender"]=="male"){
        console.log(allUsers[j]["firstName"]);
    }
}

for(let k=0;k<allUsers.length;k++){
    if(allUsers[k].metadata.isMarried==true){
        console.log(allUsers[k].firstName+" age "+allUsers[k].metadata.age);
    }
}