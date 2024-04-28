export const authClient = PropelAuth.createClient({
    authUrl: "https://566408065.propelauthtest.com",
    enableBackgroundTokenRefresh: true
});

let getUser = async function (userID) {
    let response = await fetch("/users/profile/?" + new URLSearchParams({ q: userID }).toString(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        }
    });
    let result = await response.json();
    console.log(result);
    return result;
}

const authInfo = await authClient.getAuthenticationInfoOrNull(true);
console.log(authInfo);
if (authInfo) {
    console.log(await getUser(authInfo.user.userID));
} else {
    console.log("User is not logged in");
}
