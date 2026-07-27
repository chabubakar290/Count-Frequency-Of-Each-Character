let str = "Hello World text";
function frequencyCounter(str){
    let lowercase_str = str.toLowerCase();
    let new_str = lowercase_str.replace(/ /g, "");

    let frequency = new Map();
    for(let i=0; i<new_str.length; i++){
        let char = new_str[i];
        if(frequency.has(char)){
            frequency.set(char, frequency.get(char) +1);
        }else{
            frequency.set(char, 1);
        }
        
    }
    return frequency;
}

let result = frequencyCounter(str);

let maxchar = "";
let maxcount = 0;

    for(let [key, value] of result){
        if(value > maxcount){
            maxcount =value;
            maxchar = key;
        }
    }
    console.log(`The Character ${maxchar} appears most frequently. Count: ${maxcount}`);
