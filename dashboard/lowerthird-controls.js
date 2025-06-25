const titleInput = document.getElementById("title");
const subtitleInput = document.getElementById("subtitle");

function update() {
	const data = { title: titleInput.value, subtitle: subtitleInput.value };
	nodecg.sendMessage("showLowerthird", data);
}
