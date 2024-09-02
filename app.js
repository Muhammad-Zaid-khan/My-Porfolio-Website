 console.log("Hello World!");
 var tabLinks = document.getElementsByClassName("tab-links");
 var tabContent = document.getElementsByClassName("tab-content");
 var menu = document.getElementById("menu-icons")


 function opentab(tabname){
    for (tablink of tabLinks) {
        tablink.classList.remove("active-link");
        console.log("Hi! I am Faisal.");
        
    }
    for (tabcontent of tabContent) {
        tabcontent.classList.remove("active-tab");
        console.log("Hi! I am Zaid.");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
 
function closeMenu(){
    menu.style.right = "-200px";
}
function openMenu(){
   menu.style.right = "0px";
}

const scriptURL = "https://script.google.com/macros/s/AKfycbziOK7RptI_KW2rLeCJHGbFvmJo2xdCDaQ2krAwwTV62K7vG-OAwD9zlRtANc7yRMWuxA/exec"
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function()
        {
            msg.innerHTML = ""
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })