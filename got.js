var oUrls = {
  char: 'https://api.got.show/api/book/characters/',
  episode: 'https://api.got.show/api/map/episodes/',
  locations: 'https://api.got.show/api/show/cities/'
};

function getData(sType, sParam) {
  $.getJSON(oUrls[sType] + sParam)
    .done(function (oData) {
      switch (sType) {
        case 'char':
          addCharacter(oData);
          break;
        case 'episode':
          addEpisode(oData.data);
          break;
        case 'locations':
          addLocations(oData);
          break;
      }
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

function addEpisode(oEpisode) {
  let sHtml = '<div class="card text-center col">' +
    '<div class="card-body">' +
    '<h5 class="card-title">' + oEpisode.name + '</h5>' +
    '<h6 class="card-subtitle mb-2 text-muted">' + oEpisode.director + '</h6 >' +
    '<div class="row">' +
    '<div class="col">' + oEpisode.season + '</div>' +
    '<div class="col">' + oEpisode.nr + '</div>' +
    '</div>' +
    '<p class="card-text"></p>' +
    '<div class="row">' +
    '<div class="col">' + oEpisode.predecessor + '</div>' +
    '<div class="col">' + oEpisode.successor + '</div>' +
    '</div>';
  if (oEpisode.characters.length > 0) {
    sHtml += '<div class="card-header">Characters</div>' +
      '<ul class="list-group list-group-flush">';
    oEpisode.characters.forEach(function (sCharacter) {
      sHtml += '<li class="list-group-item">' + sCharacter + '</li>';
    });
    sHtml += '</ul>';
  }
  sHtml += '</div>' +
    '</div>';
  $('#episode').html(sHtml);
}

function addLocations(aLocations) {
  $('#locations').html('');
  aLocations.forEach((oLocation, nIndex) => addLocation(oLocation, nIndex));
}

function addLocation(oLocation, nIndex) {
  let sHtml = '';
  if (nIndex % 3 === 0) {
    sHtml += '<div class="w-100"></div>';
  }
  sHtml += '<div class="card text-center col">' +
    '<div class="card-body">' +
    '<h5 class="card-title">' + oLocation.name + ', ' + oLocation.location + '</h5>' +
    '<h6 class="card-subtitle mb-2 text-muted">' + oLocation.type + '</h6 >' +
    '<p class="card-text"></p>';
  if (oLocation.rulers.length > 0) {
    sHtml += '<div class="card-header">Rulers</div>' +
      '<ul class="list-group list-group-flush">';
    oLocation.rulers.forEach(function (sRuler) {
      sHtml += '<li class="list-group-item">' + sRuler + '</li>';
    });
    sHtml += '</ul>';
  }
  if (oLocation.founder.length > 0) {
    sHtml += '<div class="card-header">Founders</div>' +
      '<ul class="list-group list-group-flush">';
    oLocation.founder.forEach(function (sFounder) {
      sHtml += '<li class="list-group-item">' + sFounder + '</li>';
    });
    sHtml += '</ul>';
  }
  if (oLocation.religion.length > 0) {
    sHtml += '<div class="card-header">Religions</div>' +
      '<ul class="list-group list-group-flush">';
    oLocation.religion.forEach(function (sReligion) {
      sHtml += '<li class="list-group-item">' + sReligion + '</li>';
    });
    sHtml += '</ul>';
  }
  sHtml += '</div></div>';
  $('#locations').append(sHtml);
}

function getCharacter() {
  var sChar = $("#charactername").val();
  if (sChar !== undefined) {
    getData('char', sChar);
  }
}

function getEpisode() {
  var sEpisode = $("#episodename").val();
  if (sEpisode !== undefined) {
    getData('episode', sEpisode);
  }
}

function getLocations() {
  getData('locations', '');
}