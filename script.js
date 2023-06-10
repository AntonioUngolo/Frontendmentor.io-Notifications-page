'use strict';

const allNotification = document.querySelector('.all-nf ul');
let countNotification = document.querySelector('.count-notification');
const allRead = document.querySelector('.remove-notification');
const singleNotification = document.querySelectorAll('.notification-box');
let activeItems = allNotification.querySelectorAll('.notification-box.active');

function counterNotification() {
  countNotification.textContent = activeItems.length;
}

counterNotification();

// Remove the "active" class from all items
function removeAllActiveNotification() {
  activeItems.forEach((item) => {
    item.classList.remove('active');
  });
  countNotification.textContent = 0;
}

// Add event listeners
allRead.addEventListener('click', function () {
  removeAllActiveNotification();
});

singleNotification.forEach((notification) => {
  notification.addEventListener('click', function () {
    console.log('You clicked a single notification');
    notification.classList.toggle('active');
    activeItems = allNotification.querySelectorAll('.notification-box.active');
    counterNotification();
  });
});
