const rndm=Math.random();
let rdm1=Math.ceil(rndm * 200 + 2);
alert("wrtwr "+rdm1);
const Jsp1=document.getElementById("jsnplhld1");

fetch("https://jsonplaceholder.typicode.com/todos/"+rdm1)
.then((response) => response.json())
.then((json) => {
    console.log(json);
    Jsp1.innerHTML="<p>"+JSON.stringify(json)+"</p>";
});
