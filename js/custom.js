// Tab js
const tabMode = (parent , child) => {
    const tabButtons = document.querySelectorAll(parent);
    const tabContents = document.querySelectorAll(child);
    // const tabButtons = document.querySelectorAll('.tab-button');
    // const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button) => {
    
    button.addEventListener('click', () => {
        tabButtons.forEach((btn) => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

       
        tabContents.forEach((content) => {
            content.classList.remove('active');
        });
        const tabId = button.getAttribute('data-tab');
        // console.log(tabId)
        const tabContent = document.getElementById(tabId);
        tabContent.classList.add('active');
        // console.log(button.classList.contains('active'))

       
    });
});
}

tabMode('.tab-button', '.tab-content');
tabMode('.tab-button-grid', '.tab-content-grid');

// Read More and Read less
const readMoreButton = document.querySelectorAll('.read-more-button');
let isExpanded = false;
readMoreButton.forEach((readMoreButton)=>{
    readMoreButton.addEventListener('click',  (event) => {
        const moreContent = readMoreButton.parentElement.children[0].children[0];
        console.log(moreContent)
        event.preventDefault(); 
        if (isExpanded) {
            moreContent.style.visibility = 'hidden';
            readMoreButton.textContent = 'Read More';
        } else {
            moreContent.style.visibility = 'visible';
            readMoreButton.textContent = 'Read Less';
        }
        isExpanded = !isExpanded;
    });
})


//mobile menu 
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar');
let bod = document.querySelector('.navbar_part');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});

