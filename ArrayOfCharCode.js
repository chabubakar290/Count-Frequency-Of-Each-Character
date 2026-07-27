let str = "Hello World text";
function frequencyCounter(str){
    let lowercase_str = str.toLowerCase();
    let new_str = lowercase_str.replace(/ /g, "");

    let frequency = [];
    for(let i=0; i<new_str.length; i++){
        let char = new_str[i];
        let code = char.charCodeAt();
        if(frequency[code]){
            frequency[code]++;
        }else{
            frequency[code] = 1;
        }
        
    }
    return frequency;
}

let values = frequencyCounter(str);

let maxChar = "";
let maxCount = 0;

    for(let i = 0; i<values.length; i++){
        if(values[i]){
            let key = String.fromCharCode(i);
            console.log(key, values[i]);
                if(values[i] > maxCount){
                maxCount = values[i];
                maxChar = key;
            }
        }
        
        
        
    }
    console.log(`The Character ${maxChar} appears most frequently. Count: ${maxCount}`);
