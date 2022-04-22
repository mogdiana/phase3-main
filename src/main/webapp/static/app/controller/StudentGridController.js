Ext.define('phase3.controller.StudentGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.studentGridController',

   onEditClick: function (grid, rowIndex) {
        var studentData = grid.getStore().getAt(rowIndex).data;
        Ext.create('phase3.view.student.StudentWindow', {
            viewModel: {data: {student: studentData}}
        }).show();
    },

    onAddClick: function () {
        var studentData;
        Ext.create('phase3.view.student.StudentWindow', {
            viewModel: {data: {student: studentData}}
        }).show();
    },

    onRemoveClick: function (grid, rowIndex) {
        var studentStore = grid.getStore(),
        record = studentStore.getAt(rowIndex); //Get the clicked record
        var url = 'http://localhost:8080/students/'+ record.get('id');
        Ext.Msg.show({
            title: 'Delete',
            msg: 'Do you want to delete this record? ' + record.get('firstName') + ' ' + record.get('lastName'),
            width: 300,
            closable: false,
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonValue, inputText, showConfig) {
                if (buttonValue === 'yes') {
                    Ext.Ajax.request({
                        url: url,
                        method: 'DELETE',
                        clientValidation: true,
                        waitMsg: 'Deleting..',
                        headers:
                            {'Content-Type': 'application/json'},
                        jsonData: record.data,
                        success: function (response) {
                            try {
                                // studentStore.remove(record);
                                studentStore.reload();
                                Ext.Msg.alert('Status', 'Student has been deleted successfully.');
                            } catch (ex) {
                                Ext.Msg.alert('Status', 'Exception: ' + ex.message);
                            }
                        },
                        failure: function (response) {
                            Ext.Msg.alert('Status', 'Request Failed.');
                        }
                    });
                }
            },
        })
    },

    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemoveStudent');
        if (record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    }

});