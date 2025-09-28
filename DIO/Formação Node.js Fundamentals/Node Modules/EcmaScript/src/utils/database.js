const databaseType = {
    userTypr: "admin",
    typeData: "datalocal",
}

async function connectToDatabase(dataName) {
    //lógica de conexão
    console.log(`connectado ao banco ${dataName}`)
}

async function disconnectDatabbase() {
    console.log("desconectando do banco de dados")
}

//outra forma de exportar
//export default connectToDatabase;

//multiple exports
export{
    connectToDatabase,
    desconnectDatabbase,
    databaseType,
}