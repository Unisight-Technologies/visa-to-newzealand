var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["experience", "employment", "export", "excluding working capital", "age","bonus"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        // "#e83e8c",
        // "#20c997",
        // "#6c757d",
      ],
      data: [25,25,10,25,20,15]
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
        if(label == "experience"){

          $('#employment').css('display', 'none');
          $('#edu').css('display', 'none');
          $('#finance').css('display', 'none');
          $('#buisness').css('display', 'none');
          $('#bstream').css('display', 'none');
          $('#istream').css('display', 'none');
          // $('#qualify').css('display', 'none');
          // $('#endro').css('display', 'none');
          $('#experience').slideToggle();

        }

        if(label == "employment"){

          $('#experience').css('display', 'none');
          $('#edu').css('display', 'none');
          $('#finance').css('display', 'none');
          $('#buisness').css('display', 'none');
          $('#bstream').css('display', 'none');
          $('#istream').css('display', 'none');
          // $('#qualify').css('display', 'none');
          // $('#endro').css('display', 'none');
          $('#employment').slideToggle();

        }

        if(label == "edu"){

          $('#employment').css('display', 'none');
          $('#experience').css('display', 'none');
          $('#finance').css('display', 'none');
          $('#buisness').css('display', 'none');
          $('#bstream').css('display', 'none');
          $('#istream').css('display', 'none');
          // $('#qualify').css('display', 'none');
          // $('#endro').css('display', 'none');
          $('#edu').slideToggle();

        }

        if(label == "finance"){

          $('#employment').css('display', 'none');
          $('#edu').css('display', 'none');
          $('#experience').css('display', 'none');
          $('#buisness').css('display', 'none');
          $('#bstream').css('display', 'none')
          $('#istream').css('display', 'none');
          // $('#qualify').css('display', 'none');
          // $('#endro').css('display', 'none');
          $('#finance').slideToggle();

        }

        if(label == "buisness"){

          $('#employment').css('display', 'none');
          $('#edu').css('display', 'none');
          $('#finance').css('display', 'none');
          $('#experience').css('display', 'none');
          $('#bstream').css('display', 'none');
          $('#istream').css('display', 'none');
          // $('#qualify').css('display', 'none');
          // $('#endro').css('display', 'none');
          $('#buisness').slideToggle();

        }

        if(label == "bstream"){

          $('#employment').css('display', 'none');
          $('#edu').css('display', 'none');
          $('#finance').css('display', 'none');
          $('#buisness').css('display', 'none');
          $('#experience').css('display', 'none');
          $('#istream').css('display', 'none');
          $('#bstream').slideToggle();

        }
      }
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
  var experience = document.forms["score-form1"]["experience"].value;
  var employment = document.forms["score-form1"]["employment"].value;
  var edu = document.forms["score-form1"]["edu"].value;
  var finance = document.forms["score-form1"]["finance"].value;
  var buisness = document.forms["score-form1"]["buisness"].value;
  var bstream = document.forms["score-form1"]["bstream"].value;
  var istream = document.forms["score-form1"]["istream"].value;


  var score = (Number(experience)+Number(employment)+Number(edu)+Number(finance)+Number(buisness)+Number(bstream)+Number(istream))
  scored = score;


  myChart1.data.labels.push("Your Marks ");
  myChart1.data.datasets[0].data.push(scored);
  myChart1.data.labels.push(" ");
  myChart1.data.datasets[0].data.push(120-scored);
  myChart1.update()

    $('#main_modal1').modal('hide');
    $('.insert-here1-1').text("YOUR SCORE: "+score+" pts");
    $('.insert-here1-2').text("CONGRATULATIONS, YOU HAVE PASSED THE TEST!");
    $('.insert-here1-1').css('background', '#06DB5E');
  $('.express-btn1').css('display', 'none');
  $('.performance1').css('display', 'inherit');

}
