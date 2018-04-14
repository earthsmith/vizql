const Sequelize = require('sequelize');

//using the .models method, traverses down to the properties in the
//attributes and stores the names of those that have references
//along with the names of the source tables

const convertEdges = (schema) => {
    let edges = {};
    for (let modelKey in schema.models) {
        const model = schema.models[modelKey];
        let references = [];
        for (let attribute in model.rawAttributes) {
            let attrObj = model.rawAttributes[attribute];
            for (let property in attrObj) { 
                if (property === 'references') { 
                    references.push(attrObj[property]['model']);
                }
            }
        }
        if (references.length) edges[modelKey] = references;
    }
    return edges;
}

module.exports = convertEdges;