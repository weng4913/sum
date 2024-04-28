import { authClient } from "./base.js";
document.getElementById("logout").onclick = authClient.logout;
document.getElementById("account").onclick = authClient.redirectToAccountPage;