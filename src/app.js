// import { nanoid } from 'nanoid';

// const data = [
//   {
//     name: "Іван",
//     age: 25,
//     city: "Київ"
//   },
//   {
//     name: "Марія",
//     age: 30,
//     city: "Львів"
//   },
//   {
//     name: "Олег",
//     age: 22,
//     city: "Одеса"
//   }
// ];

// const result = data.map((item)=>{
//     return {
//         ...item,
//         id: nanoid(5)
//     }
// })

// console.log(result);


//======бібліотека PNotify==============

//   import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
//   import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
//   import '@pnotify/core/dist/BrightTheme.css';
//   import "@pnotify/core/dist/PNotify.css"
//   defaultModules.set(PNotifyMobile, {});


//   const btnRef = document.querySelector(".btn");
//   const erorBtn = document.querySelector(".eror-btn")

//  btnRef.addEventListener("click", ()=>{
//     success({
//   title: 'Yes!',
//   text: 'Дякую за підписку',
//   width: '260px',
//   delay: 1000
// });
//  })


//   erorBtn.addEventListener("click", ()=>{
//     error({
//   title: 'No!',
//   text: 'Ви зробили погану спаву',
//   width: '260px',
//   delay: 1000
// });
//  })


// import Chart from 'chart.js/auto';
// const ctx = document.getElementById('myChart');


// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [{
//     label: 'Temperature',
//     data: [12, 14, 16, 18, 20, 22, 24],
//     fill: false,
//     borderColor: 'rgb(75, 192, 192)',
//     tension: 0.1
//   }]
// };


// const config = {
//   type: 'line',
//   data: data,
//   options: {}
// };


// const data = {
//   labels:  ['Red','Blue','Yellow'],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [50, 20, 80],
//     backgroundColor: [
//       'rgba(255, 0, 0)',
//       'rgba(0, 255, 0)',
//       'rgba(0, 0, 255)',
//     ],
    
//   }]
// };

// const config = {
//   type: 'doughnut',
//   data: data,
// };
// const config = {
//   type: 'line',
//   data: data,
// };

// const config = {
//   type: 'polarArea',
//   data: data,
//   options: {}
// };

// const myChart = new Chart(ctx,config);


//======================================================
const btnRef = document.querySelector(".btn")

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';


 const instance = basicLightbox.create(`
    <div class="modal">
        <p class="text">Дякую за підписку, держи цукерку))</p>
    </div>
`)



btnRef.addEventListener("click", ()=>{
  instance.show()
})

window.addEventListener("keydown", (e)=>{

  if(e.code === "Escape"){
    instance.close()
  }
  

})