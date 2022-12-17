import Fav from '../page/favorites.page'

describe('test cases for empty wishlist', () => {
    beforeEach(() => {
        cy.visit('/favorites')
        //go to favourites page before executing each test
    })

    it('displays page header text', () => {
        cy.get(Fav.headerTxt).should('be.visible')
    })
    
    it('displays appropriate text when no favorites have been added', () => {
        cy.get(Fav.noFavoritesTxt).should('be.visible')
    })

    it('does not display products when no favorites have been added', () => {
        cy.get(Fav.productTile).should('not.exist')
    })
})

describe('test cases when/after adding item to wishlist', () => {
    
    beforeEach(() => {
        cy.visit('/products')
        //go to favourites page before executing each test
    })

    it('can add item to favorites page', () => {
        cy.get('#add-to-favorite')
        .first()
        .click()
        
        cy.visit('/favorites')
        cy.get(Fav.productTile)
        .should('be.visible')
    })

    it('can remove item from favorites page', () => {
        cy.get('#add-to-favorite')
        .first()
        .click()
        
        cy.visit('/favorites')
        cy.get(Fav.productTile)
        .should('be.visible')

        cy.get(Fav.removeFavoriteBtn).click()
        cy.get(Fav.productTile)
        .should('not.exist')
    })
})

    


