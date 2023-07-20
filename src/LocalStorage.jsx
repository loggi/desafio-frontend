const setItens = (infoPedido) => {
    localStorage.setItem("infoPedido", infoPedido)
}
const getItens = () => {
    return localStorage.getItem("infoPedido")
}
const clearLocalStorage = () => {
    localStorage.clear();
}
export {setItens, getItens, clearLocalStorage}