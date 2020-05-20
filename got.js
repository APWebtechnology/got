var sUrl = "https://api.got.show/api/book/characters/";

function getData(sChar) {
  $.getJSON(sUrl + sChar)
    .done(function (oData) {
      console.log(oData);
    })
    .fail(function (oError) {
      console.log(oError);
    });
}

function getCharacter() {
  var sChar = $("#charactername").val();
  if (sChar !== undefined) {
    getData(sChar);
  }
}