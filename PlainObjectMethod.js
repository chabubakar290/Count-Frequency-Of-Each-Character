let str = "Hello World text";
function frequencyCounter(str){
    let lowercase_str = str.toLowerCase();
    let new_str = lowercase_str.replace(/ /g, "");

    let frequency = {};
    for(let i=0; i<new_str.length; i++){
        let char = new_str[i];
        if(frequency[char]){
            frequency[char]++;
        }else{
            frequency[char] = 1;
        }
        
    }
    return frequency;
}

let values = frequencyCounter(str);

let keys = Object.keys(values);

console.log(values);
let maxchar = "";
let maxcount = 0;

    for(let i = 0; i<keys.length; i++){
        let char = keys[i];

        if(values[char] > maxcount){
            maxcount = values[char];
            maxchar = char;
        }
        
    }
    console.log(`The Character ${maxchar} appears most frequently. Count: ${maxcount}`);
