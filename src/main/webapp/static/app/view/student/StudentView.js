Ext.define('phase3.view.student.StudentView', {
  extend : 'Ext.app.ViewModel',
  alias : 'viewmodel.studentview',

  stores: {
    StudentListStore : {
      model: 'phase3.model.Student',
      autoLoad: true,
      autoSync: true,
      fields: ['id', 'firstName', 'lastName', 'gender', 'email', 'dateOfBirth'],
      storeId : 'StudentListStore',
      alias : 'store.StudentListStore',
      proxy   : {
        type  : 'rest',
        url   : 'http://localhost:8080/students',
        reader: {
          type        : 'json',
          rootProperty: 'students'
        },
        writer: {
          type: 'json',
          dateFormat: 'Y-m-d',
          writeAllFields: true
        }
      }
    }
  }
})