Ext.define('phase3.controller.StudentWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.studentWindowController',
    store: {type: 'studentListStore'},

    onSaveClick: function (button) {
        debugger;
        var win = button.up('window');
        var studentForm = win.down('form');

        var values = studentForm.getValues(),
        url = "http://localhost:8080/students";

        var studentObj = {
            id: values.id,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            gender: values.gender,
            dateOfBirth: values.dateOfBirth,
            address: {
                id: values.addressId,
                country: values.country,
                city: values.city,
                street: values.street
            },
            group: {
                id: values.group
            },
        };

        if (!studentForm.isDirty()) {
            Ext.Msg.alert('Status', 'No pending changes to save.');
            return;
        } else if (!studentForm.isValid()) {
            Ext.Msg.alert('Status', 'Invalid data.');
            return;
        }

        if (studentForm.isValid()) {
            studentForm.submit(
                Ext.Ajax.request({
                    url: url,
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    jsonData: Ext.JSON.encode(studentObj),
                    success: function (response) {
                        try {
                            Ext.Msg.alert('Status', 'Saved successfully!');
                            var studentGrid = Ext.ComponentQuery.query('studentGrid')[0];
                            studentGrid.getStore().reload()
                        } catch (ex) {
                        }
                    },
                    failure: function (form, action) {
                        Ext.Msg.alert('Status', 'Failure save!');
                        if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
                            Ext.Msg.alert('CLIENT_INVALID', 'Something has been missed. Please check and try again.');
                        } else if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
                            Ext.Msg.alert('CONNECT_FAILURE', 'Status: ' + action.response.status + ': ' + action.response.statusText);
                        } else if (action.failureType === Ext.form.action.Action.SERVER_INVALID) {
                            Ext.Msg.alert('SERVER_INVALID', action.result.message);
                        };
                    }
                })
            );
            win.close();
        }
    },

    clearForm: function () {
        this.getForm().getFields().each(function (field) {
            field.validateOnChange = false;
            field.setValue('');
            field.resetOriginalValue();
        });
    },
});