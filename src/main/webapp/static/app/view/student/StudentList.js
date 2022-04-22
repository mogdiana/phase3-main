Ext.define('phase3.view.student.StudentList', {
  extend: 'Ext.panel.Panel',
  xtype : 'student-list',
  alias: 'widget.studentList',

  title: 'Students',

  items: [{
    xtype: 'studentGrid'
  }]
});