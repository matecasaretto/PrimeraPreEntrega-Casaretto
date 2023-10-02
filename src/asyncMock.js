const products = [
    {
        id: '1',
        name: 'MacBokkAir',
        price: 3000,
        category: 'computadora',
        img: 'https://bl-i.thgim.com/public/incoming/fk5hrs/article67097604.ece/alternates/FREE_1200/MacBookAir%2015inch_5.JPG',
        stock: 25,
        description:'Descripcion de la MacBookAir'
    },
    {
        id: '2',
        name: 'Iphone13',
        price: 5000,
        category: 'celular',
        img: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/09/iphone-13-4-scaled.jpeg',
        stock: 25,
        description:'Descripcion del Iphone 13'
    },
    {
        id: '3',
        name: 'AuricularesHyperex',
        price: 10000,
        category: 'perifericos',
        img: 'https://gorilagames.com/img/Public/1019-producto-auricular-hyperx-cloud-alpha-red-1-3063.jpg',
        stock: 25,
        description:'Descripcion de los auriculares Hyperex'
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod=>prod.id === productId))
        }, 1000)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === category);
            resolve(filteredProducts);
        }, 1000);
    });
}