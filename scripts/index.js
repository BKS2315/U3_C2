// Add the coffee to local storage with key "coffee"

async function getData() {
    let url = `https://masai-mock-api.herokuapp.com/coffee/menu`;
    let res = await fetch(url) ;
    let data = await res.json();
    console.log('data:', data.menu.data)
    let list = data.menu.data ;
    append(list)
}
getData() ;

function append (list) {
    let menu = document.getElementById("menu");
    list.map(function(ele) {
        let div = document.createElement("div");
        div.setAttribute("class","coffee");
        let img = document.createElement("img");
        img.src = ele.image ;
        let type = document.createElement("p");
        type.innerText = ele.title ;
        let price = document.createElement("p");
        price.innerText = ele.price ;
        let atb = document.createElement("button");
        atb.innerText = "Add to bucket";
        atb.setAttribute("id","add_to_bucket");
        atb.addEventListener("click",function() {
            addToBucket(ele)
        })
        div.append(img,type,price,atb)
        menu.append(div)
    })
}
let bucketArr = JSON.parse(localStorage.getItem("coffee")) || [] ;
function addToBucket(ele) {
bucketArr.push(ele);
console.log('bucketArr:', bucketArr)
localStorage.setItem("coffee",JSON.stringify(bucketArr))
count.innerText = bucketArr.length ;
}
let count = document.getElementById("coffee_count");
if(bucketArr == null){
    count.innerText = 0;
}
count.innerText = bucketArr.length ;