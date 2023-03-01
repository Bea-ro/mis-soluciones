const fs = require('fs/promises')
const path = require('path')

const JSON_FILE = 'data.json'
const CSV_FILE = 'data.csv'
const READ_PATHNAME = path.join(__dirname, `./${JSON_FILE}`)
const WRITE_PATHNAME = path.join(__dirname, `./${CSV_FILE}`)


const main = async() => {
    const fileContent = await fs.readFile(READ_PATHNAME)
    const dataAsString = fileContent.toString();
    const data = JSON.parse(dataAsString)
    
    const headerColumns = Object.keys(data[0]);
    const valuesColumns = data.map((element) => Object.values(element)); 

    let csvContent = ``;
    csvContent += headerColumns.join(','); 
    
    valuesColumns.forEach((values) => {      
        let valuesString = '\n'            
        values.forEach(value => {                
          
            if(Array.isArray(value)) {       
               valuesString += `"${value.join(',')}",`;
               return
            }
    
            if (value.includes(',')) {     
                valuesString += `"${value}",`;  
                return
            };
    
            valuesString += `${value.toString()},`  
             
        })
    
            valuesString = valuesString.slice(0,valuesString.length -1) 
            csvContent += valuesString     
        })
    
    await fs.writeFile(WRITE_PATHNAME, csvContent)
    }

    main()