Ext.define('phase3.model.Student', {
    extend: 'phase3.model.Person',
    alias: 'model.Student',
    fields: [
        {
            name: 'group',
            reference: 'group'
        },
        {
            name: 'speciality',
            reference: 'speciality'
        },
        {
            name: 'libraryMembership',
            reference: 'libraryMembership'
        },
        {
            name: 'marks',
            reference: 'mark'
        },
    ]

});