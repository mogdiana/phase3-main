Ext.define('phase3.view.main.TeacherList', {
  extend: 'Ext.grid.Panel',
  xtype : 'teacher-list',

  title: 'Teachers',

  store: {
    autoLoad: true,
    proxy   : {
      method: 'GET',
      type  : 'ajax',
      url   : 'http://localhost:8080/teachers',
    }
  },

  dockedItems: [{
    xtype: 'toolbar',
    dock : 'top',
    items: [{
      xtype: 'button',
      id: 'newTeacher',
      text: 'Add teacher',
      iconCls: 'x-fa fa-plus',
      handler: function(){
        pop = Ext.create('phase3.view.main.AddTeacher');
        pop.show()
        console.warn("abc")
      }
    }]
  }],

  columns: [
    {text: 'ID', dataIndex: 'id', width: 100},
//   {text: 'Picture', dataIndex: 'picture', flex: 1},
    {text: 'First name', dataIndex: 'firstName', flex: 1},
/*    {text: 'Last name', dataIndex: 'lastName', flex: 1},
    {text: 'Gender', dataIndex: 'gender', flex: 1},
    {text: 'Picture', dataIndex: 'picture', flex: 1},
    {text: 'Email', dataIndex: 'email', flex: 1},
    {text: 'Date of birth', dataIndex: 'dateOfBirth', flex: 1},
    {text: 'Address', dataIndex: 'address', flex: 1},
    {text: 'Phone', dataIndex: 'phone', flex: 1},
    {text: 'Salary', dataIndex: 'salary', flex: 1},*/
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