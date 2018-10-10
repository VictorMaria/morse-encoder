function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
 return string.split(toBeReplaced).join(replaceWith);
};

function encode(){
let string = document.getElementById('nlw').value
  let morseTranslation = { a: '.-', b: '-...', c: '_._.', d: '-..', e: '.', f: '..-.', g: '--.', h:'....', i: '..', j: '.---', k: '-.-', l: '.-..', m: '--', n: '-.', o: '---', p: '.--.', q: '--.-', r: '.-.', s: '...', t: '-', u: '..-', v: '.. .-', w: '.--', x: '-..-', y: '-.--', z: '--..', A: '.-', B: '-...', C: '_._.', D: '-..', E: '.', F: '..-.', G: '--.', H:'....', I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '.. .-', W: '.--', X: '-..-', Y: '-.--', Z: '--..', 1: '.----', 2:'..---', 3: '...--', 4: '....-', 5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.', 0: '-----' }
for (let key in morseTranslation){
     string = replaceAllOccurrences(string, key, morseTranslation[key])
}
document.getElementById('code').innerHTML = `Morse code: ${string}`
  
}
