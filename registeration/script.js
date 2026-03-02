
document.addEventListener("DOMContentLoaded", () =>{
 const today = new Date().toISOString().split("T")[0];
 document.querySelector("#reg_date").value = today;
})



//handling  images
   const input = document.querySelector('input[type="file"]');
    const img = document.getElementById('previewImg');
    const boxText = document.querySelector('#previewBox span');

      
    input.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        img.src = URL.createObjectURL(file);
        img.classList.remove('hidden');
        boxText.style.display = 'none';
      }
    });

    function clearPreview(inputId){
      const input = document.getElementById(inputId);
      const img = document.getElementById(inputId + "Preview");
      const ph = document.getElementById(inputId + "Placeholder");

      input.value = "";
      img.src = "";
      img.style.display = "none";
      ph.style.display = "block";
    }

    ["photo","sign","thumb"].forEach(wirePreview);