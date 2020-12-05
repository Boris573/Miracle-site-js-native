window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.section-btn')
      tabsContent = document.querySelectorAll('.tab-item');
      tabsParent = document.querySelector('.navigation-panel-list'),
      mainPage = document.querySelector('.logo-img');

function hideTabsContent() {
    tabsContent.forEach(item => {
        item.classList.add('hidden');
    })

    tabs.forEach(item => {
        item.classList.remove('active');
    }) 
}

function showTabContent(i = 0) {
    tabsContent[i].classList.remove('hidden');
    tabs[i].classList.add('active');
}

hideTabsContent();
showTabContent();

tabsParent.addEventListener('click', (e) => {
    
    if (e && e.target.classList.contains('section-btn')) {
        tabs.forEach((item, i) => {
            if (e.target == item) {
                hideTabsContent();
                showTabContent(i);
            }
        });
    } else if (e && e.target.classList.contains('logo-img')) {
        console.log('logo');
        hideTabsContent();
        showTabContent(0);
    }
})


})