Ext.define('phase3.store.GroupsStore', {
  extend: 'Ext.data.Store',
  alias: 'store.groupsStore',
  model: 'phase3.model.Group',
  storeId: 'groupsStore',
  autoLoad: true,
  autoSync: true,

  fields: ['id', 'name'],
  proxy:
      {
        type: 'rest',
        reader:
            {
              rootProperty: 'data',
              type: 'json'
            },
        url: 'http://localhost:8080/groups',
        writer: {
          type: 'json',
          writeAllFields: true
        }
      },

  sorters: [
    {
      property: 'name',
      direction: 'ASC'
    }],

});