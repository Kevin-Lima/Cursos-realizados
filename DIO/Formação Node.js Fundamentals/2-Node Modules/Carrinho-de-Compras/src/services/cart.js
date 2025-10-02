//quais açoes meu carrinho pode fazer

//CASOS DE USO
// -> adicionar item no carrinho
//assinatura
async function addItem(userCart, item) {
    userCart.push(item)//push = adicioonar um elemento dentroo de um vetor
}

// -> calcular o total
async function calculateTotal(userCart) {

 // Percorre todos os itens do array userCart e acumula a soma dos subtotais
// total → é o acumulador que guarda a soma até o momento
// item → é cada objeto dentro do array userCart
// item.subtotal() → chama a função subtotal() de cada item, retornando o valor desse produto
// total + item.subtotal() → soma o acumulado com o subtotal do item atual
// No fim, o reduce retorna o valor total de todos os subtotais somados
 const result =  userCart.reduce((total, item) => total + item.subtotal(), 0)

console.log("\n Shopee Cart TOTAL IS!")

console.log(`🛒 Total: ${result}`)
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
    // Procura o índice do item no array cujo name seja igual ao informado
    // findIndex percorre o array e retorna o índice do primeiro elemento que satisfaça a condição
    // Se não encontrar, retorna -1
    const index = userCart.findIndex((item) => item.name === name);

    // Se o item foi encontrado (índice diferente de -1)
    if(index !== -1){
        // splice remove 1 elemento a partir do índice encontrado
        userCart.splice(index, 1);
    }


        //transforma o indice visual do usuario, para oo indice do backend
    //const deleteIndex = index - 1;

    //é maior do que zeroo e se é menr do que o tamanho do carrinho
    //if(index => 0 && index < userCart.length){
    //    userCart.splice(deleteIndex, 1)
    //}
}

// -> remoover um item - diminui um item
async function removeItem(userCart, item) {
    //1. encontrar o indice do item
    // findIndex percorre o array userCart
    // (p) representa cada produto no carrinho
    // retorna o índice do item que tiver o mesmo nome que item.name
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    //2. Caso não encontre o item
    if(indexFound == -1){
        console.log("item não encotrado");
        return
    }

    //3. item> 1 subtrair um item 
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return
    }

    //4. caso item = 1 deletar o item
     if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1)
        return
     }
}

async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
       console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`) 
    })
}

export{
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}