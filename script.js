let score = 0;

function askQuestion(type, question, answer){
    if(type == "prompt"){
        let user_answer = window.prompt(question)
        if(user_answer.toLowerCase() == answer.toLowerCase()){
            score += 1
            console.log(score)
            return true;
        }
    } else if(type == "confirm"){
        let user_answer = window.confirm(question)
        if(user_answer == answer){
            score += 1
            console.log(score)
            return true;
        }
    }
}

askQuestion("prompt", "Kolik nohou má průměrný občan Přerova?", "2")
askQuestion("prompt", "Kde najdeme největší počet perníku na osobu?", "Pardubice")
askQuestion("confirm", "Je v Praze blaze?", true)
askQuestion("prompt", "Kde se vyskytují kouzelné houbičky?", "všude")
askQuestion("confirm", "Je kilo železa těžší jak kilo vodního melounu?", false)
askQuestion("confirm", "Líbil se ti kvíz?", true)
window.alert("Konec! Máš " + score + " bodů")
