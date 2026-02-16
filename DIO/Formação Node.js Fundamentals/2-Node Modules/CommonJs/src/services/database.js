//export default = uma função por padrao ja e exportada

//função export default async
exports.connerctToDatabase = async (dataName) => {
    console.log("se conectando aoo banco :" + dataName)
}

// ainda podemos usar oo async, e so colocar dps do igual
exports.disconnectDatabase = async () => {
    //logica
    console.log("desconectando")
}