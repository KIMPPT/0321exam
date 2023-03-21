let writetext=document.querySelector("#todotext");
writetext.addEventListener("submit",addtext);
let list=document.querySelector("#list");
let all=0;
let finish=0;
let h3=document.querySelector("h3");
h3.innerHTML=`전체 할 일 ${all} / 완료한 할 일 ${finish}`;
//초기에 실행될 값 주기
function addtext(e)
{
    all++;
    e.preventDefault();
    let li=document.createElement("li"); //li태그 생성
    let checkbox=document.createElement("input"); //input 태그 생성
    checkbox.type="checkbox"; //input태그의 타입을 checkbox로 변경
    let button=document.createElement("button"); //버튼 태그 추가
    button.innerHTML="X"; //버튼에 들어갈 글자 추가
    let text=document.createTextNode(writetext.firstElementChild.value); //입력한 값을 텍스트 변수에 추가
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);
    //위 3개를 li 태그에 checkbox-text-button 순서로 추가
    list.appendChild(li); //ul 태그에 li 태그 추가
    writetext.firstElementChild.value=""; //입력하고 난 뒤 기존값이 없도록 초기화
    checkbox.addEventListener("click",changecolor); //체크박스를 클릭 할 때 글자색 변경 이벤트
    button.addEventListener("click",deleteli); //버튼 클릭 시 해당 할 일 제거
    h3.innerHTML=`전체 할 일 ${all} / 완료한 할 일 ${finish}`; //전체 할 일 과 완료한 할 일 숫자 표시
}

function deleteli(e){
    let button=e.target; //제거 이벤트를 실행할 태그는 버튼 태그
    let li=e.target.parentNode; // 버튼 태그 부모(상위)는 li 태그
    let box=li.firstElementChild; //checkbox는 li 태그의 첫번째 자식
    if(box.checked) finish--; //li 삭제 때 완료한 할 일이면 finish 카운트도 내려가게 설정
    li.remove(); //li 태그 통채로 삭제
    --all; //전체 할 일 카운트 감소
    h3.innerHTML=`전체 할 일 ${all} / 완료한 할 일 ${finish}`;
}
function changecolor(e){
    let checkbox=e.target; //색 변경 이벤트를 실행할 태그는 체크박스 input 태그
    let text=checkbox.parentNode //체크박스의 부모(상위)는 li 태그
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

/*각각의 함수마다 innerHTML을 넣은 이유는 만약 빠지게 된다면 함수 안의 값은
실행이 되지만 return 문이 없어서 변경된 값이 나오지 못하기 때문에 추가했다.*/