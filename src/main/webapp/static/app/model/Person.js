Ext.define('phase3.model.Person', {
    extend: 'Ext.data.Model',
    alias: 'model.Person',
    idProperty:'id',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'picture', type: 'string'},
        {name: 'firstName', type: 'string'},
        {name: 'lastName', type: 'string'},
        {name: 'gender', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'dateOfBirth', type: 'date'},
        {
            name: 'address',
            reference: 'phase3.model.Address'
        },
        {
            name: 'phones',
            reference: 'phase3.model.Phone'
        },
    ],
    validators: {
        gender: { type: 'inclusion', list: ['M', 'F'] },
        firstName: [
            {type: 'format', matcher: /^[A-Z][a-z]*(\\s(([a-z]{1,3})|(([a-z]+\\')?[A-Z][a-z]*)))*$/i},
            {type: 'length', min: 4, max: 10}
        ],
        lastName: [
            {type: 'format', matcher: /^[A-Z][a-z]*(\\s(([a-z]{1,3})|(([a-z]+\\')?[A-Z][a-z]*)))*$/i},
            {type: 'length', min: 5, max: 20}
        ]
    }
});