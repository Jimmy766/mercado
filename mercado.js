// mostrar el primer caracter repetido en una cadena de texto
const cadena = 'ndfdfddfg';
function firstRepeatedChar(str) {
    var indexedChar =[]
    for (let i = 0; i < str.length; i++) {
        if(indexedChar[str[i]]){
            return str[i];
        }
        indexedChar[str[i]]=true;
    }
    return false;
}

module.exports = firstRepeatedChar;