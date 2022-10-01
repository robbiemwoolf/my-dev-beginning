const sentencesArray = [
    'My dog is fast',
    'I ran after my dog',
    'I will see you after work'
]
// how to remove periods if they are there
function sameWords(sentencesArray) {
    const wordMap = new Map()
    for (let j=0; j<sentencesArray.length; j++) {
        let sentenceArray = sentencesArray[j].toLowerCase().split(' ')
        for (let i=0; i<sentenceArray.length; i++) {
            let value = []
            if (wordMap.has(sentenceArray[i])) {
                wordMap.get(sentenceArray[i], value).push([j, i])
            } else { 
                value.push([j, i])           
                wordMap.set(sentenceArray[i], value)
            }
        }     
    }
console.log(wordMap)
}

sameWords(sentencesArray)