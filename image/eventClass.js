const ediButtonElement = document.getElementById("edi-btn")
ediButtonElement.addEventListener("dblclick", function (e){
    alert("Edi button has been double clicked")
})
// ediButtonElement.addEventListener("click", (e) => {
//     console.log("Edi button has been clicked")
// })

const demdem = () => {
    prompt("what is demdem?")
}

ediButtonElement.addEventListener("click", demdem)
