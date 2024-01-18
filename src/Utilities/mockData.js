export const context = {
    product: {},
    addItem: 0,
    setAddItem: () => {},
    toggleSidedrawer: () => {}
}

export const mockCartItems = {
    'cross-border trend': {
        product: {
            _id: "65639e675e71f70e37d02938",
            stock: 100,
            title: "cross-border trend",
            rating: 5,
            price: {
                originalPrice: 1690,
                discountedPrice: 130
            },
            color: [
                "#7B3F00"
            ],
            img: [
                "https://firebasestorage.googleapis.com/v0/b/boxdelabonita-8fd10.appspot.com/o/products%2Fdesigner%20bag%2Fcross-border%20trend%2Fimage%201?alt=media&token=5b2c2085-b282-4b94-9fb2-9d4309d6bb02",
                "https://firebasestorage.googleapis.com/v0/b/boxdelabonita-8fd10.appspot.com/o/products%2Fdesigner%20bag%2Fcross-border%20trend%2Fimage%202?alt=media&token=40b8c8f1-2713-4066-90b4-c0b42748babc",
                "https://firebasestorage.googleapis.com/v0/b/boxdelabonita-8fd10.appspot.com/o/products%2Fdesigner%20bag%2Fcross-border%20trend%2Fimage%203?alt=media&token=bb59157b-ceb0-48de-990d-e3ed0ee80825",
                "https://firebasestorage.googleapis.com/v0/b/boxdelabonita-8fd10.appspot.com/o/products%2Fdesigner%20bag%2Fcross-border%20trend%2Fimage%204?alt=media&token=008bc822-8d1e-4673-aaec-b619c3c7add5",
                "https://firebasestorage.googleapis.com/v0/b/boxdelabonita-8fd10.appspot.com/o/products%2Fdesigner%20bag%2Fcross-border%20trend%2Fimage%205?alt=media&token=d051a5e0-38b3-4d05-8c08-4135c69334f1"
            ],
            description: "Style : Cross-border trend\nBag trend : Tote\nLining texture : PU\nOpening method : Zipper\nluggage shape : Vertical square\nPackage internal structure: Zipper pockets, mobile phone pockets\nBag size : Middle\nHeight : 9 inch  , Length : 10 inch",
            customerReviews: [],
            category: "designer bag",
            subCategory: "trending products"
        },
        quantity: 1,
        color: [
            "#7B3F00"
        ],
        price: 1560
    }
}

export const mockItems = [
    {
        _id: "6560e246ee5a87de2aab94ef",
        stock: 0,
        title: "korean type",
        rating: 5,
        price: {
            originalPrice: 1100,
            discountedPrice: 100
        },
        color: [
            "red",
            " black",
            " chocolate"
        ],
        img: [
            "https://firebasestorage.googleapis.com/v0/b/boxdelabonita-8fd10.appspot.com/o/products%2Fcrossbody%20bag%2Fkorean%20type%2Fimage%201?alt=media&token=f3181ee6-62d4-4c03-aa8d-872f289241fc",
            "https://firebasestorage.googleapis.com/v0/b/boxdelabonita-8fd10.appspot.com/o/products%2Fcrossbody%20bag%2Fkorean%20type%2Fimage%202?alt=media&token=afd5e6cf-7fa8-42d9-8f96-ebdec77adbe8",
            "https://firebasestorage.googleapis.com/v0/b/boxdelabonita-8fd10.appspot.com/o/products%2Fcrossbody%20bag%2Fkorean%20type%2Fimage%203?alt=media&token=89ed0870-c604-44eb-b5a5-76670d44b224",
            "https://firebasestorage.googleapis.com/v0/b/boxdelabonita-8fd10.appspot.com/o/products%2Fcrossbody%20bag%2Fkorean%20type%2Fimage%205?alt=media&token=9fa91eb0-ff00-467b-be50-44e2c074444a",
            "https://firebasestorage.googleapis.com/v0/b/boxdelabonita-8fd10.appspot.com/o/products%2Fcrossbody%20bag%2Fkorean%20type%2Fimage%206?alt=media&token=c74f133b-063b-409e-a0a5-48df26a0cccd"
        ],
        description: "Height is 8 inch<br />length 7,5 inch<br />1 single chamber<br />Emroidered on leather<br />\nPu leather,Long belt",
        customerReviews: [],
        category: "crossbody bag",
        subCategory: "popular products"
    },
    {
        _id: "6561b81b829cfbeaf9cd30f8",
        stock: 20,
        title: "chanel replica trendy",
        rating: 5,
        price: {
            originalPrice: 1450,
            discountedPrice: 100
        },
        color: [
            "black",
            " lavender"
        ],
        img: [
            "https://firebasestorage.googleapis.com/v0/b/boxdelabonita-8fd10.appspot.com/o/products%2Fshoulder%20bag%2Fchanel%20replica%20trendy%20bag%2Fimage%201?alt=media&token=c96209bb-a6d5-4ba9-96a7-8ccc25c0fb2e",
            "https://firebasestorage.googleapis.com/v0/b/boxdelabonita-8fd10.appspot.com/o/products%2Fshoulder%20bag%2Fchanel%20replica%20trendy%20bag%2Fimage%202?alt=media&token=4e4e23b9-3a52-4093-b075-74e10ee0cad3"
        ],
        description: "height 6 inch, length 11 inch",
        customerReviews: [],
        category: "shoulder bag",
        subCategory: "popular products"
    }
]

export const mockUserData = {
    phone: '12345678901',
    email: 'test@test.com',
    orderInfo: {
        dateTime: "Wed Jan 17 2024 Wed, 17 Jan 2024 20:23:32 GMT",
        orderId: "f3ec7d06d64b",
        paymentMethod: "Cash on delivery",
        totalPrice: 1550,
        deliveryLocation: {
            city: "Inside Dhaka ৳80"
        },
        deliveryCharge: 80,
        orderStatus: "pending"
    },
    customerInfo: {
        name: 'test name',
        address: 'test address',
        email: 'test@test.com',
        phone: '12345678901',
        city: 'test city',
    },
    products: {}
}
