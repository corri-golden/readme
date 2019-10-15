console.log("Hello World")

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];


function addExcitement (theWordArray) {

        // Each time the for loop executes, you're going to add one more word to this string
        let buildMeUp = ""
    
        for (let i = 0; i < theWordArray.length; i++) {
            console.log(buildMeUp += theWordArray[i] + " ")
            // Concatenate the new word onto buildMeUp
            // Print buildMeUp to the console
         if (i % 3 == 2){
            console.log(buildMeUp += theWordArray[i] + "?");
        } 
        }
    }
 //addExcitement(sentence), "?";
    // buildMeUp += theWordArray[i] + " "
// I want to use a question mark
 addExcitement(sentence), "?";

 //else {
    //console.log(buildMeUp += theWordArray[i] + "?");