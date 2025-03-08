///part 2

function split(string, delimiter){

    let line = []
    let tempLine =""
    
    for(let i = 0; i < string.length; i++)
    {
        if(i == (string.length - 1) && string[i] != delimiter)
            {
                tempLine+= string[i]
                line.push(tempLine)
                tempLine =""
            }
        else if(string[i] != delimiter)
        {
            tempLine += string[i]
        }
        
        else{
            line.push(tempLine)
            tempLine =""
        }    
    }
   // document.write(line)
    return line
}

function toString(string){
    let tempLine = ""
    for(const line of string)
    {   
        tempLine += line  + ","
    }
    return tempLine
}

let  strData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

let row = split(strData,"\n")
let cell = split(toString(row),",")

let numCol = row.length
//the reason i hate JS
let rowAndcol = Array.from({ length: numCol }, () => Array(numCol).fill(null));


document.write("<strong>Part 2</strong>")
document.write("<br>")
document.write("<br>")
let k = 0 
for(let i = 0; i < numCol; i++)
    {
        for(let j = 0; j < numCol-1;j++){
            rowAndcol[i][j] = cell[k] 
            document.write(rowAndcol[i][j] +" ")
            k++
        }
        document.write("<br>")
    }
//cache the array for some reason
let cache = rowAndcol
console.log(rowAndcol)