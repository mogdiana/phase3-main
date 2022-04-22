Ext.define('phase3.view.main.CourseList', {
  extend: 'Ext.grid.Panel',
  xtype : 'course-list',
  cors: true,
  useDefaultXhrHeader : false,

  title: 'Courses',

  store: {
    autoLoad: true,
    proxy   : {
      method: 'GET',
      type  : 'ajax',
      url   : 'http://localhost:8080/courses',
    }
  },

  dockedItems: [{
    xtype: 'toolbar',
    dock : 'top',
    items: [{
      xtype: 'button',
      id: 'newCourse',
      text: 'Add course',
      iconCls: 'x-fa fa-plus',
      handler: function(){
        pop = Ext.create('phase3.view.main.AddCourse');
        pop.show()
        console.warn("abc")
      }
    }]
  }],

  columns: [
    {text: 'ID', dataIndex: 'id', width: 100},
    {text: 'Title', dataIndex: 'title', flex: 1},
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