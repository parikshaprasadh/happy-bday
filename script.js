yes_btn = document.getElementById("yes")
no_btn = document.getElementById("no")
question = document.querySelector(".question")
hehe = document.querySelector("p")

no_btn.addEventListener("mouseover", () =>{
    const newX = Math.floor(Math.random() * 500);
    const newY = Math.floor(Math.random() * -250);
    no_btn.style.left = `${newX}px`;
    no_btn.style.top = `${newY}px`;
    hehe.style.display = "inline";
});

