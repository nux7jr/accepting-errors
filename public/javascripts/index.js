console.log("load!");

async function sendInfo(evt) {
  evt.preventDefault();
  const name = document.querySelector(".input__name");
  const pass = document.querySelector(".input__pass");
  console.log("fetch");
  console.log(name.value, pass.value);
  set.param("name", name.value);
  set.param("pass", pass.value);
  const res = await fetch("http://localhost:3000/", param);
  console.log("respone: ", res);
}

// ws
const wsConnection = new WebSocket("ws://localhost:3000/");
wsConnection.onopen = function () {
  alert("Соединение установлено.");
};

wsConnection.onclose = function (event) {
  if (event.wasClean) {
    alert("Соединение закрыто чисто");
  } else {
    alert("Обрыв соединения"); // например, "убит" процесс сервера
  }
  alert("Код: " + event.code + " причина: " + event.reason);
};

wsConnection.onerror = function (error) {
  alert("Ошибка " + error.message);
};
const sendMessage = (message) => {
  conn.send(JSON.stringify({ event: "click", payload: { userName, message } }));
};
const mes = document.querySelector(".mess");
mes.addEventListener("click", () => {
  sendMessage;
  console.log("WS MESS!");
});

const wsSend = function (data) {
  // readyState - true, если есть подключение
  if (!wsConnection.readyState) {
    setTimeout(function () {
      wsSend(data);
    }, 100);
  } else {
    wsConnection.send(data);
  }
};
