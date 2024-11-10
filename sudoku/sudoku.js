var numSelected = null;
var tileSelected = null;

var errors =0;
var board =[
    "9-347-6--",
    "-16-35---",
    "-7-6--3--",
    "--8---92-",
    "-3-----6-",
    "-91---4--",
    "--9--4-8-",
    "---21-59-",
    "--5-872-6"
]
var solution =[
    "983471652",
    "216835749",
    "574692318",
    "758146923",
    "432759861",
    "691328475",
    "329564187",
    "867213594",
    "145987236"
]
window.onload = () => {
    setGame();
};

function setGame() {
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("numbers");
        document.getElementById("digits").appendChild(number);
    }

    // board 9x9 
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }
        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id
        }else{
            errors += 1;
            document.getElementById("errors").innerText = errors
        }   
    }
}
