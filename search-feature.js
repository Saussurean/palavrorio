(function () {

wildcardsMapping = {'*': '.*', '_': '\\w', '?': '\\w+', 'V': '[aeiouAEIOU]', 'C': '[^aeiouAEIOU]'};
encodeQuery = (query) => Object.keys(wildcardsMapping).reduce((q, wc) => q.replace(wc, wildcardsMapping[wc]), query);

def = word => DICIONARIO.find(e => e.palavra == word)?.significado;

searcher = arr => (regex => arr.filter(x => regex.test(x)));

window.searchrx = searcher(window.LISTA_MENOR);
window.search = query => searchrx(new RegExp(encodeQuery(query)));

window.ssearchrx = searcher(window.LISTA_MAIOR);
window.ssearch = query => searchrx(new RegExp(encodeQuery(query)));

})();