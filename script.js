let JSONItems = [];
let index = Math.floor(Math.random() * (43 + 1));

$.get( "https://manjanka.github.io/quotes-api/quotes.json", (data)=>{
  JSONItems = data;
  $(".sentence").html('"' + JSONItems[index]["quote"] + '"');
  $(".author").html(JSONItems[index]["author"]);
});


$(".btn-next").on("click",()=>{
    index = Math.floor(Math.random() * (43 + 1));
    $(".sentence").html('"' + JSONItems[index]["quote"] + '"');
    $(".author").html(JSONItems[index]["author"]);
    
    let randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    $(".wrapper, .btn").css('background',randomColor);
});

$(".tweet img").on("click",()=>{
    let tweetUrl = 'https://twitter.com/share?text=' + '"' + JSONItems[index]["quote"] + '"';
    window.open(tweetUrl)
});
