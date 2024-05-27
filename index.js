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

function loadData() {
    return new Promise((resolve, reject) => {
        // setTimeout не является частью решения
        // Код ниже должен быть заменен на логику подходящую для решения вашей задачи
        setTimeout(resolve, 2000);
    })
}

loadData()
    .then(() => {
        let preloaderEl = document.getElementById('preloader');
        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');
    });