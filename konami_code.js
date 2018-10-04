const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init() {
  var typed = []
  document.body.addEventListener('keydown', (event) => {
    typed.push(event.key)
    console.log(typed)
    for (var i = 0; i < typed.length; i++) {
      if (typed[i] !== codes[i]) {
        typed = []
      }
      if (typed.length && typed.length === codes.length) {
        alert('Konamiiiiied!')
        return
      }
    }
  })
}
