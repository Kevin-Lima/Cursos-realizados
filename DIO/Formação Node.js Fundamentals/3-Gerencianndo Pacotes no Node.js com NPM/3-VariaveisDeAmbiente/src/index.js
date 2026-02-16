import connectToDatabase from "../database/data.js"

async function main() {
    //console.log(process.env.USERDATABASE)
    await connectToDatabase(process.env.USERDATABASE, process.env.PASSWOORDDATABASE)
}

main()