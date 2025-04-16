const sidebarNavItems = document.querySelectorAll('.sidebar-nav li');
const tabContents = document.querySelectorAll('.tab-content');

sidebarNavItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetTab = document.getElementById(item.dataset.tab);
        const currentActiveTab = document.querySelector('.tab-content.active');

        sidebarNavItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        if (currentActiveTab && currentActiveTab !== targetTab) {
            currentActiveTab.classList.remove('active');
            targetTab.classList.add('active');
        } else if (!currentActiveTab) {
            targetTab.classList.add('active');
        }
    });
});

window.addEventListener('load', () => {
    if (sidebarNavItems.length > 0) {
        sidebarNavItems[0].click();
    }
});