let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],
    addPlayer: function (name, scores = []) {    
        if (scores.length === 0) {
            for (let i = 1; i <= 10; i++) {
                scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
            }
        }
        this.players.push({
            name: name,      
            scores: scores
        });
        console.log(`Player ${name} has been added!`);
    },
    processPlayers: function () {
        this.players.forEach((player) => {
            for (let i = 1  ; i <= 10   ; i++) {
                player.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1))
            }
            if (player.scores.length === 0 ) {
                for (let i = 1; i <= 10; i++) {
                    scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
            }
    }}); 
    },
    
    totalPlayerPoints: function () {
        let highestScore = 0;
        let winner = ``;
        this.players.forEach((player) => {
        let total = 0;
            player.scores.forEach((score)=>{    
                total += score
            })
            if (total > highestScore) {
                highestScore = total;
                winner = player.name
            }
        });
        console.log(`${winner} scored ${highestScore} points, LOOKS LIKE WE HAVE A WINNER!!!`); 
    },

    upsideDownSort: function () {
        this.players.forEach((player) => {
            player.scores.sort((a, b) => b - a);
        });
    },

    
};
console.log(bowling.players); //per vedere che sono upside down
bowling.processPlayers();
bowling.totalPlayerPoints(``);
bowling.upsideDownSort();
bowling.addPlayer("Gianluca" ,[])
console.log(bowling.players);

