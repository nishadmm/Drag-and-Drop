let image = document.querySelector(".fill"),
  boxes = document.querySelectorAll(".empty");

image.addEventListener("dragstart", dragStart);
image.addEventListener("dragend", dragEnd);

boxes.forEach(box => {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", dragDrop);
})


function dragStart() {
  this.classList.add("hold");
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  this.classList.add("hovered")
  e.preventDefault();
}
function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(image);
}
