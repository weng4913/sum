import { authClient } from "./base.js";

let fetchCall = async function(endpoint) {
    let response = await fetch(endpoint.toString(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Page-Number": pageNumber
        }
    });
    let result = await response.json();
    console.log(result);
    document.getElementById("intake-questions").innerHTML = result["html_from_view"];
}

document.getElementById("intake").onsubmit(function () {
    fetchCall("/users/intake/");
    pageNumber++;
});