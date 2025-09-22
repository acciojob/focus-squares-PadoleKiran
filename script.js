const squares = document.querySelectorAll(".square");

// loop through each square
squares.forEach(square => {
  square.addEventListener("mouseover", () => {
    squares.forEach(sq => {
      if (sq === square) {
        sq.style.backgroundColor = "#E6E6FA"; // hovered stays Lavender
      } else {
        sq.style.backgroundColor = "#6F4E37"; // others turn Coffee
      }
    });
  });

  square.addEventListener("mouseout", () => {
    // reset all to Lavender when cursor leaves
    squares.forEach(sq => {
      sq.style.backgroundColor = "#E6E6FA";
    });
  });
});
