const map = [
    [0, 0, 0, 1, 0, 0],
    [1, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [1, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

function drawBoxes() {
    map.forEach( (row, ri) => {
        row.forEach( ( column, ci) => {
            const box = document.createElement('div');
            document.body.appendChild(box);
            box.classList.add('box');
            if (player.r === ri && player.c === ci) {
                box.classList.add('player')
            }
            if (column === 1) {
                box.classList.add('wall')
            }

          
        })
        document.body.append(document.createElement('br'))
    })
}


const player = {r:0, c:0}


setInterval(function() {
    document.body.innerHTML = '';
    drawBoxes();
}, 100);

document.addEventListener('keydown', (event) => {
    console.log('you pressed', event)
    const r = player.r;
    const c = player.c;
    if (event.key === 'ArrowRight') {
        player.c++;
    }
    if (event.key === 'ArrowDown') {
        player.r++;
    }
    if (event.key === 'ArrowLeft') {
        player.c--;
    }
    if (event.key === 'ArrowUp') {
        player.r--;
    }
    if (map[player.r][player.c] === 1 || player.r < 0 || player.c < 0 || player.c > map[0].length - 1) {
        player.r = r;
        player.c = c;
    }
})


