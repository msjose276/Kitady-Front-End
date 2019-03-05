import DS from 'ember-data';

export default DS.Model.extend({
  fullName: DS.attr('string'),
  email: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  bordereauNumber: DS.attr('string'),
  cardType: DS.attr('string'),
  cardValue: DS.attr('number'),
  bankName: DS.attr('string'),
  amountDeposited: DS.attr('string'),
});
