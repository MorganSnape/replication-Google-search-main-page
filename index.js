
const googleAppsBtn = document.getElementById("google-apps-collapsed") 
const googleAppsCnt = document.getElementById("google-apps-displayed")

googleAppsBtn.addEventListener("click", (ev)=>{
  googleAppsCnt.classList.toggle("active")
})