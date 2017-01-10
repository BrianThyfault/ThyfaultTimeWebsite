window.onload = function()
{
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;
  var x = 0, y = 0;
  var changeX = 1, changeY = 1;
  var img = new Image();
  img.src = 'http://i.imgur.com/TO5Xzzc.png';
  img.onload = function()
  {
    ctx.drawImage(img, x, y);
  };

  function draw()
  {
    ctx.clearRect(0, 0, width, height);
    if (x + img.width > width || x < 0)
    {
      changeX = -changeX;
    }
    if (y + img.height > height || y < 0)
    {
      changeY = -changeY;
    }
    x += changeX;
    y += changeY;
    ctx.drawImage(img, x, y);
  }

  setInterval(draw, 10);
}
