function buttonClick() {
const min = Math.ceil(document.querySelector("#input-1").value)
const max = Math.floor(document.querySelector("#input-2").value)

const result = Math.floor(Math.random() * (max - min + 1)) + min

if (min >= max) {
   alert ("ERRO: Número máximo é menor que o mínimo")
} else {
    alert (result)
}

}