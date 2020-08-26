const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault(); //여기서는 설정된 기본값 이벤트를 막아버리는 기능. 엔터 눌러도 안됨//
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit) //이벤트가 발생하면 어디론가 가버린다//
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello  ${text}`;
    //컴퓨터는 해석을 제일 위에서 부터 한다. 폼을 삭제하고, 인사를 추가하고, 제일 마지막에 내가 설정한 텍스를 넣는다//
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else { 
        paintGreeting(currentUser);
    }
}

function init () {
    loadName();
}

init();