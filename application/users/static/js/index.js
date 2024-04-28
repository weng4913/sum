import { authClient } from "./base.js";
document.getElementById("login").onclick = authClient.redirectToLoginPage;