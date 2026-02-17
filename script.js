



// const { memo } = require("react");

let all_input = document.querySelectorAll("input");

let form  = document.querySelector("form");
let textarea = document.querySelector("textarea")




form.addEventListener("submit", (dt)=>{
   dt.preventDefault()
   let name = all_input[0].value;
   let email = all_input[1].value;
   let mob = all_input[2].value;
   let msg = textarea.value;
   if (name !== "" && email !== "" && mob !== "" && msg !== "") {
      alert("form submition sucessful")
      
   }
   else{
      alert("please fill all fields!")
   }

   console.log(name);
   console.log(email);
   console.log(mob);
   console.log(msg);

})



//supabase authentication


















