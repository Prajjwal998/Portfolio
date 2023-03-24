var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
    }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
    } 
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}

// google  sheet add
// const scriptURL = 'https://script.google.com/macros/s/AKfycby8P88aA9y-A407msJv2P3luhvTlHs3hbk9Xlc5GnuOMZrOa3rML07pN_61a5J1rPY/exec'
// const form = document.forms['submit-to-google-sheet']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => console.log('Success!', response))
//     .catch(error => console.error('Error!', error.message))
// })