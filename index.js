let inner = document.querySelector('#inner')
let middle = document.querySelector('#middle')
let outer = document.querySelector('#outer')

inner.addEventListener('click', (e) => {
    // e.stopPropagation();
    console.log("Hello my baby,")
})

middle.addEventListener('click', (e) => {
    console.log("Hello my honey,")
})

outer.addEventListener('click', (e) => {
    console.log("Hello my ragtime gaaal!")
})

// let divs = [inner, middle, outer]

// divs.map(div => {
//     div.addEventListener('click', showEventPhase, true)
//     div.addEventListener('click', showEventPhase, false)
// })

function showEventPhase(e) {

    let phase = e.eventPhase;

    if (phase === 1) {
        phase = 'Capturing'
    } else if (phase === 2) {
        phase = 'At Target'
    } else if (phase === 3) {
        phase = 'Bubbling'
    }

    console.log('Div: ' + this.id + " - " + phase)

}