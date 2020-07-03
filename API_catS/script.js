let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener("click", fetchPics); 
  
function fetchPics(){
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(Response => Response.json())
  .then(data) => {
    console.log(data)
  })
}
