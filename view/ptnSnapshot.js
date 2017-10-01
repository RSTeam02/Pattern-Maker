export class PatternSnapshot {

	constructor() {
		this.ptnId = 0;
	}

	insertPattern(id, val) {
		var snap = document.getElementById("snapshot");
		var listEl = document.createElement("li");
		listEl.setAttribute("class", "listElement");
		listEl.setAttribute("id", id);
		snap.appendChild(listEl);
		for (let i = 0; i < val.length; i++) {
			for (let j = 0; j < val[i].length; j++) {
				listEl.innerHTML += `<span id = ${this.ptnId}${id}>${String.fromCodePoint(9632)}</span>`;
				var pixelCol = (val[i][j] === "1") ? "red" : "green";
				$(`#${this.ptnId}${id}`).css({ "color": pixelCol });
				this.ptnId++;
			}
			listEl.innerHTML += "<br>";
		}

	}

}
