const loadBtn = document.querySelector(".load-btn");
const postsContainer = document.getElementById("posts-container");
const loader = document.querySelector(".mask");

function handleClick() {
    loader.classList.remove('hidden');
    fetch("https://dog.ceo/api/breeds/image/random/20").then((response) => response.json())
        .then((data) => {
            console.log(data);
            
            data.message.forEach((post) => {
                const postElement = document.createElement("div");
                postElement.classList.add("post");
                postElement.innerHTML = `<img src="${post}">`;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.log(error))
        .finally(() => {
            setTimeout(() => {
                loader.classList.add('hidden')
            }, 2000);
           
        });

}

