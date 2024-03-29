function rank(st, we, n) {
    let scores = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let temp = st.split(",");
    let original = st.split(",");

    if (temp.length == 0 || st == "") return "No participants";
    else if (temp.length < n) return "Not enough participants";

    temp = temp.map(ele => {
        return ele.toLowerCase();
    });


    let scoresArray = [];
    temp.forEach((string, index) => {
        let score = string.length;
        for (let i = 0; i < string.length; i++) {
            score += scores.indexOf(string[i]) + 1;
        }

        score *= we[index];
        scoresArray.push(score);
    })

    let t = scoresArray.map((ele, index) => {
        return { score: ele, name: original[index] }
    })
    return t.sort((a, b) => {
        if (a.score != b.score) return b.score - a.score;
        else return ('' + a.name).localeCompare(b.name);
    })[n - 1].name;
}

console.log(rank("Emma,Emily,Willaim,William,Elijah,Abigail,Mia,Samantha,Aiden,Grace,Jacob,Olivai,Alexander,Matthew,Lagon,James,Natalie,David,Ava,Daniel,Michael", [6, 5, 3, 6, 1, 3, 2, 3, 3, 4, 3, 6, 1, 6, 2, 1, 6, 2, 4, 3, 6], 16));