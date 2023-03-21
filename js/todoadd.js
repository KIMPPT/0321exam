let writetext=document.querySelector("#todotext");
writetext.addEventListener("submit",addtext);
let list=document.querySelector("#list");
let all=0;
let finish=0;
let h3=document.querySelector("h3");
h3.innerHTML=`전체 할 일 ${all} / 완료한 할 일 ${finish}`;
function addtext(e)
{
    all++;
    e.preventDefault();
    let li=document.createElement("li");
    let checkbox=document.createElement("input");
    checkbox.type="checkbox";
    let button=document.createElement("button");
    button.innerHTML="X";
    let text=document.createTextNode(writetext.firstElementChild.value);
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);
    list.appendChild(li);
    writetext.firstElementChild.value="";
    checkbox.addEventListener("click",changecolor);
    button.addEventListener("click",deleteli);
    h3.innerHTML=`전체 할 일 ${all} / 완료한 할 일 ${finish}`;
}

function deleteli(e){
    let li=e.target.parentNode;
    li.remove();
    --all;
    h3.innerHTML=`전체 할 일 ${all} / 완료한 할 일 ${finish}`;
}
function changecolor(e){
    let checkbox=e.target;
    let text=checkbox.parentNode
    if(checkbox.checked) //checkbox의 체크 유무에 따라 투두 입력으로 온 문장 색 조절
    {
        text.style.color="white";
        finish++;
    }
    else 
    {
        text.style.color="";
        finish--;
    }
    h3.innerHTML=`전체 할 일 ${all} / 완료한 할 일 ${finish}`;
}