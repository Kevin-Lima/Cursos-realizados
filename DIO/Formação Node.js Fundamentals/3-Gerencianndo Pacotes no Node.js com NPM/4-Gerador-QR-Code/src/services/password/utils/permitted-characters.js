async function permittedCharacters() {
    let permitted = [];

    if(process.env.UPPERCASE_LETTERS === "true"){
    // Os três pontos (...) são o operador "spread".
    // Ele "espalha" cada caractere da string "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // e passa cada letra individualmente para o método push().
    // Exemplo: "ABC" -> "A", "B", "C"
    // Assim, cada letra vira um item no array characters com seu próprio índice.
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if(process.env.LOWERCASE_LETTERS === "true"){
        permitted.push(..."abcdefghijklmnopqrstuvwxyz")//os (...) adcionan e n substitui
    }

    if(process.env.NUMBERS === "true"){
        permitted.push(..."0123456789")
    }

     if(process.env.SPECIAL_CHARACTERS === "true"){
        permitted.push(..."!@#$%^&*()_+-={}[]<>?/|~")
    }

    return permitted
}

export default permittedCharacters