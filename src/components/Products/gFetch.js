

const products = [
    { id: '1', name: 'fantasmita', price: '$1600', stock: 10, foto: require('../../assets/fotoproducto/fantasmas.jpeg') },
    { id: '2', name: 'pijama', price: '$2300', stock: 10, foto: require('../../assets/fotoproducto/tipitos.jpeg') },
    { id: '3', name: 'manzanitas', price: '$2800', stock: 10, foto: require('../../assets/fotoproducto/manzanitas.jpeg')},
    { id: '4', name: 'peras', price: '$2800', stock: 5, foto: require('../../assets/fotoproducto/pera.jpeg')},
    { id: '5', name: 'cubos', price: '$3000', stock: 5, foto: require('../../assets/fotoproducto/cubos.jpeg')},
    { id: '6', name: 'velita', price: '$3100', stock: 5, foto: require('../../assets/fotoproducto/velita.jpeg')}
]

export const gFetch = (id) => {

    return new Promise (( res, rej) => {


            setTimeout(()=>{
                res( id ? products.find(prod => prod.id === id) : products)
             }, 3000)
            })
        }



