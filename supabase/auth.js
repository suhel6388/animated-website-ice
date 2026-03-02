const form = document.getElementById("loginform");
const msg = document.getElementById("msg");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { error } = await supabase_client.auth.signInWithPassword({
      email:email,
      password:password,
    });

    if (error) {
      msg.innerText = error.message;
    } else {
      window.location.href = "dashboardui.html";
    }
  });
}

// Logout function
async function logout() {
  await supabase_client.auth.signOut();
  window.location.href = "login.html";
}
