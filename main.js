import Game from './game.js';

const game = new Game();

game.start();
console.log(game)

// import {player1, player2} from './class.js'
// import createElement from './createElement.js'
// import generateLogs from './generateLogs.js'
// import showFinalResult from './resault.js'
// import {playerAttack, enemyAttack} from './attack.js'

// import {$arenas} from './resault.js'
// import {$form} from './attack.js'

// const createPlayer = ({ player, name, hp, img }) => {

//     const $player = createElement('div', `player${player}`)
//     const $progressBar = createElement('div', 'progressbar')
//     const $life = createElement('div', 'life')
//     const $name = createElement('div', 'name')
//     const $character = createElement('div', 'character')
//     const $imgCharacter = createElement('img')

//     $player.appendChild($progressBar)
//     $player.appendChild($character)
//     $progressBar.appendChild($life)
//     $progressBar.appendChild($name)
//     $character.appendChild($imgCharacter)

//     $life.style.width = hp + '%'
//     $name.innerText = name
//     $imgCharacter.setAttribute('src', img)

//     return $player
// }

// const init = () => {
//     generateLogs('start', player1, player2)
//     $arenas.appendChild(createPlayer(player1))
//     $arenas.appendChild(createPlayer(player2))
// }

// init()

// $form.addEventListener('submit', function(e) {
//     e.preventDefault()
//     const enemy = enemyAttack()
//     const player = playerAttack()

//     if(player.defence !== enemy.hit) {
//          player1.changeHP(enemy.value)
//          player1.renderHP()
//          generateLogs('hit', player2, player1, enemy.value)
//     } else {
//         generateLogs('defence', player2, player1)
//     }
        
//     if(enemy.defence !== player.hit) {
//         player2.changeHP(player.value)
//         player2.renderHP()
//         generateLogs('hit', player1, player2, player.value)
//     } else {
//         generateLogs('defence', player1, player2)
//     }

//     showFinalResult()
// })




