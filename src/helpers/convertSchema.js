const Sequelize = require('sequelize');

//using the .models method, traverses down to the attributes and stores all
//attribute names in an array along with the associated table

const hasRelation = (attr) => {
    if (attr['references']) return true;
    return false;
}

const convertSchemas = (schema) => {
    let schemas = {};
    for (let modelKey in schema.models) {
        const model = schema.models[modelKey];
        let columnNames = [];
        for (let attribute in model.rawAttributes) {
            let dataType = model.rawAttributes[attribute]['type'].constructor.key;
            columnNames.push({ content: attribute, type: dataType, relation: hasRelation(model.rawAttributes[attribute]) });
        }

        schemas[modelKey] = columnNames;
    }
    return schemas;
}

module.exports = convertSchemas;