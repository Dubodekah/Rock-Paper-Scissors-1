function computerPlay() {

    let decision = Math.floor(Math.random() * 3) + 1;
    let choice;

    switch (decision) {

        case 1:
            choice = "Rock";
            return choice;
         break;
        case 2:
            choice = "Paper";     
            return choice;
        break;
        case 3:
            choice = "Scissors"
            return choice;
        break;
    }
};