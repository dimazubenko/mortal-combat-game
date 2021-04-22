class Player {
    constructor(props) {
        this.player = props.player
        this.name = props.name
        this.hp = props.hp
        this.img = props.img
    }
    changeHP = (damage) => {
        this.hp -= damage
        console.log(this.hp)
    
        if(this.hp <= 0) {
            this.hp = 0
        }
    }
    attack = () => {
        console.log(`${this.name} - Fight...`)
    }
    renderHP = () => {
        this.elHP().style.width = this.hp + '%'
    }
    elHP = () => {
        const $playerLife = document.querySelector(`.player${this.player} .life`)
        return $playerLife
    }
}

export const player1 = new Player ({
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'assets/characters/scorpion.gif'
})

export const player2 = new Player ({
    player: 2,
    name: 'SUB-ZERO',
    hp: 100,
    img: 'assets/characters/subzero.gif'
})