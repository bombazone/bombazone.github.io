

let counter = 0;

$('#increase').click(() => {
  counter++;
  $('h2').text(counter);
});

$('#decrease').click(() => {
  counter=counter -1;
  $('h2').text(counter);
});
