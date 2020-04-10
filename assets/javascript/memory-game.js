document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'person-one',
            img: 'assets/images/memory-game/card-01.png'
        },
        {
            name: 'person-one',
            img: 'assets/images/memory-game/card-01.png'
        },
        {
            name: 'person-two',
            img: 'assets/images/memory-game/card-02.png'
        },
        {
            name: 'person-two',
            img: 'assets/images/memory-game/card-02.png'
        },
        {
            name: 'person-three',
            img: 'assets/images/memory-game/card-03.png'
        },
        {
            name: 'person-three',
            img: 'assets/images/memory-game/card-03.png'
        },
        {
            name: 'person-four',
            img: 'assets/images/memory-game/card-04.png'
        },
        {
            name: 'person-four',
            img: 'assets/images/memory-game/card-04.png'
        },
        {
            name: 'person-five',
            img: 'assets/images/memory-game/card-05.png'
        },
        {
            name: 'person-five',
            img: 'assets/images/memory-game/card-05.png'
        },
        {
            name: 'person-six',
            img: 'assets/images/memory-game/card-06.png'
        },
        {
            name: 'person-six',
            img: 'assets/images/memory-game/card-06.png'
        }
    ]
    
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // Create Board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/images/memory-game/back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // Check for Matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            //alert('Nice! You found a match!')
            cards[optionOneId].setAttribute('src', 'assets/images/memory-game/blank.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/memory-game/blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'assets/images/memory-game/back.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/memory-game/back.png')
            //alert('Sorry, try again.')
        }
        cardsChosen =  []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Wow! You found them all!'
        }
    }

    // Flip Card
    function flipCard (){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
     
    createBoard();

})



