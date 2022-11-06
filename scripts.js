let days = document.querySelectorAll('.day')
function setWeekDays(){
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>{
        data.map((day,i)=>{
            console.log(day.amount)
            days[i].children[0].style.height = (270/100)*day.amount+20+"px"
            days[i].children[1].textContent = day.day
        })
    })
}
setWeekDays()