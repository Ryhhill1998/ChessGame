const board = document.getElementById("board");
let selectedSpace = null;

const highlightSpace = ({target}) => {
    const space = target.closest(".space");
    removeSpaceHighlight(selectedSpace);
    if (selectedSpace === space) {
        selectedSpace = null;
    } else {
        space.style.borderColor = "red";
        selectedSpace = space;
    }
}

const removeSpaceHighlight = (space) => {
    if (!space) return;

    if (space.classList.contains("space-blue")) {
        space.style.borderColor = "#3A8891";
    } else {
        space.style.borderColor = "#E2DCC8";
    }
}

board.addEventListener("click", highlightSpace);