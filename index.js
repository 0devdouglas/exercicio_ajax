const nameElement = document.querySelector("#name");
const userElement = document.querySelector("#user");
const photoElement = document.querySelector("#photo");
const repoElement = document.querySelector("#number-repo");
const followersElement = document.querySelector("#number-followers");
const followElement = document.querySelector("#number-follow");
const linkElement = document.querySelector("#link");

fetch('https://api.github.com/users/0devdouglas')
    .then((res) => {
        return res.json();
    })
    .then((json) => {
        nameElement.innerText = json.name;
        userElement.innerText = json.login;
        photoElement.src = json.avatar_url;
        followElement.innerText = json.following;
        followersElement.innerText = json.followers;
        repoElement.innerText = json.public_repos;
        linkElement.href = json.html_url;
    })
    .catch((err) => {
        console.log(err);
    })