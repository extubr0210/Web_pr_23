const Frm=document.getElementById("frm1");
const Tbl=document.getElementById("tabl1");

Frm.style.color="red";

function getFrmVale(event){
event.preventDefault();
const nofrows = Frm.querySelector('[name="number_frm_form"]');

const aedtxt = Frm.querySelector('[name="added_text"]');
alert(nofrows.value+" "+aedtxt.value);
Tbl.innerHTML=Tbl.innerHTML+" <p>"+aedtxt.value+"</p>";
}

Frm.addEventListener("submit",getFrmVale);