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

export const fetchCartItem = () => {
    const cart = localStorage.getItem('cart');

    if (cart !== null){
        const product = JSON.parse(localStorage.getItem('cart'));
        return product;
    }
    else {
        return {};
    }
};

//this function adds item to the cart/localStorage and take the following:
//product: the actual item that needs to add
//color: the color of the item
export const addToCart = (product, color) => {
    //firstly, if there is no item or no color is provided then we abort the process and return "invalid operation" text as status.
    if (!product || !color) return 'invalid operation';

    //if the above is provided then we extract the items from the localStorage.
    const cartObj = fetchCartItem();    

    //we start the add item process from here
    try {
        //first we calculate the item's actual price
        //because each item object has a price object containing the original and the discounted price
        //we need to deduct the discounted price from the original price.
        const price = product.price.originalPrice - product.price.discountedPrice;
        //then we need to check if the "cartObj" extracted from the localStorage is empty or not
        //if its empty then we simply add the item
        //if not then we do the following:
        //check if the item we want to add is exist or not
        //if exist then we simply increment the item quantity and push the item color to the item color array. the item obj looks like this
        //{
            //title: item,
            //quantity: 1,
            //color: ['black']
            //and some other information
        //}
        //else we add the item in the "cartObj" object

        //this executes when cart is empty
        if (!Object.keys(cartObj).length) {
            //decalring an empty object so we can add that to the cartObj
            const cart = {};

            //constructing the item object meaning the actual item object to store
            const addedProduct = {
                product,
                quantity: 1,
                color: [color],
                price
            }

            //adding the item to the cart object where the item title is the key and the addedProduct is the value
            cart[product.title] = addedProduct;

            //saving the cart object as value with the "cart" as key to the localStorage.
            localStorage.setItem('cart', JSON.stringify(cart));
            //return a success message
            return 'success';
        }
        
        //this executes when there is item in the cart
        else {
            //check if similiar item exists or not
            const existProduct = cartObj.hasOwnProperty(product.title);
            
            //this executes when similiar item exist in the cart
            if (existProduct){
                //increment the item quantity
                cartObj[product.title].quantity = cartObj[product.title].quantity + 1;
                //pushing the item color to the item color array of cartObj object
                cartObj[product.title].color.push(color);
                //saving the updated value to localStorage.
                localStorage.setItem('cart', JSON.stringify(cartObj));
                //return a success message
                return 'success';
            }

            //this executes when cart is not empty and no similiar item found
            else {
                //constructing the item object meaning the actual item object to store
                const addedProduct = {
                    product,
                    quantity: 1,
                    color: [color],
                    price
                }
                
                //adding the item title as key and item object as value
                cartObj[product.title] = addedProduct;
                //saving the updated value as value and 'cart' as key to the localStorage
                localStorage.setItem('cart', JSON.stringify(cartObj));
                //return a success message
                return 'success';
            }
        }
    //if any of the operation avobe failed then we return a failed message
    } catch (error) {
        return 'failed';
    }
}

//this function removes a single item from the cart and takes the item title as argument
export const removeSingleItem = (title) => {
    //process starts from here
    try {
        //first we extract the items from the localStorage
        const cartObj = fetchCartItem();
        //if cart is empty then we abort the process.
        if (!Object.keys(cartObj).length) return 'cart empty';
        //extractng the the item from the 'cartObj' to remove
        const productToRemove = cartObj[title];
        //if the item wasn't found in the 'cartObj' then we abort
        if (!Object.keys(productToRemove).length) return 'not found';
        //we first check the quantity of the item. if its a single item then remove the item from the 'carrtObj' completely
        //otherwise we decrement the item quantity and remove the item color from the item color array.
        //these executes when the item quantity is 1
        if (productToRemove.quantity === 1){
            //remove the item from the 'cartObj'
            delete cartObj[title];
            //update the localStorage
            localStorage.setItem('cart', JSON.stringify(cartObj))
            //return a success message
            return 'success';
        }
        //these executes when item quantity is more than 1
        if (productToRemove.quantity > 1){
            //decrement the item quantity
            productToRemove.quantity = productToRemove.quantity - 1;
            //remove the last item of the color array
            productToRemove.color.pop();
            //updating the 'cartObj'
            cartObj[title] = productToRemove;
            //updating the localStorage
            localStorage.setItem('cart', JSON.stringify(cartObj));
            //return a success message
            return 'success';
        }
    //if any of the process above fails then we abort and return a 'failed' message
    } catch (error) {
        return 'failed';
    }
}

//this function removes all similiar items from the cart and takes the item title as argument
export const removeAllProducts = (title) => {
    //process start from here
    try {
        //extract the items from the localStorage
        const cartObj = fetchCartItem();
        //if cartObj is empty then we abort
        if (!Object.keys(cartObj).length) return 'cart empty';
        //if no title is provided then we abort
        if (!cartObj[title]) return 'not found';
        //delete the item object from the cartObj object
        delete cartObj[title];
        //update the localStorage
        localStorage.setItem('cart', JSON.stringify(cartObj));
        //return a success message
        return 'success';
    //if the process failed then return a failed message
    } catch (error) {
        return 'failed';
    }
}

export const fetchUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user){
        return [];
    }
    else {
        return user.user;
    }
}