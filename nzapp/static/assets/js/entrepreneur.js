var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["age", "lang", "edu", "finance", "buisness","bstream","istream"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#e83e8c",
        // "#20c997",
        // "#6c757d",
      ],
      data: [25,10,10,35,25,15,15]
    }]
  },
  weight: 150
});

var canvas = document.getElementById("myChart");


canvas.onclick = function(evt){
    var activePoints = myChart.getElementsAtEvent(evt);
    if (activePoints[0]) {
        var chartData = activePoints[0]['_chart'].config.data;
        var idx = activePoints[0]['_index'];

        var label = chartData.labels[idx];
        if(label == "age"){

          $('#lang').css('display', 'none');
          $('#edu').css('display', 'none');
          $('#finance').css('display', 'none');
          $('#buisness').css('display', 'none');
          $('#bstream').css('display', 'none');
          $('#istream').css('display', 'none');
          // $('#qualify').css('display', 'none');
          // $('#endro').css('display', 'none');
          $('#age').slideToggle();

        }

        if(label == "lang"){

          $('#age').css('display', 'none');
          $('#edu').css('display', 'none');
          $('#finance').css('display', 'none');
          $('#buisness').css('display', 'none');
          $('#bstream').css('display', 'none');
          $('#istream').css('display', 'none');
          // $('#qualify').css('display', 'none');
          // $('#endro').css('display', 'none');
          $('#lang').slideToggle();

        }

        if(label == "edu"){

          $('#lang').css('display', 'none');
          $('#age').css('display', 'none');
          $('#finance').css('display', 'none');
          $('#buisness').css('display', 'none');
          $('#bstream').css('display', 'none');
          $('#istream').css('display', 'none');
          // $('#qualify').css('display', 'none');
          // $('#endro').css('display', 'none');
          $('#edu').slideToggle();

        }

        if(label == "finance"){

          $('#lang').css('display', 'none');
          $('#edu').css('display', 'none');
          $('#age').css('display', 'none');
          $('#buisness').css('display', 'none');
          $('#bstream').css('display', 'none')
          $('#istream').css('display', 'none');
          // $('#qualify').css('display', 'none');
          // $('#endro').css('display', 'none');
          $('#finance').slideToggle();

        }

        if(label == "buisness"){

          $('#lang').css('display', 'none');
          $('#edu').css('display', 'none');
          $('#finance').css('display', 'none');
          $('#age').css('display', 'none');
          $('#bstream').css('display', 'none');
          $('#istream').css('display', 'none');
          // $('#qualify').css('display', 'none');
          // $('#endro').css('display', 'none');
          $('#buisness').slideToggle();

        }

        if(label == "bstream"){

          $('#lang').css('display', 'none');
          $('#edu').css('display', 'none');
          $('#finance').css('display', 'none');
          $('#buisness').css('display', 'none');
          $('#age').css('display', 'none');
          $('#istream').css('display', 'none');
          // $('#qualify').css('display', 'none');
          // $('#endro').css('display', 'none');
          $('#bstream').slideToggle();

        }

        if(label == "istream"){

          $('#lang').css('display', 'none');
          $('#edu').css('display', 'none');
          $('#finance').css('display', 'none');
          $('#buisness').css('display', 'none');
          $('#bstream').css('display', 'none');
          $('#age').css('display', 'none');
          // $('#qualify').css('display', 'none');
          // $('#endro').css('display', 'none');
          $('#istream').slideToggle();

        }

        // if(label == "qualify"){
        //
        //   $('#lang').css('display', 'none');
        //   $('#edu').css('display', 'none');
        //   $('#finance').css('display', 'none');
        //   $('#buisness').css('display', 'none');
        //   $('#bstream').css('display', 'none');
        //   $('#istream').css('display', 'none');
        //   $('#age').css('display', 'none');
        //   $('#endro').css('display', 'none');
        //   $('#qualify').slideToggle();
        //
        // }
        //
        // if(label == "endro"){
        //
        //   $('#lang').css('display', 'none');
        //   $('#edu').css('display', 'none');
        //   $('#finance').css('display', 'none');
        //   $('#buisness').css('display', 'none');
        //   $('#bstream').css('display', 'none');
        //   $('#istream').css('display', 'none');
        //   $('#qualify').css('display', 'none');
        //   $('#age').css('display', 'none');
        //   $('#endro').slideToggle();
        //
        // }
      }

    // => activePoints is an array of points on the canvas that are at the same position as the click event.
};

var scored = 0;


var ctx = document.getElementById("myChart1").getContext('2d');
var myChart1 = new Chart(ctx, {
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

function calculateScore1(){
  var age = document.forms["score-form1"]["age"].value;
  var language = document.forms["score-form1"]["language"].value;
  var education = document.forms["score-form1"]["education"].value;
  var finance = document.forms["score-form1"]["finance"].value;
  var buisness = document.forms["score-form1"]["buisness"].value;
  var bstream = document.forms["score-form1"]["bstream"].value;
  var istream = document.forms["score-form1"]["istream"].value;
  // var qualify = document.forms["score-form1"]["qualify"].value;
  // var endrosment= document.forms["score-form1"]["endrosment"].value;


  var score = (Number(age)+Number(language)+Number(education)+Number(finance)+Number(buisness)+Number(bstream)+Number(istream))
  scored = score;


  myChart1.data.labels.push("Your Marks ");
  myChart1.data.datasets[0].data.push(scored);
  myChart1.data.labels.push(" ");
  myChart1.data.datasets[0].data.push(100-scored);
  myChart1.update()

    $('#main_modal1').modal('hide');
    $('.insert-here1-1').text("YOUR SCORE: "+score+" pts");
    $('.insert-here1-2').text("CONGRATULATIONS, YOU HAVE PASSED THE TEST!");
    $('.insert-here1-1').css('background', '#06DB5E');


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
  $('.express-btn1').css('display', 'none');
  $('.performance1').css('display', 'inherit');

}
