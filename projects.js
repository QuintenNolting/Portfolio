//scrolling progressbar
window.addEventListener('scroll', () => {
    const amountscrolled = document.getElementById('amountscrolled')
    const widthpage = document.documentElement.scrollWidth - window.innerWidth;
    const projectlist = document.getElementById('projectlist')
    amountscrolled.value = window.scrollX || projectlist.scrollLeft
    amountscrolled.max = widthpage || projectlist.scrollWidth - projectlist.clientWidth
}, true);

//scroll horizontally
window.addEventListener('wheel', event => {
    if (!document.querySelector(':popover-open')) window.scrollBy(event.deltaY, 0);
});

//project scaling
window.addEventListener('scroll', () => {
    const projectlist = document.querySelectorAll('.project');
    for (let i = 0; i < projectlist.length; i++) {
        const project = projectlist[i].getBoundingClientRect();
        const projectcenter = project.left + project.width / 2;
        const screencenter = window.innerWidth / 2;
        const distance = Math.abs(projectcenter - screencenter);
        const scale = Math.max(0, 1.0 - distance * 0.001);
        if (distance > 200) {
            projectlist[i].style.transform = `scale(${scale})`;
            }
        else if (window.innerWidth <= 767) {
            if (distance > 30) {
                projectlist[i].style.transform = `scale(${scale})`;
            }
        }
    }
}, true);

//active tabs change color
const popovertab = document.querySelectorAll('.popovertab')
const activetab = document.querySelectorAll('.activetab')
popovertab.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        document.querySelectorAll(':popover-open').forEach(popover => popover.hidePopover());
        activetab.forEach(active => active.style.backgroundColor = '');
        activetab[i].style.backgroundColor = 'red';
    });
});

//open info tab on load
window.addEventListener('DOMContentLoaded', function () {
    const tabinfo = document.getElementById('tabinfo')
    if (tabinfo) {
        tabinfo.showPopover();
        document.querySelectorAll('.activetab')[0].style.backgroundColor = 'red';
    }
});

//stops resetting scroll
['wheel', 'touchmove'].forEach(type => window.addEventListener(type, event => {
    if (document.querySelector(':popover-open')) event.preventDefault();
}, {passive: false}));
