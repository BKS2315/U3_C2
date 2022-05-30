// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucketArr = JSON.parse(localStorage.getItem("coffee"));
console.log('bucketArr:', bucketArr)
let sum = 0;
for(let i = 0 ; i<bucketArr.length ; i++) {
sum+= bucketArr[i].price;
}
console.log('sum:', sum)
let total = document.getElementById("total_amount");
total.innerText = sum ;


function append (list) {
    let menu = document.getElementById("bucket");
    list.map(function(ele,i) {
        let div = document.createElement("div");
        div.setAttribute("class","coffee");
        let img = document.createElement("img");
        img.src = ele.image ;
        let type = document.createElement("p");
        type.innerText = ele.title ;
        let price = document.createElement("p");
        price.innerText = ele.price ;
        let rmv = document.createElement("button");
        rmv.innerText = "Remove";
        rmv.setAttribute("id","remove_coffee");
        rmv.addEventListener("click",function() {
            remove(ele,i)
        })
        div.append(img,type,price,rmv)
        menu.append(div)
    })
}
append(bucketArr)

function remove(ele,i) {
    bucketArr.splice(i,1)
    console.log('bucketArr:', bucketArr)
    localStorage.setItem("coffee",JSON.stringify(bucketArr))
    window.location.reload();
    
}