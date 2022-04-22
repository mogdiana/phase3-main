Ext.define('phase3.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    name: 'AppStudents',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'phase3.view.main.MainController',
        'phase3.view.main.MainModel',
        'phase3.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'AppStudents'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
    items: [
        {
            title: 'Students',
            iconCls: 'fas fa-users',
            items: [{
                xtype: 'student-list',
                reference: 'studentGrid'
            }]
        },
        // {
        //     title: 'Groups',
        //     iconCls: 'fas fa-user-friends',
        //     items: [{
        //         xtype: 'group-list',
        //         reference: 'groupGrid'
        //     }]
        // },
        // {
        //     title: 'Teachers',
        //     iconCls: 'fas fa-users',
        //     items: [{
        //         xtype: 'teacher-list'
        //     }]
        // },
        // {
        //     title: 'Courses',
        //     iconCls: 'fas fa-users',
        //     items: [{
        //         xtype: 'course-list'
        //     }]
        // }
    ]
});