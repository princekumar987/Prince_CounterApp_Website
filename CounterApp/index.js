// console.log("hello jeee")

const countvalue=document.querySelector('#counter');

const increament = () => {
    //get the value from ui
   let value=parseInt(countvalue.innerText);
   //update the value
   value =value +1;
   //set the value into ui
   countvalue.innerText=value;
}

const decreament = () => {
     //get the value from ui
   let value=parseInt(countvalue.innerText);
   //update the value
   value =value -1;
   //set the value into ui
   countvalue.innerText=value;

}