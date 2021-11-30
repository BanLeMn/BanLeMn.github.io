alert("You are hungry, do you want a sandwich?")

let yes_or_no = prompt("Do you (1) want a sandwhich or (2) not want a sandwich?")

if(yes_or_no == 1) {
    let slice_or_bun = prompt("Would you like your sandwich on a (1) slice of bread or a (2) bun?")
    if(slice_or_bun == 1){
        let white_or_wheat = prompt("Would you like your bread to be (1) white bread or (2) wheat bread?")
        if(white_or_wheat == 1){
        let untoasted_or_toasted = prompt("Would you like to (1) toast the bread or (2) leave it untoasted?")
        if(untoasted_or_toasted == 1){
            let ham_or_turkey = prompt("Would you like (1) ham or (2) turkey?")
            if(ham_or_turkey == 1){
                let toppings_or_plain = prompt("Would you like (1) toppings or do you prefer it (2) plain?")
                if(toppings_or_plain == 1){
                    let mayo_or_none = prompt("We only have Mayo. Do you want (1) Mayo or just (2) plain?")
                    if(mayo_or_none == 1){
                        let alot_or_alittle = prompt("Do you want (1) alot of mayo or (2) just a little?")
                        if(alot_or_alittle == 1){
                            alert("Dear God. The sandwich is JUST MAYO NOW! WHAT DID YOU DO?! WHY DID YOU COVER THE ENTIRE THING IN MAYO?! NO ONE MAN NEEDS THAT MUCH MAYO! WAIT YOU'RE GONNA EAT IT?! OH THAT IS DISGUSTING")
                            alert("The sheer amount of mayo clogged up your lungs. You died of asphyxiation.")
                        }
                        else{
                            alert("Alright then, enjoy your ham sandwich with Mayo.")
                        }
                    }
                    else{
                        alert("Plain sandwich huh? I get it, I'm not a big mayo guy after what happened last time. Enjoy!")
                    }
                }
                else{
                    alert("Plain sandwich huh? I like it, simple and stright to the point. Enjoy!")
                }

            }
            else{
                alert("Thansgiving was a week ago and you want more turkey? That's disgusting.")
            }
        }
        else{
            alert("You burnt the bread. Lunch is ruined.")
        }
        } else{
            alert("Wheat bread? WHEAT bread? Might as well poison yourself now.")
        }
    } else{
        alert("We're making a sandwich, not a burger. If you think using a bun is acceptable for this meal then get out.")
    }
} else {
    alert("Fine then, you can starve.")
}