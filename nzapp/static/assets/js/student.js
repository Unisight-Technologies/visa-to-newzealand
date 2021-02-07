function showContent(name) {
  if (name == 'intro'){

    $('#eligibility').css('display', 'none');
    $('#process').css('display', 'none');
    $('#last').css('display', 'none');
    $('#intro').slideToggle();

}

if (name == 'eligibility'){

  $('#intro').css('display', 'none');
  $('#process').css('display', 'none');
  $('#last').css('display', 'none');
  $('#eligibility').slideToggle();

}

if (name == 'process'){

  $('#intro').css('display', 'none');
  $('#eligibility').css('display', 'none');
  $('#last').css('display', 'none');
  $('#process').slideToggle();

}

if (name == 'last'){

  $('#intro').css('display', 'none');
  $('#eligibility').css('display', 'none');
  $('#process').css('display', 'none');
  $('#last').slideToggle();

}
}
