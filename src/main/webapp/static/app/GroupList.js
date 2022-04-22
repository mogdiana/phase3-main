Ext.define('phase3.view.main.GroupList', {
  extend: 'Ext.grid.Panel',
  xtype : 'group-list',

  title: 'Groups',

  store: {
    autoLoad: true,
    proxy   : {
      method: 'GET',
      type  : 'ajax',
      url   : 'http://localhost:8080/groups',
    }
  },

  dockedItems: [{
    xtype: 'toolbar',
    dock : 'top',
    items: [{
      xtype: 'button',
      id: 'newGroup',
      text: 'Add group',
      iconCls: 'x-fa fa-plus',
      handler: function(){
        pop = Ext.create('phase3.view.main.AddGroup');
        pop.show()
        console.warn("abc")
      }
    }]
  }],

  columns: [
    {text: 'ID', dataIndex: 'id', width: 100},
    {text: 'Name', dataIndex: 'name', flex: 1},
    {
      xtype: 'actioncolumn',
      width: 50,
      menuDisabled: true,
      sortable: false,
      items: [{
        iconCls: 'x-fa fa-pen green icon-margin',
        handler: 'onEditClick'
      }, {
        iconCls: 'x-fa fa-trash red',
        handler: 'onRemoveClick'
      }]
    }],
});