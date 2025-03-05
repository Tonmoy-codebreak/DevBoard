const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener("click",function(event){
    event.preventDefault();
    const historyLog = document.getElementById("historyLog");
    historyLog.innerHTML='';
});