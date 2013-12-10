"use strict";

App.module('Views', function (Views, App, Backbone, Marionette, $) {

  // ======================
  // models

  var Contact = Backbone.Model.extend({});
  var ContactCollection = Backbone.Collection.extend({
    model: Contact
  })
  
  // ======================
  // views

  var ContactItemView = Marionette.ItemView.extend({
    template: '#contact-item-template',

    ui: {
      pos: '.contact-pos',
      name: '.contact-name'
    },

    onRender: function () {
      this.ui.pos.text(this.model.get('id'));
      this.ui.name.text(this.model.get('name'));
    }
  });


  var ContactsView = Marionette.CollectionView.extend({
    tagName: 'ul',
    itemView: ContactItemView
  })
  
  Views.MainContentView = Marionette.ItemView.extend({
    template: '#content-view-template',

    ui: {
      contactsHolder: '.contacts-holder'
    },

    onRender: function () {
      var contacts = new ContactCollection([
        { 'id': 100, 'name': 'Alice' },
        { 'id': 110, 'name': 'Fred' },
        { 'id': 121, 'name': 'Sarah' }
      ]);

      var contactsView = new ContactsView({
        collection: contacts
      });
      contactsView.render();
      this.ui.contactsHolder.append(contactsView.el);
    }
  });
});

