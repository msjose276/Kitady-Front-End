import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    requestCard: function() {


      var fullName = document.getElementById('fullName').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var bolderoNumber = document.getElementById('boldero_numer').value;
      var amoundDeposited = document.getElementById('amound_deposited').value;
      var message = document.getElementById('message').value.toString();
      var typeOfBank = document.getElementById('type_of_bank').value;
      var typeOfCard = document.getElementById('type_of_card').value;
      var budget = document.getElementById('budget').value;


      if(message === '')
        message = 'no message'
      console.log(message);

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
        .then(alert('Pedido Enviado'));
        // .catch(alert('Ocorreu um erro ao enviar o seu pedido. Por favor, certifique-se que o seus dados estão correctos. Ou pode ainda enviar o pedido pelo nosso numero do WhatsApp'));
          // .catch(function(reason){alert(reason.message)}
          //   );
    }
  }

});
