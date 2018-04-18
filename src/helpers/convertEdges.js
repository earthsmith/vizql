const Sequelize = require('sequelize');

//using the .models method, traverses down to the properties in the
//attributes and stores the names of those that have references
//along with the names of the source tables

const convertEdges = (schema) => {
    let edges = {};
        for (let modelKey in schema.models) {
            const model = schema.models[modelKey];
            let count = 0;
            for (let attribute in model.rawAttributes) {
                if (model.rawAttributes[attribute]['references']) count ++
            }
            edges[modelKey] = count;
            
        }
        return edges;
 }

module.exports = convertEdges;