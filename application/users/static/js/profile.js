document.getElementById("logout").onclick = authClient.logout;
document.getElementById("account").onclick = authClient.redirectToAccountPage;

let whoAmI = async function (accessToken) {
    let response = await fetch("/users/whoami/", {
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
        const authInfo = await authClient.getAuthenticationInfoOrNull();
        if (authInfo) {
            return await whoAmI(authInfo.accessToken);
        } else {
            throw new Error("User is not logged in");
        }
    }
});