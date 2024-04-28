export const authClient = PropelAuth.createClient({
    authUrl: "https://566408065.propelauthtest.com",
    enableBackgroundTokenRefresh: true
});

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

const authInfo = await authClient.getAuthenticationInfoOrNull(true);
console.log(authInfo);
if (authInfo) {
    console.log(await whoAmI(authInfo.accessToken));
} else {
    console.log("User is not logged in");
}
