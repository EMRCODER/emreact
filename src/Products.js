const products = [{
        id:'1',
        title:'Coca-Cola',
        price:'70',
        pictureUrl:'https://www.coca-colacompany.com/content/dam/journey/au/en/brand-detail/coca-cola/Large_product_shot_Coca-Cola_Classic_updated.png',
        stock:'20',
        desc:'Gaseosa a base de estractos vegetales, sabor cola. 485 cc',
        cat:'Bebidas',
        minOrd:'3',
      },
      {
        id:'2',
        title:'Papas Lays',
        price:'350',
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_681062-MLA43242723836_082020-O.jpg',
        stock:'30',
        desc:'Alimento a base de papas. Frito con aceite vegetal. 480gr',
        cat:'Snacks',
        minOrd:'2',
      },
      {
        id:'3',
        title:'Oreo Box',
        price:'280',
        pictureUrl:'https://images-na.ssl-images-amazon.com/images/I/51Ms0pNXUiL._SX300_SY300_QL70_FMwebp_.jpg',
        stock:'10',
        desc:'Oreos bañadas en chocolate, 6 packs de 10u. 320gr',
        cat:'Galletitas',
        minOrd:'1',
      }]


const categories = [
    {id:'Bebidas',desc:'Bebidas'},
    {id:'Galletitas',desc:'Galletitas'},
    {id:'Snacks',desc:'Snacks'}
]

export const getCategories = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 100)        
    })
}

export const getProducts = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)        
    })
}

export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000)
    })
}

export const getProductByCat = (cat) => {  // revisar clase 06/12 1:40  https://coderhouse.zoom.us/rec/play/0djerrKW5K5o-ua87Yb-yzgRqkSKA_NusoeEJc3TAdJh6KbNTo3RF0hl317hdXTDIRxMxDYoXaUcMnc0.m2AieoWEZdRZgcLM?continueMode=true&_x_zm_rtaid=m69rrTa1Rwyeg3IHcmQx1Q.1638988759431.68043eae7e623ef1bbc66f64407b8979&_x_zm_rhtaid=969
    return new Promise((resolve, reject) => {
        const product = products.filter(prod => prod.cat === cat )
        setTimeout(() => resolve(product), 0)
        
    })
}

export const getItem = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products[0])
        }, 1000)        
    })
}