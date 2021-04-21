import {player1, player2} from './player.js'
import createElement from './createElement.js'
import generateLogs from './generateLogs.js'
import showFinalResult from './resault.js'
import {playerAttack, enemyAttack} from './attack.js'

import {$arenas} from './resault.js'
import {$form} from './attack.js'

const {player, name, hp, img} = player1

const createPlayer = (playerNum) => {

    const $player = createElement('div', 'player'+playerNum.player)
    const $progressBar = createElement('div', 'progressbar')
    const $life = createElement('div', 'life')
    const $name = createElement('div', 'name')
    const $character = createElement('div', 'character')
    const $imgCharacter = createElement('img')

    $player.appendChild($progressBar)
    $player.appendChild($character)
    $progressBar.appendChild($life)
    $progressBar.appendChild($name)
    $character.appendChild($imgCharacter)

    $life.style.width = playerNum.hp + '%'
    $name.innerText = playerNum.name
    $imgCharacter.setAttribute('src', playerNum.img)

    return $player
}

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))

generateLogs('start', player1, player2)

$form.addEventListener('submit', function(e) {
    e.preventDefault()
    const enemy = enemyAttack()
    const player = playerAttack()

    if(player.defence !== enemy.hit) {
         player1.changeHP(enemy.value)
         player1.renderHP()
         generateLogs('hit', player1, player2, enemy.value)
    } else {
        generateLogs('defence', player1, player2)
    }
        
    if(enemy.defence !== player.hit) {
        player2.changeHP(player.value)
        player2.renderHP()
        generateLogs('hit', player2, player1, player.value)
    } else {
        generateLogs('defence', player2, player1)
    }

    showFinalResult()
})




