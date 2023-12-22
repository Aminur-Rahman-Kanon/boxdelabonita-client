export const disableScroll = () => {
    const positionTop = window.screenY || document.documentElement.scrollTop;
    const positionLeft = window.screenX || document.documentElement.scrollLeft;

    window.onscroll = () => window.scrollTo(positionLeft, positionTop);
}

export const isElementInViewport = (el) => {
    const element = document.querySelector(`.${el}`);
    
    if (element.id === 'item1'){
        const headers = element.children[0].children[0].children;
        const sideImg1 = element.children[0].children[1].children[0];
        const sideImg2 = element.children[2].children[0].children[0];
        const link = element.children[2].children[1];

        let timer = [];

        for (let i=0; i<headers.length; i++){
            headers[i].className = 'banner-Item2-H2';
        }

        sideImg1.className = 'banner-img2-side-img1';
        sideImg2.className = 'banner-img2-side-img2';
        link.className = 'banner2-link';

        for (let i=0; i<headers.length; i++){
            timer[i] = setTimeout(() => {
                headers[i].className = 'banner-Item2-H2 item2-animate-H2'
            }, 1000 + i * 100)
        }

        headers[headers.length-1].addEventListener('animationend', () => {
            sideImg1.className = 'banner-img2-side-img1 animate-side-img1'
        })

        sideImg1.addEventListener('animationend', () => {
            sideImg2.className = 'banner-img2-side-img2 animate-side-img2'
        })

        sideImg2.addEventListener('animationend', () => {
            link.className = 'banner2-link animate-banner2-link';
        })

        return timer;
    }
    
    if (element.id === 'item2'){
        let timer = [];
        const el1 = element.children[0].children[0].children;
        const el2 = element.children[0].children[1];
        const el3 = element.children[0].children[2].children[0].children;
        const el4 = element.children[0].children[3];
        
        el2.className = 'banner-Item-H4';
        el4.className = 'banner-Item-Btn';
        
        for (let i=0; i<el1.length; i++) {
            el1[i].className = 'banner-Item-H2';
        }
    
        for (let i=0; i<el1.length; i++) {
            timer[i] = setTimeout(() => {
                el1[i].className = 'banner-Item-H2 animate-H2'
            }, 1000 + i * 100);
        }
        
        el1[el1.length-1].addEventListener('animationend', () => {
            el2.className = 'banner-Item-H4 animate-H4';
        })
        
        for (let i=0; i<el3.length; i++) {
            el3[i].className = 'additional-list';
        }
    
        el2.addEventListener('animationend', () => {
            for (let i=0; i<el3.length; i++){
                el3[i].className = 'additional-list animate-list';
            }
        })
    
        if (window.innerWidth >= 768) {
            el3[el3.length-1].addEventListener('animationend', () => {
                el4.className = 'banner-Item-Btn animate-btn'
            })
        }
        else {
            el2.addEventListener('animationend', () => {
                el4.className = 'banner-Item-Btn animate-btn'
            })
        }
        
        return timer;
    }
    if (element.id === 'item3'){
        const headers = element.children[0].children[0].children[0].children;
        const sideImg1 = element.children[0].children[0].children[1].children[0].children[0]
        const sideImg2 = element.children[0].children[0].children[1].children[1].children[0]
        const link = element.children[1].children[0];

        let timer = [];

        for (let i=0; i<headers.length; i++){
            headers[i].className = 'banner-Item3-H2';
        }
        
        sideImg1.className = 'banner3-side-img';
        sideImg2.className = 'banner3-side-img';
        link.className = 'banner3-link';

        for (let i=0; i<headers.length; i++){
            timer[i] = setTimeout(() => {
                headers[i].className = 'banner-Item3-H2 animate-banner-Item3-H2';
            }, 1000 + i * 100)
                
        }

        headers[headers.length-1].addEventListener('animationend', () => {
            sideImg1.className = 'banner3-side-img animate-banner3-side-img'
            sideImg2.className = 'banner3-side-img animate-banner3-side-img'
        })

        sideImg2.addEventListener('animationend', () => {
            link.className = 'banner3-link animate-banner3-link'
        })
    }
}
