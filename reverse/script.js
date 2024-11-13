const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');
const columnleft = document.getElementById('columnleft');
const columnright = document.getElementById('columnright');
const backButton = menu.querySelector('a img');
const colR = document.getElementsByClassName("colR");

// Toggle the menu and animate the columns
menuToggle.addEventListener('click', () => {
    // Hide the header
    document.querySelector('header').style.visibility = 'hidden';

    // Show the menu with an open animation
    menu.classList.add('open'); // Trigger the class to open the menu

    // Disable the animation on the right column temporarily
    columnright.classList.add('no-animation'); // Remove animation

    // Animate the columns off-screen with a smooth transition
    columnleft.style.transform = 'translateX(-100%)'; // Move left column off-screen
    columnright.style.transform = 'translateX(100%)'; // Move right column off-screen
});

// Close the menu when clicking on the back button inside the menu
backButton.addEventListener('click', () => {
    // Animate columns back into place with a smooth transition
    columnleft.style.transform = 'translateX(0)';
    columnright.style.transform = 'translateX(0)';

    // Re-enable the animation on the right column
    setTimeout(() => {
        columnright.classList.remove('no-animation'); // Reactivate animation on the right column
    }, 500); // Delay to let the columns slide back into position

    // Hide the menu with a fade-out effect and reverse the open animation
    menu.classList.remove('open');

    // Show the header again after menu closes
    setTimeout(() => {
        document.querySelector('header').style.visibility = 'visible';
    }, 500); // Wait for the menu to close before showing header
});
