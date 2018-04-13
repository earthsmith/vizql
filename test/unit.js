const schema1 = require('./exampleSchemas.js');
const expect = require('expect');
const convertSchemas = require('../src/helpers/convertSchema.js');
const convertEdges = require('../src/helpers/convertEdges.js');

describe('Schema tests', () => {
  describe('Schema files should run', () => {
    before((done) => {
      schema1
        .authenticate()
        .then(function (err) {
          if (err) console.log('Unable to connect to the database.', err);
        });
      schema1
        .sync({ force: true }) //force syncs all the models
        .then(function (err) {
          if (err) console.log('An error occured while creating the table', err);
          return schema1.models['users']
            .create({name: 'Hancock'})
            .then(() => done());
        }).catch(function (err) {
          if (err) console.log(err);
          done();
        });
    })

    it('Example user schema should have one entry.', (done) => {
      schema1.models['users']
        .findAll()
        .then(users => {
          expect(users.length).toEqual(1);
          done();
        })
    });

    it('Should convert schema to object.', (done) => {
      convertSchemas(schema1);
      done();
    })

    it('Should convert edges to object.', (done) => {
      convertEdges(schema1);
      done();
    })
  })
})