// import {player1, player2} from './player.js'
import {player1, player2} from './class.js'
import {$form} from './attack.js'
import createElement from './createElement.js'
import generateLogs from './generateLogs.js'

export const $arenas = document.querySelector('.arenas')

const showResult = (name) => {
    const $winTitle = createElement('div', 'winTitle')
    if(name) {
        $winTitle.innerText = name + ' wins'
    } else {
        $winTitle.innerText = 'draw'
    }
    
    return $winTitle
}

const createReloadButton = () => {
    const $reloadWrap = createElement('div', 'reloadWrap')
    const $reloadBtn = createElement('button', 'button')
    $reloadBtn.innerText = 'Restart'
    $reloadWrap.appendChild($reloadBtn)

    $reloadBtn.addEventListener('click', function() {
        window.location.reload()
    })

    $arenas.appendChild($reloadWrap)

    return $reloadBtn
}

const showFinalResult = () => {
    if(player1.hp === 0 || player2.hp === 0) {
        $form.style.display = 'none'
        createReloadButton()
    }

    if(player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(showResult(player2.name))
        generateLogs('end', player2, player1)
    } else
        if(player2.hp === 0 && player2.hp < player1.hp) {
            $arenas.appendChild(showResult(player1.name))
            generateLogs('end', player1, player2)
        } else 
            if(player1.hp === 0 && player2.hp === 0) {
                $arenas.appendChild(showResult())
                generateLogs('draw')
        }
}

export default showFinalResult