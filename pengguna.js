// // document.addEventListener('DOMContentLoaded', (event) => {
// //     const navLinks = document.querySelectorAll('.nav-link');

// //     navLinks.forEach(link => {
// //         link.addEventListener('click', () => {
// //             navLinks.forEach(nav => nav.classList.remove('active'));
// //             link.classList.add('active');
// //         });
// //     });
// // });

// let btn = document.querySelector("#btn");
// let sidebar = document.querySelector("#.sidebar");

// btn.onClick = function(){
//     sidebar.classList.toggle("active");
// }

document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const btn = document.querySelector("#btn");

    btn.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });
});