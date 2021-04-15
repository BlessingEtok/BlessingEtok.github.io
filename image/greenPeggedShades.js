let Hex=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

/**let green = "#"
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}**/
let green = "#"
for (let index = 0; index < 6; index++) {
    const randomIndex =  Math.floor(Math.random() * Hex.length)
    green = green + Hex[randomIndex]
    
}

// document.body.style.backgroundColor = green + "ff"

function generateTwoHexadecimal(){
    let  hexString = ""
    for (let index = 0; index < 2; index++) {
        const randomIndex =  Math.floor(Math.random() * Hex.length)
        hexString = hexString + Hex[randomIndex]
    }
    return hexString
}


const shadesOfGreen = "#" + generateTwoHexadecimal() + "ff" + generateTwoHexadecimal() 

document.body.style.backgroundColor = shadesOfGreen
