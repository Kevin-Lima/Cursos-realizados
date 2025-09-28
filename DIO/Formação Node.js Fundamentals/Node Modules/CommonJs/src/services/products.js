// todas as funçoes que lidam coom produto
const productType = {
    version: "digital",
    tax: "x1",
};

async function getFullName(codeId, productName) {
    console.log("ProductX:" + codeId + "--" + productName)
    await doBreakLina
};

//hidden fuction = é uma funçao que e visivel so dentro desse arquivo, ela nãoo é exportada
async function doBreakLina() {
        console.log("\n")
}

async function getProductLabel(productName) {
    console.log("Product " + productName)
};
// oq sera exportado
module.exports = {
    getFullName,
    getProductLabel,
    productType,
};