//function that converts schema too object representation
const Sequelize = require('sequelize');

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