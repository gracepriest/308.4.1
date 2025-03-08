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

for(let i = 0 ,j =0; i < cell.length /4; i++)
{
    
   persons.push(new Person(cell[j],cell[j + 1],cell[j + 2],cell[j + 3]))
   j += 4
}

// 
let table = document.getElementById("mainTable")
let thead = document.createElement("thead")
thead.classList.add("table-dark")

let tr = document.createElement("tr");

//header
//i should have created a seperated header and body
//but since i was testing stuff i made a header, but the body has all data
let headerCellarr = []
for(let i = 0; i < 4; i++)
{
    headerCellarr.push(document.createElement("th"))
}
//only need the first 4
let count = 0
    //so it keeps the same value
for (const item of persons) {
    for(const value of Object.values(item)){
        headerCellarr[count].textContent = value.toUpperCase()
        
        if(count == 3){
            break;
        }
        count++
        }
            //only need the first person which is going to be the header
            break;
    }

for(const item of headerCellarr)
{
    tr.appendChild(item)
}

thead.appendChild(tr);

// Append the thead to the table
table.appendChild(thead);

let tbody = document.createElement("tbody")
//
let tableDatArr = []
for(let i = 0; i < 20; i++)
{
    tableDatArr.push(document.createElement("td"))
}
count = 0
let tr2 = document.createElement("tr");
for (const item of persons) {
    for(const value of Object.values(item)){
      
       tableDatArr[count].textContent = value
       count++
    }
}

for(let i = 4; i < 8; i++)
{
    tr2.appendChild(tableDatArr[i])
}


 let tr3 = document.createElement("tr");


for(let i = 8; i < 12; i++)
    {
        tr3.appendChild(tableDatArr[i])
    }


let tr4 = document.createElement("tr");

for(let i = 12; i < 16; i++)
    {
        tr4.appendChild(tableDatArr[i])
    }


let tr5 = document.createElement("tr");

for(let i = 16; i < 20; i++)
    {
        tr5.appendChild(tableDatArr[i])
    }

tbody.appendChild(tr2)
tbody.appendChild(tr3)
tbody.appendChild(tr4)
tbody.appendChild(tr5)
table.appendChild(tbody)

document.write("</table>")
//bootleg just del first 4
persons.shift()
console.log(persons)