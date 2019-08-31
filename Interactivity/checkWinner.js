function checkWinner(cells, count) {
	if (cells[0].innerText == "X") {
		if (cells[1].innerText == "X" && cells[2].innerText == "X") {
			return "VICTORY";
		}
		if (cells[3].innerText == "X" && cells[6].innerText == "X") {
			return "VICTORY";
		}
		if (cells[4].innerText == "X" && cells[8].innerText == "X") {
			return "VICTORY";
		}
	}
	if (cells[1].innerText == "X") {
		if (cells[4].innerText == "X" && cells[7].innerText == "X") {
			return "VICTORY";
		}
	}
	if (cells[2].innerText == "X") {
		if (cells[5].innerText == "X" && cells[8].innerText == "X") {
			return "VICTORY";
		}
		if (cells[4].innerText == "X" && cells[6].innerText == "X") {
			return "VICTORY";
		}
	}
	if (cells[3].innerText == "X") {
		if (cells[4].innerText == "X" && cells[5].innerText == "X") {
			return "VICTORY";
		}
	}
	if (cells[6].innerText == "X") {
		if (cells[7].innerText == "X" && cells[8].innerText == "X") {
			return "VICTORY";
		}
	}
	//o
	if (cells[0].innerText == "O") {
		if (cells[1].innerText == "O" && cells[2].innerText == "O") {
			return "LOSS";
		}
		if (cells[3].innerText == "O" && cells[6].innerText == "O") {
			return "LOSS";
		}
		if (cells[4].innerText == "O" && cells[8].innerText == "O") {
			return "LOSS";
		}
	}
	if (cells[1].innerText == "O") {
		if (cells[4].innerText == "O" && cells[7].innerText == "O") {
			return "LOSS";
		}
	}
	if (cells[2].innerText == "O") {
		if (cells[5].innerText == "O" && cells[8].innerText == "O") {
			return "LOSS";
		}
		if (cells[4].innerText == "O" && cells[6].innerText == "O") {
			return "LOSS";
		}
	}
	if (cells[3].innerText == "O") {
		if (cells[4].innerText == "O" && cells[5].innerText == "O") {
			return "LOSS";
		}
	}
	if (cells[6].innerText == "O") {
		if (cells[7].innerText == "O" && cells[8].innerText == "O") {
			return "LOSS";
		}
	}
	if (count == 9) {
		return "DRAW";
	}
	return "continue";
}
