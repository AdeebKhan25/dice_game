function myfunction() {

  var p1 = Math.floor((Math.random() * 6) + 1);
  var p2 = Math.floor((Math.random() * 6) + 1);
  if (p1 > p2) {
    res = "Player 1 won!!!";
  } else if (p1 < p2) {
    res = "Player 2 won!!!";
  } else {
    res = "Tie!!!";
  }
  document.getElementById('result').innerHTML = res;
  a = "images/dice";
  b = ".png";
  img1str = a + p1 + b;
  img2str = a + p2 + b;
  var image1 = document.getElementsByClassName('img1');
  var image2 = document.getElementsByClassName('img2');
  image1[0].src = img1str;
  image2[0].src = img2str;

}
