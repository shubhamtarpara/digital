const clockEl = document.getElementById('time');
const buttons = document.querySelectorAll('.hour button');

let element1 = document.getElementById('month-first');
let element2 = document.getElementById('day-first');

let element3 = document.getElementById('full-hour')
let element4 = document.getElementById('half-hour')
let currentZone;
let hourText;
let interval1;


const dayDate = document.getElementById('day-date')
dayDate.textContent = new Date().toLocaleString("en-IN", { dateStyle: 'full' });


function updateTime(hourFlag, currentZone) {
    clearInterval(interval1);
    interval1 = setInterval(() => {
        hourText = new Date().toLocaleString("en-IN", { timeZone: currentZone, timeStyle: "medium", hour12: hourFlag });
        clockEl.textContent = hourText;
    });

};
const fullHour = () => {
    element3.addEventListener('click', () => {
        element3.style.backgroundColor = 'black';
        element3.style.color = 'white';
        element3.style.borderColor = 'white';

        element4.style.backgroundColor = 'white';
        element4.style.color = 'black';
        element4.style.borderColor = 'black';

        updateTime(hourFlag = false, currentZone);
        element4.classList.remove('active');
        element3.classList.add('active');
    });
};
fullHour();

const halfHour = () => {
    element4.addEventListener('click', () => {
        element4.style.backgroundColor = 'black';
        element4.style.color = 'white';
        element4.style.borderColor = 'white';

        element3.style.backgroundColor = 'white';
        element3.style.color = 'black';
        element3.style.borderColor = 'black'

        updateTime(hourFlag = true, currentZone);
        element3.classList.remove('active');
        element4.classList.add('active');
    });
    element4.classList.add('active');
};
halfHour();











// setInterval(generateTime, 1000)

// function generateTime() {
//     format = clockEl.getAttribute('data-format')
//     const date = new Date;

//     let hours = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();


//     if (format === '12') {
//         hours = (hours > 12) ? hours % 12  : hours ;
//     }

//     if (hours < 10) {
//         hours = "0" + hours;
//     }

//     if (min < 10) {
//         min = "0" + min;
//     }

//     if (sec < 10) {
//         sec = "0" + sec;
//     }

//     clockEl.innerHTML = `${hours} : ${min} : ${sec} `


// }

// buttons.forEach((button) => {
//     button.addEventListener("click", (event) => {

//         const format = button.getAttribute("data-format");
//         clockEl.setAttribute("data-format", format);
//         generateTime();


//         if (event.target.id === "full-hour") {
//             event.target.style.backgroundColor = 'black';
//             event.target.style.color = 'white';
//             event.target.style.borderColor = 'white';

//             const halfHour = document.getElementById('half-hour');

//             halfHour.style.backgroundColor = 'white';
//             halfHour.style.color = 'black';
//             halfHour.style.borderColor = 'black';


//         } else {
//             event.target.style.backgroundColor = 'black';
//             event.target.style.color = 'white';
//             event.target.style.borderColor = 'white';

//             const halfHour = document.getElementById('full-hour');

//             halfHour.style.backgroundColor = 'white';
//             halfHour.style.color = 'black';
//             halfHour.style.borderColor = 'black';

//         }

//     });
// });



const monthFirst = () => {

    element1.addEventListener('click', () => {
        element1.style.backgroundColor = 'black';
        element1.style.color = 'white';
        element1.style.borderColor = 'white';

        element2.style.backgroundColor = 'white';
        element2.style.color = 'black';
        element2.style.borderColor = 'black';

        let myDate = new Date().toLocaleString("en-IN", {
            dateStyle: "full"
        }).split(",");
        anotherDate = myDate[1].trim().split(" ");
        dayDate.textContent = myDate[0] + "," + " " + anotherDate[1] + " " + anotherDate[0] + "," + myDate[2];
        element1.classList.add("active");
        element2.classList.remove("active");
    })
}
monthFirst();

const dayFirst = () => {
    element2.addEventListener('click', () => {
        element2.style.backgroundColor = 'black';
        element2.style.color = 'white';
        element2.style.borderColor = 'white';

        element1.style.backgroundColor = 'white';
        element1.style.color = 'black';
        element1.style.borderColor = 'black'

        dayDate.textContent = new Date().toLocaleString("en-IN", {
            dateStyle: 'full'
        });
        element2.classList.add("active");
        element1.classList.remove("active");
    });
    element2.classList.add("active");
}
dayFirst();


// var today = new Date();
// const day = today.getDate()
// const month = today.toLocaleDateString("default", { month: "short" });
// const date = today.toLocaleDateString("default", { weekday: "long" });
// const year = today.getFullYear();

// document.querySelector(".month-name").innerHTML = month;
// document.querySelector(".day-name").innerHTML = `${day},`;
// document.querySelector(".day-number").innerHTML = `${date},`;
// document.querySelector(".year").innerHTML = year;


// buttonS.forEach((button) => {
//     button.addEventListener("click", () => {
//         const forMate =button.getAttribute()

//     });
// });