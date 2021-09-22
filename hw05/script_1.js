function init() {
    createChessboard()
}

function createChessboard() {
    var chessboard = document.createElement("div")
    chessboard.className = "chessboard"
    chessboard.style.display = "flex"
    chessboard.style.flexDirection = "column"

    const HORIZONTAL_MARKUP = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '']
    const VERTICAL_MARKUP = ['', '1', '2', '3', '4', '5', '6', '7', '8', '']
    let isHorizontalMarkup, isVerticalMarkup

    const CHESS_ARRANGEMENT = ['P', 'C', 'N', 'B', 'Q', 'K', 'B', 'N', 'C']
    /*
    индекс 0: обозначение пешки
    индексы 1-8: расстановкаовка фигур "задней" линии
    P(Pawn)-пешка    C(Castle)-ладья    N(kNight)-конь
    B(Bishop)-слон    Q(Queen)-ферзь    K(King)-король
    */

    for (let i = 9; i >= 0; i--) {
        let row = document.createElement("div")
        row.className = "row"
        row.style.display = "flex"
        row.style.flexDirection = "row"

        isHorizontalMarkup = (i == 9 || i == 0) ? true : false

        for (let j = 0; j <= 9; j++) {
            let space = document.createElement("div")
            space.className = "space"
            space.style.height = "50px"
            space.style.width = "50px"
            space.style.boxSizing = "border-box"
            space.style.textAlign = "center"
            space.style.fontSize = "26px"
            space.style.textShadow = "1px 1px grey"
            space.style.paddingTop = "10px"

            isVerticalMarkup = (j == 0 || j == 9) ? true : false

            if (isHorizontalMarkup || isVerticalMarkup) {
                space.style.color = "darkblue"
                space.classList.add("markup")
                if (isHorizontalMarkup) {
                    space.innerText = HORIZONTAL_MARKUP[j]
                }
                if (isVerticalMarkup) {
                    space.innerText = VERTICAL_MARKUP[i]
                }
            } else {
                space.style.border = "1px solid #000"
                if ((i + j) % 2) { // раскарска полей
                    space.style.backgroundColor = "#ddd"
                    space.classList.add("space-white")
                } else {
                    space.style.backgroundColor = "#222"
                    space.classList.add("space-black")
                }

                if (i == 8 || i == 7) { // выбираем цвет фигуры
                    space.style.color = "#000"
                } else if (i == 1 || i == 2) {
                    space.style.color = "#fff"
                }

                if (i == 2 || i == 7) { // выставляем нужную фигуру
                    space.innerText = CHESS_ARRANGEMENT[0]
                } else if (i == 1 || i == 8) {
                    space.innerText = CHESS_ARRANGEMENT[j]
                }
            }
            row.appendChild(space)
        }
        chessboard.appendChild(row)
    }
    document.body.appendChild(chessboard)
}

window.onload = init