const team1Rep = nodecg.Replicant('team1');
const team2Rep = nodecg.Replicant('team2');

const team1El = document.getElementById('team1');
const team2El = document.getElementById('team2');

team1Rep.on('change', (newVal) => {
	team1El.innerHTML = newVal;
})

team2Rep.on('change', (newVal) => {
	team2El.innerHTML = newVal;
})