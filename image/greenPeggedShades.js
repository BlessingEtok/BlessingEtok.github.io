let Hex=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

/**let green = "#"
for (let index = 0; index < array.length; index++) { ss
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

function allAnchorFiles(){
    let links = document.getElementsByTagName('a')
        
    // console.log (links)
    return links
    
}

function allImages(){
    let bbcimages = document.getElementsByTagName('img')

   // return bbcimages



    
}

function getAllImages(){
    let images = document.getElementsByTagName('img')
    let imagesLink = []
    for( let i =0; i < images.length; i++){

        let imageElement = images[i]
        let imageSource = imageElement.getAttributes('src')
        imagesLink.push(imageSource)
    }
    return imagesLink
}


// the function method
function addition(a, b){
    return a + b
}

// the variable , the arrow function 
let k = 9

const add = (a, b) => {
    return a + b
}

const sub = (a, b) => {
    return a - b
}



function isFunctionIdempotent(testFunction, x, y){
    const firstValue = testFunction(x, y)
    const secondValue = testFunction(y, x)

    return firstValue === secondValue

}

console.log( isFunctionIdempotent(add, 2, 3) )
console.log( isFunctionIdempotent(sub, 2, 3) )