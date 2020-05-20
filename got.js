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
    '<div class="row no-gutters">' +
    '<div class="col-md-4">' +
    '<img src="' + oChar.image + '" class="card-img-top">' +
    '</div>' +
    '<div class="col-md-8">' +
    '<div class="card-body">' +
    '<h5 class="card-title">' + oChar.name + '</h5>' +
    '<h6 class="card-subtitle mb-2 text-muted">' + oChar.house + '</h6 >' +
    '<div class="row">' +
    '<div class="col">' + oChar.birth + '</div>' +
    '<div class="col">' + oChar.gender + '</div>' +
    '</div>' +
    '<p class="card-text"></p>' +
    '<div class="card-header">Children</div>' +
    '<ul class="list-group list-group-flush">';
  oChar.children.forEach(function (oChild) {
    sHtml += '<li class="list-group-item">' + oChild + '</li>';
  });
  sHtml += '</ul>' +
    '</div>' +
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