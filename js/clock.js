let time=document.querySelector("#time");
function setclock(){
    let date=new Date(); //새로운 date 값을 받아옴
    let hou=date.getHours(); //그 date에서 시만 받아옴-숫자
    let min=date.getMinutes(); //그 date에서 분만 받아옴-숫자
    let sec=date.getSeconds(); //그 date에서 초만 받아옴-숫자
    hou=String(hou).padStart(2,"0"); //숫자를 문자열로 강제변환 뒤 2자리가 아닐 경우 왼쪽에 0을 붙여서 자리를 맞춤
    min=String(min).padStart(2,"0");
    sec=String(sec).padStart(2,"0");
    time.innerHTML=`${hou}:${min}:${sec}`; //최종적인 시,분,초 를 text에 넣기
}
setInterval(setclock,1000); //1초마다 setclock 함수를 실행하기
setclock(); //위 setInterval은 초기에도 1초 뒤에 실행하므로 시작할 때 값도 필요함