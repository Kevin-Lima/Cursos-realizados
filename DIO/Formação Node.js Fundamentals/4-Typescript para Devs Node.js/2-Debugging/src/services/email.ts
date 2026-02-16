async function getBaseEmail(senderName:string): Promise<string> {//Promise<string> = a gente ta falndo o que a funçao vai ter que
    let base = await getHeaderText()
    
    base += `Olá ${senderName}, gostaria de me inscrever para uma vaga`;
    base += "\n estou deixando o meu currículo";

    return base
}

async function getHeaderText(): Promise<string> {
    return "EMAIL PARA VOCÊ"
}

export {
    getBaseEmail,
}