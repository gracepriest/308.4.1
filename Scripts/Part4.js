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
//using a class dont need but wanted to test
 class Person  {
    constructor(ID, Name, Occupation, age ) {
        this.id = ID
        this.name = Name
        this.occupation = Occupation
        this.age = age
      }
}

let content = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

let row = split(content, "\n")
let cell = split(toString(row), ",")

//array of Person
const persons = []

let rowLength = row.length
let collength =row.length

//still hate Js
let rowAndcol = Array.from({ length: rowLength}, () => Array(rowLength).fill(null))


for(let i = 0 ,j =0; i < cell.length / 4 ; i++)
{
    
   persons.push(new Person(cell[j],cell[j + 1],cell[j + 2],cell[j + 3]))
   j += 4
}


let k = 0
//
let table = document.getElementById("mainTable")
// let thead = document.createElement("thead")
// thead.classList.add("table-dark")

// let tr = document.createElement("tr");

// //header
// //i should have created a seperated header and body
// //but since i was testing stuff i made a header, but the body has all data
// let headerCellarr = []
// for(let i = 0; i < 4; i++)
// {
//     headerCellarr.push(document.createElement("th"))
// }
// //only need the first 4
// let count = 0
//     //so it keeps the same value
// for (const item of persons) {
//     for(const value of Object.values(item)){
//         headerCellarr[count].textContent = value.toUpperCase()
        
//         if(count == 3){
//             break;
//         }
//         count++
//         }
//             //only need the first person which is going to be the header
//             break;
//     }

// for(const item of headerCellarr)
// {
//     tr.appendChild(item)
// }



// thead.appendChild(tr);

// // Append the thead to the table
// table.appendChild(thead);

/** Remove the last element from the sorted array.*/
persons.shift()
persons.pop()
persons.splice(1,0,new Person( "48", "Barry",  "Runner",  "25" ))
persons.push(new Person("7","Bilbo", "None","111"))
let i = 0
let j = 0
for (const item of persons) {
    for(const value of Object.values(item)){
        rowAndcol[i][j] = value
        document.write(rowAndcol[i][j] + "   ")
        i++
        j++
        }
        document.write("<br>")
        i = 0 
        j = 0
    }
let sum = 0
for(let h =0; h <persons.length; h++)
{
    sum +=  parseInt(persons[h].age)
}
document.write("This is the sum of the ages: " + sum)
console.log("This is the sum of the ages: " + sum)
document.write("<br>")
sum =  parseInt(sum) / persons.length
console.log("This is the avg of the ages: " + sum)
document.write("This is the avg of the ages: " + sum)
   
   

document.write("</table>")


console.log(persons)