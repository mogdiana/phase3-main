Ext.define('phase3.view.student.StudentWindow', {
    extend: "Ext.window.Window",
    alias: 'widget.studentWindow',
    xtype: 'student-window',
    controller: 'studentWindowController',
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
    modal: true,
    title: 'Form Student',
    width: 600,
    bodyPadding: 10,
    renderTo: Ext.getBody(),

    items: [{
        xtype: 'form',
        defaults: {
            xtype: 'textfield',
            anchor: '100%'
        },
        items: [
            {
                xtype: 'hiddenfield',
                name: 'id',
                bind: '{student.id}',
            },
            {
                xtype: 'textfield',
                name: 'firstName',
                fieldLabel: 'First name',
                bind: '{student.firstName}',
            }, {
                xtype: 'textfield',
                name: 'lastName',
                fieldLabel: 'Last name',
                bind: '{student.lastName}',
            }, {
                xtype: 'radiogroup',
                bind: {value: '{student.gender}'},
                fieldLabel: 'Gender',
                columns: 2,
                items: [{
                    boxLabel: 'Male',
                    name: 'gender',
                    checked: true,
                    inputValue: 'M'
                }, {
                    boxLabel: 'Female',
                    name: 'gender',
                    inputValue: 'F'
                }]
            }, {
                xtype: 'datefield',
                format: 'Y-m-d',
                name: 'dateOfBirth',
                fieldLabel: 'Date of Birth',
                bind: '{student.dateOfBirth}',
            }, {
                xtype: 'textfield',
                name: 'email',
                bind: '{student.email}',
                fieldLabel: 'Email',
            }, {
                xtype: 'combobox',
                fieldLabel: 'Group',
                name: 'group',
                store: {type: 'groupsStore'},
                bind: '{student.group}',
                valueField: 'id',
                displayField: 'name',
                enforceMaxLength: true,
                labelWidth: 80,
                typeAhead: true,
                queryMode: 'local',
            }, {
                xtype: 'fieldset',
                title: 'Address',
                defaultType: 'textfield',
                layout: 'anchor',
                defaults: {
                    anchor: '100%',
                    componentCls: ""
                },
                items: [{
                    xtype: 'hiddenfield',
                    name: 'addressId',
                    bind: '{student.address.id}',
                    // mapping: 'address.id',
                }, {
                    fieldLabel: 'Street Address',
                    bind: '{student.address.street}',
                    name: 'street',
                    // mapping: 'address.street',
                    labelWidth: 100
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 0 5 0',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'City',
                        bind: '{student.address.city}',
                        name: 'city',
                        // mapping: 'address.city',
                        labelWidth: 100
                    }, {
                        xtype: 'combobox',
                        fieldLabel: 'Country',
                        name: 'country',
                        bind: '{student.address.country}',
                        // mapping: 'address.country',
                        width: 240,
                        editable: true,
                        typeAhead: true,
                        typeAheadDelay: 100,
                        forceSelection: true,
                        enforceMaxLength: true,
                        labelWidth: 80,
                        valueField: 'abbr',
                        displayField: 'country',
                        queryMode: 'local',
                        anchor: '-15',
                        listConfig: {
                            itemTpl: [
                                '<div data-qtip="{country}">{country} ({abbr})</div>'
                            ]
                        },
                        store: {type: 'countries'},
                    }
                    ]
                }]
            }]
    }],

    buttons: [{
        text: 'Save',
        itemId: 'btnSave',
        formBind: true,
        handler: 'onSaveClick'
    }, {
        text: 'Cancel',
        handler: function () {
            this.up('window').close();
        }
    }]

});