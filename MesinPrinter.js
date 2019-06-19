let huruf = ["a","b","c","d"]
let perintah = ["true", "false", "false", "true"]
let count = 0;

huruf.forEach (function(data){
    if(perintah[count] == "true"){
        console.log(data)
    }
    count++
})
