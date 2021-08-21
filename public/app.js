var config = {
    apiKey: "AIzaSyAjLyuSiElU_p53yyGxBr2yODhvvmeYyYk",
    authDomain: "line-app-7e813.firebaseapp.com",
    databaseURL: "https://line-app-7e813-default-rtdb.firebaseio.com/",
    storageBucket: "gs://line-app-7e813.appspot.com/",
};

firebase.initializeApp(config);

var rootRef = firebase.database().ref();

$('#msgIn').keypress(function (e) {
    if (e.keyCode == 13) {
        var name = $('#nameIn').val();
        var text = $('#msgIn').val();
        rootRef.push({ name: name, text: text });
        $('#msgIn').val('');
    }
});

rootRef.on('child_added', function (ss) {
    var msg = ss.val();
    dspChatMsg(msg.name, msg.text);
});

function dspChatMsg(name, text) {
    $('<div class="right_balloon"/>').text(text).appendTo($('#msgDiv'));
    $("html,body").animate({ scrollTop: $('#bottomDiv').offset().top }, 0);
};