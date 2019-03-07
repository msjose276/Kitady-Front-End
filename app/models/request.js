import DS from 'ember-data';

export default DS.Model.extend({
  fullname: DS.attr('string'),
  email: DS.attr('string'),
  phonenumber: DS.attr('string'),
  bordereaunumber: DS.attr('string'),
  cardtype: DS.attr('string'),
  cardvalue: DS.attr('number'),
  bankname: DS.attr('string'),
  amountdeposited: DS.attr('string'),
  message: DS.attr('string')
});
