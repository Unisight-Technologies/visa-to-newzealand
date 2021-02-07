var ctx = document.getElementById("ess_skilled").getContext('2d');
var ess_skilled = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Age", "Skilled employment", "Qualifications", "Work experience", "Partner"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
      ],
      data: [25,10,10,35,25]
    }]
  },
  weight: 105
});

var canvas = document.getElementById("ess_skilled");


canvas.onclick = function(evt){
    var activePoints = ess_skilled.getElementsAtEvent(evt);
    if (activePoints[0]) {
        var chartData = activePoints[0]['_chart'].config.data;
        var idx = activePoints[0]['_index'];

        var label = chartData.labels[idx];
        if(label == "Age"){

          $('#Skilled1').css('display', 'none');
          $('#Qual1').css('display', 'none');
          $('#Workexp1').css('display', 'none');
          $('#Partner1').css('display', 'none');
          $('#Age1').slideToggle();

        }

        if(label == "Skilled employment"){

          $('#Age1').css('display', 'none');
          $('#Qual1').css('display', 'none');
          $('#Workexp1').css('display', 'none');
          $('#Partner1').css('display', 'none');
          $('#Skilled1').slideToggle();

        }

        if(label == "Qualifications"){

          $('#Skilled1').css('display', 'none');
          $('#Age1').css('display', 'none');
          $('#Workexp1').css('display', 'none');
          $('#Partner1').css('display', 'none');
          $('#Qual1').slideToggle();

        }

        if(label == "Work experience"){

          $('#Skilled1').css('display', 'none');
          $('#Qual1').css('display', 'none');
          $('#Age1').css('display', 'none');
          $('#Partner1').css('display', 'none');
          $('#Workexp1').slideToggle();

        }

        if(label == "Partner"){

          $('#Skilled1').css('display', 'none');
          $('#Qual1').css('display', 'none');
          $('#Workexp1').css('display', 'none');
          $('#Age').css('display', 'none');
          $('#Partner1').slideToggle();

        }
}

    // => activePoints is an array of points on the canvas that are at the same position as the click event.
};

var scored = 0;


var ctx = document.getElementById("score_chart1").getContext('2d');
var score_chart1 = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [],
    datasets: [{
      backgroundColor: [
        "#06DB5E",
        "#E74C3C"
      ],
      data: []
    }]
  }
});

function calculateScore2(){
  var age1 = document.forms["score-form2"]["age1"].value;
  var skilled1 = document.forms["score-form2"]["skilled1"].value;
  var qual1 = document.forms["score-form2"]["qual1"].value;
  var workexp1 = document.forms["score-form2"]["workexp1"].value;
  var partner1 = document.forms["score-form2"]["partner1"].value;


  var score = (Number(age1)+Number(skilled1)+Number(qual1)+Number(workexp1)+Number(partner1))
  scored = score;


  score_chart1.data.labels.push("Your Marks ");
  score_chart1.data.datasets[0].data.push(scored);
  score_chart1.data.labels.push(" ");
  score_chart1.data.datasets[0].data.push(100-scored);
  score_chart1.update()

    $('#result_modal1').modal('hide');
    $('.insert-here2-1').text("YOUR SCORE: "+score+" pts");
    $('.insert-here2-2').text("CONGRATULATIONS, YOU HAVE PASSED THE TEST!");
    $('.insert-here2-1').css('background', '#06DB5E');


  // else{
  //   $('.insert-here-1').text("YOUR SCORE: "+score+" pts");
  //   $('.insert-here-2').text("SORRY, YOU DID NOT PASS THE TEST.");
  //   $('.insert-here-1').css('background', '#E74C3C');
  //   $('.insert-here-1').css('color', 'white');
  //
  //
  //
  //
  //
  // }
  $('.express-btn2').css('display', 'none');
  $('.performance2').css('display', 'inherit');

}
