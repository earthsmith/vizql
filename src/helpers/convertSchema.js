const Sequelize = require('sequelize');

//using the .models method, traverses down to the attributes and stores all
//attribute names in an array along with the associated table

const convertSchemas = (schema) => {
    let schemas = {};
    for (let modelKey in schema.models) {
        const model = schema.models[modelKey]; 
        let columnNames = []; 
        for (let attribute in model.rawAttributes) {  
            columnNames.push(attribute); 
        }

        schemas[modelKey] = columnNames; 
    }

    return schemas;
}

module.exports = convertSchemas;