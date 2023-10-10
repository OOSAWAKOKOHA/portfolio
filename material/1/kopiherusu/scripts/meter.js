const COLOR = "#C7F0ED"

const meterButtons = document.querySelectorAll(".meter-buttons")

meterButtons.forEach((button) => {
	button.innerHTML = new Array(10).fill().map((_, i)=> {return `<button data-count="${i}"></button>`}).join("")
	
	const buttons = button.querySelectorAll("button")
	buttons.forEach((btn, index) => {
		btn.addEventListener("click", (e) => {
			buttons.forEach((btn, index) => {
				btn.style.background = "white"
			})
			for(let i = 0; i <= e.target.dataset.count; i++){
				buttons[i].style.background = COLOR
			}
		})
	})
})
