function saveToFirebase(firstname,lastname,email,message) {
    var emailObject = {
        "firstname":firstname;
        "lastname":lastname;
        "email": email;
        "message":message;
        
        
    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

saveToFirebase(firstname,lastname,email,message);
