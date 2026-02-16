///import connectToDatabase from "./utils/database.js"//especificar a extensao do arquivo

//importando tudo de um arquivo
//* = tudo
//as = colocar tudo dentro de algo
///import * as database from "./utils/database.js"

///database.connectToDatabase("my-database")
///database.desconnectDatabbase()

//pra n importar tudo de um arquivo, a gente pode importar so oq interessaa
import {disconnectDatabbase, databaseType} from "./utils/database"

disconnectDatabbase()

import {getDataFromApi} from "./utils/api"
