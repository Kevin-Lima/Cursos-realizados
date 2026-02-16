import { getBaseEmail } from "./services/email";//não precisa passar a extensao do arquivo

async function main() {
    console.log(await getBaseEmail("OPa"))

    console.log("finalizado")
    console.log("...")
}

main()