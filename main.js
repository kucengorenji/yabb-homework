const submitButton = document.getElementById("submit-button");
const resultBox = document.getElementById("box");

apiUrl = "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"

submitButton.addEventListener("click", function() {
    alert("aloha");
})

const returnData = (data) => {
    return resultBox.innerHTML = `
    <img src="${data.album.images[0].url}" alt="">
    <p>Track Title : ${data.name}</p>
    <p>Artist : ${data.artists[0].name}</p>
    <p>Album : ${data.album.name}</p>
    <button id="submit-button" type="submit">Select</button>
    `
}

fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => returnData(data));

