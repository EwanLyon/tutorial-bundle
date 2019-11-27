const team1Rep = nodecg.Replicant('team1', {defaultValue: 0});
const team2Rep = nodecg.Replicant('team2', {defaultValue: 0});

function scoreTeam1(){
	team1Rep.value++;
}

function scoreTeam2(){
	team2Rep.value++;
}