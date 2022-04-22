/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'phase3.Application',

    name: 'phase3',

    requires: [
        // This will automatically load all classes in the phase3 namespace
        // so that application classes do not need to require each other.
        'phase3.*'
    ],

    // The name of the initial view to create.
    mainView: 'phase3.view.main.Main'
});
