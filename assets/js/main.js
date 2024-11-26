


function lightmode()
{
    document.getElementById('themeStyle').setAttribute('href', '../assets/css/light.css');
    document.getElementById('toggle').className = 'fa-solid fa-toggle-on toggleon';
    document.getElementById('dem1').src = '../assets/img/shape-top-white-80.png';
    document.getElementById('dem2').src = '../assets/img/shape-bottom-white-80.png';
    document.getElementById('dem3').src = '../assets/img/shape-top-grey-80.png';
}


function darkmode()
{
    document.getElementById('themeStyle').setAttribute('href', '../assets/css/dark.css');
    document.getElementById('toggle').className = 'fa-solid fa-toggle-off toggleon';
    document.getElementById('dem1').src = '../assets/img/shape-top-black-80.png';
    document.getElementById('dem3').src = '../assets/img/shape-top-dark-grey-80.png';
    document.getElementById('dem2').src = '../assets/img/shape-bottom-black-80.png';

}




// document.addEventListener('DOMContentLoaded', function () {
//     updateCountdown(); // Start the countdown immediately

//     // Update the target date in the countdown function
//     function updateCountdown() {
//         // Set your target date here
//         const targetDate = new Date('2024-12-31 00:00:00').getTime();

//         function update() {
//             const currentDate = new Date().getTime();
//             const difference = targetDate - currentDate;

//             // Calculate time unit. days, hours, minute and seconds
//             const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//             // Update the display
//             document.getElementById('days').textContent = days.toString().padStart(2, '0');
//             document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
//             document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
//             document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

//             // Check if countdown is finished
//             if (difference <= 0) {
//                 clearInterval(timer);
//                 document.getElementById('days').textContent = '00';
//                 document.getElementById('hours').textContent = '00';
//                 document.getElementById('minutes').textContent = '00';
//                 document.getElementById('seconds').textContent = '00';
//             }
//         }

//         // Update immediately and then every second
//         update();
//         const timer = setInterval(update, 1000);
//     }
// });
