Ext.define('phase3.model.Group', {
  extend: 'Ext.data.Model',
  alias: 'model.Group',
  idProperty:'id',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'name', type: 'string' }
  ],
  validators: {
    name: [
      { type: 'format', matcher: /^[A-Z]{2,3}[0-9]{2,3}[Z,R,M]$/i , message:'Bad formed group name'},
      { type: 'length', min: 4, max: 5 }
    ],
  }
});