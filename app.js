

function cipher(word) {

  var str = '';
    for (var i = 0; i < word.length; i++) {
        str = str + word.charCodeAt(i);


        var letter=((str-65+106)%26+65)

        console.log(letter)

        String.fromCharCode(letter);

  }

  return String.fromCharCode(letter) ;

  }

 cipher('p');


 function descipher(word) {

    var str = '';


    for (var i = 0; i < word.length; i++) {
     str = String.fromCharCode(i)

      var letter = ((str-65)%26)



      



    }


   return letter2;

 }

descipher('a');
