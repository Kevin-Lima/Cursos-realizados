async function connectToDatabase(user, password) {
    if(user === process.env.USERDATABASE && password === process.env.PASSWOORDDATABASE
){
        console.log("conexão com banco de dados estabelecida")
    }else{
        console.log("Falha de login, não foi possível se conectar ao banco de daods")
    }

}

export default connectToDatabase