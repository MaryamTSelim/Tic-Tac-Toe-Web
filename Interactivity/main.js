window.addEventListener("load", e => {
	let cells = document.querySelectorAll("td");
	let turn = true;
	let count = 0;
	cells.forEach((cell, i) => {
		cell.addEventListener(
			"click",
			e => {
				e.preventDefault();

				if (cell.innerText == "") {
					cell.innerText = "X";
					count++;
					setTimeout(() => {
						if (count < 8) {
							let i;
							do {
								i = Math.floor(Math.random() * 9);
							} while (cells[i].innerText != "");
							cells[i].innerText = "O";
							console.log(i);
							count++;
						}
						if (count >= 5) {
							let result = checkWinner(cells, count);
							if (result != "continue") {
								alert(result);
								cells.forEach(cell => {
									cell.innerText = "";
									count = 0;
								});
							}
						}
					}, 200);
				}
			},
			false
		);
	});
});
