// auto today date
document.getElementById("date").valueAsDate = new Date();

document.getElementById("feesForm").addEventListener("submit", async(e)=>{
  e.preventDefault();

  const name = document.getElementById("name").value;
  const course = document.getElementById("course").value;
  const amount = document.getElementById("amount").value;
  const payment_mode = document.getElementById("paymentMode").value;
  const deposit_by = document.getElementById("depositBy").value;
  const date_deposit = document.getElementById("date").value;
  console.log(name);
  console.log(course);
  console.log(amount);
  console.log(payment_mode);
  console.log(deposit_by);
  console.log(date_deposit);
  
  
  

  const row = `
    <tr>
      <td>${date_deposit}</td>
      <td>${name}</td>
      <td>${course}</td>
      <td>₹ ${amount}</td>
      <td>${payment_mode}</td>
      <td>${deposit_by}</td>
    </tr>
  `;
    const { data, error } = await supabase_client
        .from('STUDENT_FEES')
        .insert([
            {name:name, course:course, amount:amount, 
            date_deposit:date_deposit, payment_mode:payment_mode, deposit_by:deposit_by}
            
        ])
   if (error) {
    console.log(error);
    alert("Error inserting data!");
  } else {
    alert("Fees added successfully!");
  }
  document.getElementById("history").innerHTML += row;
  // document.getElementById("feesForm").reset();

  // reset date again
  document.getElementById("date").valueAsDate = new Date();
});



