function alphabeticShift(inputString: string): string   {
    let letters = inputString.split('')
    for (let i = 0; i < letters.length; i++)   {
        letters[i] = nextLetter(letters[i])
    }
    return letters.join('');
}

function nextLetter(y: string) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a']
    let next = alphabet[alphabet.findIndex(x => x === y) + 1]    
    return next
}    