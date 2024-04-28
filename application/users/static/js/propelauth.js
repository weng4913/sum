const authClient = PropelAuth.createClient({
    authUrl: "https://566408065.propelauthtest.com:",
    enableBackgroundTokenRefresh: true
});

document.getElementById("account").onclick = authClient.redirectToAccountPage;
document.getElementById("logout").onclick = authClient.logout;
document.getElementById("register").onclick = authClient.redirectToSignupPage;
document.getElementById("login").onclick = authClient.redirectToLoginPage;

let whoAmI = async function (accessToken) {
    let response = await fetch("/rest_framework/api/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
    let result = await response.json();
    console.log(result);
    return result;
}

authClient.addLoggedInChangeObserver(async function (isLoggedIn) {
    if (isLoggedIn) {
        document.getElementById("logged-in").style.display = "revert";
        document.getElementById("logged-out").style.display = "none";
        const authInfo = await authClient.getAuthenticationInfoOrNull();
        if (authInfo) {
            document.getElementById("email").innerText = authInfo?.user?.email;
            return await whoAmI(authInfo.accessToken);
        } else {
            throw new Error("User is not logged in");
        }
    } else {
        document.getElementById("logged-in").style.display = "none";
        document.getElementById("logged-out").style.display = "revert";
    }
});