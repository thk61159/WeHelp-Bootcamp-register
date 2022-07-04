var title = document.getElementById("title");
console.log(title);
var context = document.getElementById("context");
var btn = document.getElementById("btn");
var b = document.getElementById("b");


btn.addEventListener("click",function(){
    if(title.value==""){
        alert("請輸入標題")
    }
    else if(context.value==""){
        alert("請輸入內文")
    }
    else{
        b.innerHTML = b.innerHTML + 
        `<div class="article">
            <h3>${title.value}</h3>
            <p>${context.value}</p>
        </div>
        `;
        title.value="";
        context.value=""}


})
