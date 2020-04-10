document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'person-one',
            img: '../images/memory-game/card-01.png'
        },
        {
            name: 'person-one',
            img: '../images/memory-game/card-01.png'
        },
        {
            name: 'person-two',
            img: '../images/memory-game/card-02.png'
        },
        {
            name: 'person-two',
            img: '../images/memory-game/card-02.png'
        },
        {
            name: 'person-three',
            img: '../images/memory-game/card-03.png'
        },
        {
            name: 'person-three',
            img: '../images/memory-game/card-03.png'
        },
        {
            name: 'person-four',
            img: '../images/memory-game/card-04.png'
        },
        {
            name: 'person-four',
            img: '../images/memory-game/card-04.png'
        },
        {
            name: 'person-five',
            img: '../images/memory-game/card-05.png'
        },
        {
            name: 'person-five',
            img: '../images/memory-game/card-05.png'
        },
        {
            name: 'person-six',
            img: '../images/memory-game/card-06.png'
        },
        {
            name: 'person-six',
            img: '../images/memory-game/card-06.png'
        }
    ]

    const grid = document.querySelector('.grid')

    // Create Board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', '../assets/images/back.png')
            //card.setAttribute('data-id', i)
            //card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    createBoard();


})


