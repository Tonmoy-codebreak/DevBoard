
const completeBtn = document.getElementsByClassName('taskBtn');

for (let i = 0; i < completeBtn.length; i++) {
  completeBtn[i].addEventListener('click', function(event) {
    event.preventDefault();

    // add a Alert for challenge task
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





  });
}
