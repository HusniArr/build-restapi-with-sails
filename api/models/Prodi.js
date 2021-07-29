/**
 * Prodi.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    kodeProdi:{type:"number",required:true},
    namaProdi:{type:"string",required:true},
    kodeJurProdi:{type:"number",required:true},
    kodeJenjProdi:{type:"string",required:true},
    kodeLabelProdi:{type:"string",required:true}

  },

};

