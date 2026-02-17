  
let forms = document.getElementById("resultForm");
let msg_add = document.getElementById("formMsg");

  forms.addEventListener("submit", async (e) => {
    e.preventDefault();
    const registration_no = document.getElementById("regName").value;
    const roll_no = document.getElementById("roll_no").value;
    const name = document.getElementById("name").value;
    const father_name = document.getElementById("f_name").value;
    const mother_name = document.getElementById("m_name").value;

    // const subject = document.getElementById("subject").value;
    const total_marks = document.getElementById("t_marks").value;
    const obtain_mark = document.getElementById("obt_marks").value;
    const grade = document.getElementById("grade").value

    const {data, error } = await supabase_client 
      .from("student_db")
      .insert([
        {name:name,father_name: father_name, mother_name: mother_name,roll_no: roll_no,total_marks: total_marks,obtain_mark: obtain_mark, grade:grade}
      ]);

    if (error) {
      alert("Error: " + error.message);
      msg_add.innerText = "❌ Error: " + error.message;
    } else {
      alert("Data inserted successfully!");
      msg_add.innerText = "✅ Result added successfully!";
      form.reset();
      console.log(data);
      
    }
    
  });
