Ext.define('phase3.view.student.StudentGrid', {
    xtype: 'studentGrid',
    extend: 'Ext.grid.Panel',
    alias: 'grid.studentGrid',
    controller: 'studentGridController',
    selType: 'rowmodel',
    selModel: {mode: 'MULTI'},
    viewConfig: {stripeRows: true},
    width: Ext.getBody().width,
    model: 'phase3.model.Student',
    viewModel: {type: 'studentview'},
    bind: {
        store: '{StudentListStore}'
    },
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'button',
            id: 'new',
            text: 'Add student',
            iconCls: 'x-fa fa-plus',
            handler: function () {
                let studentData;
                Ext.create('phase3.view.student.StudentWindow', {
                    viewModel: {data: {student: studentData}}
                }).show()
            }
        }]
    }],

    columns: [
        {text: 'ID', dataIndex: 'id', flex: 1},
        // {text: 'Picture', dataIndex: 'picture', flex: 1},
        {text: 'First name', dataIndex: 'firstName', flex: 1},
        {text: 'Last name', dataIndex: 'lastName', flex: 1},
        {
            xtype: 'datecolumn',
            text: 'Date of birth',
            dataIndex: 'dateOfBirth',
            flex: 1,
            renderer: Ext.util.Format.dateRenderer('d.m.Y')
        },
        {text: 'Gender', dataIndex: 'gender', flex: 1},
        {text: 'Email', dataIndex: 'email', flex: 1},
        {
            text: 'Address', dataIndex: 'address', flex: 1,
            renderer: value => {
                return (value != null) ? value.country + " " + value.city + "<br>" + value.street : '';
            }
        },
        // {text: 'Phone', dataIndex: 'phone', flex: 1},
        // {text: 'Library Abonament', dataIndex: 'membership', flex: 1},
        // {text: 'Marks', dataIndex: 'marks', flex: 1},
        {
            xtype: 'actioncolumn',
            width: 80,
            text: 'Actions',
            menuDisabled: true,
            sortable: false,
            items: [{
                iconCls: 'x-fa fa-pen green icon-margin',
                handler: 'onEditClick'
            }, '-', {
                iconCls: 'x-fa fa-trash red',
                handler: 'onRemoveClick'
            }]
        }]
})