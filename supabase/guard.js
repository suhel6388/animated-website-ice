async function checkAuth() {
  const {
    data: { session }
  } = await supabase_client.auth.getSession();

  const path = window.location.pathname;

  // If logged in & on login page → redirect
  if (session && path.includes("login.html")) {
    window.location.href = "dashboard.html";
  }

  // If NOT logged in & on protected page → redirect
  if (!session && path.includes("dashboard.html")) {
    window.location.href = "login.html";
  }
}

checkAuth();
