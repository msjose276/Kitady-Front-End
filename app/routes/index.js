import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    requestCard: function() {

      alert("requestCard ");
      var fullName = document.getElementById('fullName').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var bolderoNumber = document.getElementById('boldero_numer').value;
      var amoundDeposited = document.getElementById('amound_deposited').value;
      var message = document.getElementById('message').value;
      var typeOfBank = document.getElementById('type_of_bank').value;
      var typeOfCard = document.getElementById('type_of_card').value;
      var budget = document.getElementById('budget').value;

      let newRecord = this.store.createRecord('request', {
        "fullname": fullName,
        "email":email,
        "phonenumber": phone,
        "bordereaunumber": bolderoNumber,
        "cardtype": typeOfCard,
        "cardvalue": Number(budget),
        "bankname": typeOfBank,
        "amountdeposited": amoundDeposited,
        "message":message
      })
        .save()
        .then(alert('Pedido Enviado'))
        .catch(function(reason){alert(reason.message)}
          );
    }
  }

});
