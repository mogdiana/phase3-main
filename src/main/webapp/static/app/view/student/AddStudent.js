Ext.define("phase3.view.main.AddStudent",{
  extend:"Ext.window.Window",
  // xtype: 'form-fieldtypes',
  profiles: {
    classic: {
      displayfieldColor: 'green'
    },
    neptune: {
      displayfieldColor: 'green'
    },
    graphite: {
      displayfieldColor: '#ccc'
    },
    'classic-material': {
      displayfieldColor: '#2196F3'
    }
  },
  frame: true,
  title: 'Form Student',
  width: 450,
  bodyPadding: 10,
  layout: 'form',
  title: 'Add Student',

  items: [{
    xtype: 'textfield',
    name: 'firstName',
    fieldLabel: 'First name',
    value: 'First name'
  }, {
    xtype: 'textfield',
    name: 'lastName',
    fieldLabel: 'Last name',
    value: 'Last name'
  }, {
    xtype: 'radiogroup',
    fieldLabel: 'Gender',
    //arrange Radio Buttons into 2 columns
    columns: 2,
    itemId: 'gender',
    items: [{
        xtype: 'radiofield',
        boxLabel: 'Male',
        name: 'm',
        checked: true,
        inputValue: 'M'
      }, {
        xtype: 'radiofield',
        boxLabel: 'Female',
        name: 'f',
        inputValue: 'F'
    }]
  }, {
    xtype: 'filefield',
    name: 'file1',
    fieldLabel: 'Picture'
  }, {
    xtype: 'datefield',
    name: 'date1',
    fieldLabel: 'Date Field'
  }, {
    xtype: 'textfield',
    name: 'email',
    fieldLabel: 'Email',
    value: 'email'
  },{
    xtype : 'combobox',
    fieldLabel: 'Group',
    // store: store,
    valueField: 'group'
  },{
    xtype: 'radiogroup',
    fieldLabel: 'Address',
    columns: 3,
    itemId: 'address',
    items: [{
      xtype: 'textfield',
      name: 'country',
      width: 80,
      value: 'country'
    }, {
      xtype: 'textfield',
      name: 'city',
      width: 110,
      value: 'city'
    },{
      xtype: 'textfield',
      name: 'street',
      width: 150,
      value: 'street'
    }]
  }],

  buttons : [{
      text: 'Save',
      action: '/save'
    }, {
      text: 'Cancel',
      handler: function () { this.up('window').close(); }
    }]

})