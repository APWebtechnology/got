var sUrl = "https://api.got.show/api/book/characters/";

function getData(sChar) {
  $.getJSON(sUrl + sChar)
    .done(function (oData) {
      addCharacter(oData);
    })
    .fail(function (oError) {
      console.log(oError);
    });
}

function addCharacter(oChar) {
  let sHtml = '<div class="card text-center col">' +
    '<img src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" class="card-img-top">' +
    '<div class="card-body">' +
    '<h5 class="card-title">Name</h5>' +
    '<h6 class="card-subtitle mb-2 text-muted">House</h6 >' +
    '<div class="row">' +
    '<div class="col">Age</div>' +
    '<div class="col">Sex</div>' +
    '</div>' +
    '<p class="card-text"></p>' +
    '<div class="card-header">Children</div>' +
    '<ul class="list-group list-group-flush">' +
    '<li class="list-group-item">Child one</li>' +
    '<li class="list-group-item">Child two</li>' +
    '</ul>' +
    '</div>' +
    '</div>';
  $('#character').html(sHtml);
}

function getCharacter() {
  var sChar = $("#charactername").val();
  if (sChar !== undefined) {
    getData(sChar);
  }
}