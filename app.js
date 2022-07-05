const  catResult = document.getElementById('cat_result');
const  foxResult = document.getElementById('fox_result');
const  catBtn = document.getElementById('cat_btn');
const  foxBtn = document.getElementById('fox_btn');

cat_btn.addEventListener('click', getRandomCat);
// fox_btn.addEventListener('click', getRandomFox);

function getRandomCat() {
    fetch("https://aws.random.cat/meow")
    .then((resp) => resp.json())
    .then((data) => {
        console.log('data.file')
    })
}

