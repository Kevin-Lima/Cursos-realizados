//aqui a gente ta importanto as funçoes de um arquivo (products)
//mas podemos importar qualquer coisa que esteja dentro da parte 'exports' desse arquivo

//a gente pode chamar funçoes especificas
const {getFullName, getProductLabel} = require("./services/products");
//pegando todos os exports
const product = require("./services/products");
const config = require("./services/config");
const database = require("./services/database")

async function main() {
    console.log("carrinho compras:")

    // product.getFullName("408", "mouspad")
    // product.getFullName("508", "mous")
    // product.getProductLabel("mousepad")

    //product.productType.version
    //console.log(config.client)

    getFullName("1", "teclado")
}

main()