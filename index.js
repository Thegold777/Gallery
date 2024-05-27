const loadBtn = document.querySelector(".load-btn");
//const cleanBtn = document.querySelector(".clean-btn");
const postsContainer = document.getElementById("posts-container");

function handleClick() {

    fetch("https://dog.ceo/api/breeds/image/random/20").then((response) => response.json())
        .then((data) => {
            console.log(data);
            data.message.forEach((post) => {
                const postElement = document.createElement("div");
                postElement.classList.add("post");
                postElement.innerHTML = `<img src="${post}">`;
                postsContainer.appendChild(postElement);
            });
        });



}