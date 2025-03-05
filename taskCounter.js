
const completeBtn = document.getElementsByClassName('taskBtn');

for (let i = 0; i < completeBtn.length; i++) {
  completeBtn[i].addEventListener('click', function(event) {
    event.preventDefault();

    
    alert("Board Updated Successfully")

    const taskCount = document.getElementById('taskNumber').innerText ;
    let convertedTask = parseInt(taskCount);
    convertedTask--;
    document.getElementById('taskNumber').innerText = `0${convertedTask}` ;


    
    const navCount = document.getElementById('navCounter').innerText;
    let convertedNav = parseInt(navCount);
    convertedNav++;
    document.getElementById('navCounter').innerText = convertedNav;


    this.disabled = true;

    const time = new Date();
    const exactTime = time.toLocaleTimeString();
    const taskName = this.parentElement.parentElement.querySelector("p.cardTitle").innerText;

    
    const history = document.createElement('p');
    history.classList.add("mb-5")
    history.innerText = `You have completed the "${taskName}" task at ${exactTime}`;

    


    const historyLog = document.getElementById("historyLog")
    historyLog.appendChild(history)





  });
}
