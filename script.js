//Declaring Variables
const selecting = document.querySelectorAll("select")
let myDate, h, m, s, fullDate;
const format = 12;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturay"]
const lop = document.querySelector(".lop")
const bttn = document.querySelector("#bttn")
const lop2 = document.querySelector(".lop2")
var audio = new Audio('ringtone.mp3');

//Fetching Options

//Hour
for (i = 24; i >= 1; i--) {
    let v = i
    i = i < 10 ? `0${i}` : i
    let opt = `<option value="${v}">${i}</option>`
    selecting[0].firstElementChild.insertAdjacentHTML("afterend", opt)
}

//Minutes
for (i = 59; i >= 0; i--) {
    let v = i
    i = i < 10 ? `0${i}` : i
    let opt = `<option value="${v}">${i}</option>`
    selecting[1].firstElementChild.insertAdjacentHTML("afterend", opt)
}

// <=============Fetching Time Every 1000ms using Interval==============>
setInterval(() => {
    //Getting Time
    myDate = new Date();
    h = myDate.getHours()
    m = myDate.getMinutes()
    s = myDate.getSeconds()
    trishan = h >= 12 ? "PM" : "AM"
    //Hour
    h < 10 ? hour.innerHTML = "0" + h + " : " : hour.innerHTML = h + " : "
    //Minutes
    m < 10 ? minute.innerHTML = "0" + m + " : " : minute.innerHTML = m + " : "
    //Seconds
    s < 10 ? second.innerHTML = "0" + s : second.innerHTML = s
    //Am or Pm
    h >= 12 ? AmPm.innerHTML = "PM" : AmPm.innerHTML = "AM"
    //Removing 24hr format
    if (h > 12) {
        let realHour = h - format
        hour.innerHTML = "0" + realHour + " : "
    }
}, 1000)


const mode = () => {
    main.classList.toggle("lightContainer")
    navbar.classList.toggle("lightNav")
    btn.classList.toggle("btnLight")
    select.classList.toggle("lightSelect")
    select1.classList.toggle("lightSelect")
    set.classList.toggle("lightSet")
    del.classList.toggle("lightClear")
}


const buttonFunc = () => {
    let hr = selecting[0].value
    let min = selecting[1].value
    if (hr == "Hour" || min == "Minute") {
        console.log("Please Select Valid Time")
    }
    else {
        hrs = hr < 10 ? `0${hr}` : hr
        mins = min < 10 ? `0${min}` : min
        console.log(`Alarm Set For ${hrs} : ${mins}`)
        alert(`Alarm Set For ${hrs} : ${mins}`)
    }

    if (hr != "Hour" || min != "Minute") {
        const alarm = async () => {
            if (hr == h && min == m) {
                audio.play();
            }

        }
        setInterval(alarm, 1000);

        const clear = () => {
            audio.pause()
            hr = ""
            min = ""
            selecting[0].value = "Hour"
            selecting[1].value = "Minute"
        }
        lop2.addEventListener("click", clear)
    }

    else {
        alert("Select Valid Time")
    }
}



btn.addEventListener("click", mode)
lop.addEventListener("click", buttonFunc)

