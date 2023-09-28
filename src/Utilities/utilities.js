export const disableScroll = () => {
    const positionTop = window.screenY || document.documentElement.scrollTop;
    const positionLeft = window.screenX || document.documentElement.scrollLeft;

    window.onscroll = () => window.scrollTo(positionLeft, positionTop);
}

export const isElementInViewport = (el) => {
    let timer = [];
    const element = document.querySelector(`.${el}`);

    const el1 = element.children[0].children[0].children;
    const el2 = element.children[0].children[1];
    const el3 = element.children[0].children[2];

    el2.className = 'banner-Item-H4';
    el3.className = 'banner-Item-Btn';

    for (let i=0; i<el1.length; i++) {
        el1[i].className = 'banner-Item-H2';

    }
    
    for (let i=0; i<el1.length; i++) {
        timer[i] = setTimeout(() => {
            el1[i].className = 'banner-Item-H2 animate-H2'
        }, 1000 + i * 100);

        // el1[i].addEventListener('animationend', () => el1[i].className = 'banner-Item-H2 stable-H2')
    }
    let test;

    if (el1[el1.length -1]){
        el1[el1.length -1].addEventListener('animationend', () => {
            test = setTimeout(() => {
                el3.className = 'banner-Item-Btn animate-btn'
            }, 500);

            el2.className = 'banner-Item-H4 animate-H4';
        })
    }

    clearTimeout(test);
    return timer;
  }