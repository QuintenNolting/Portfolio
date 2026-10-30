//scrolling progressbar
window.addEventListener('scroll', () => {
    const amountscrolled = document.getElementById('amountscrolled')
    const widthpage = document.documentElement.scrollWidth - window.innerWidth;
    const projectlist = document.getElementById('projectlist')
    amountscrolled.value = window.scrollX || projectlist.scrollLeft
    amountscrolled.max = widthpage || projectlist.scrollWidth - projectlist.clientWidth
}, true);

//scroll horizontally
window.addEventListener('wheel', e => window.scrollBy(e.deltaY, 0));

//project scaling
window.addEventListener('scroll', () => {
    const projectlist = document.querySelectorAll('.project');
    for (let i = 0; i < projectlist.length; i++) {
        const project = projectlist[i].getBoundingClientRect();
        const projectcenter = project.left + project.width / 2;
        const screencenter = window.innerWidth / 2;
        const distance = Math.abs(projectcenter - screencenter);
        const scale = Math.max(0, 1.0 - distance * 0.0009);
        if (distance > 200)
            projectlist[i].style.transform = `scale(${scale})`;
        else if (window.innerWidth <= 767)
            if (distance > 30)
                projectlist[i].style.transform = `scale(${scale})`;
    }
}, true);