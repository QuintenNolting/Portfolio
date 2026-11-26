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
    if (!document.querySelector(':target')) window.scrollBy(event.deltaY, 0);
});

//project scaling
window.addEventListener('scroll', () => {
    const projectlist = document.querySelectorAll('.project');
    for (let i = 0; i < projectlist.length; i++) {
        const project = projectlist[i].getBoundingClientRect();
        const projectcenter = project.left + project.width / 2;
        const screencenter = window.innerWidth / 2;
        const distance = Math.abs(projectcenter - screencenter);
        const snapdistance = window.innerWidth <= 767 ? 30 : 120;
        const scale = Math.max(0, 1 - Math.max(0, distance - snapdistance) * 0.0015);
        projectlist[i].style.transform = `scale(${scale})`;
    }
}, true);

//active tabs change color
const tabs = ['#tabinfo', '#tabskills', '#tabprojects', '#tabcv', '#tabcontact'];
const activetab = document.querySelectorAll('.activetab')
function updateactivetab() {
    const i = Math.max(0, tabs.indexOf(location.hash));
    activetab.forEach((element, index) => element.style.background = index === i ? 'blue' : '');
}
window.addEventListener('hashchange', updateactivetab);

//open info tab on load
if (!location.hash) location.replace('#tabinfo');
updateactivetab();

//stops resetting scroll
['wheel', 'touchmove'].forEach(type => window.addEventListener(type, event => {
    if (document.querySelector(':target')) event.preventDefault();
}, {passive: false}));
