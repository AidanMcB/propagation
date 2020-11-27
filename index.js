let inner = document.querySelector('#inner')
let middle = document.querySelector('#middle')
let outer = document.querySelector('#outer')

inner.addEventListener('click', showEventPhase)


middle.addEventListener('click', (e) => {
    showEventPhase(e)
    console.log("Hello my honey,")
})

outer.addEventListener('click', (e) => {
    showEventPhase(e)
    console.log("Hello my ragtime gaaal!")
})


function showEventPhase(e) {

    let phase = e.eventPhase;

    if (phase === 1) {
        phase = 'Capturing'
    } else if (phase === 2) {
        phase = 'At Target'
    } else if (phase === 3) {
        phase = 'Bubbling'
    }

    console.log('Box: ' + this.id + " - " + phase)
    // if(e.target.id === this) {
    //     console.log('Box: ' + e.target.id + " - " + phase)
    // }
}