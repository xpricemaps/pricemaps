function changePicture() {
    let radioButton1 = document.getElementById('radioButton1')
    let radioButton2 = document.getElementById('radioButton2')
    let radioButton3 = document.getElementById('radioButton3')
    let radioButton4 = document.getElementById('radioButton4')
    let map = document.getElementById('mapCost')
    console.log(map)
    if (radioButton1.checked) {
        map.data = 'карта 1.html'
    }
    if (radioButton2.checked) {
        map.data = 'карта 2.html'
    }
    if (radioButton3.checked) {
        map.data = 'карта 3.html'
    }
    if (radioButton4.checked) {
        map.data = 'карта 4.html'
    }
}