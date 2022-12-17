class Favorites {

    get headerTxt(){ return ('.chakra-container h2:nth-child(1).chakra-heading')}
    get noFavoritesTxt(){ return('h2:nth-child(2).chakra-heading')}
    get productTile(){ return ('.chakra-aspect-ratio img.chakra-image')}
    get removeFavoriteBtn(){ return('#remove-favorite-btn')}
}

export default new Favorites()