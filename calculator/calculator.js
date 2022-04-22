var calculate_input = '';
var tax_input = 0;

function Display(){
  $('.CalculateResult').text(calculate_input);
}

function ClearResult(){ //イコールの後の数字は上書き
  if(typeof calculate_input ==='number'){
    calculate_input = '';
  }
}

function ClearZero(){ //0は先頭にならない
  if(calculate_input === '0.'){
    ;
  } 
  else if(Number(calculate_input) === 0){
    calculate_input = '';
  }else if(Number(calculate_input.slice(-1)) === 0){
    calculate_input = calculate_input.slice(0,-1);
  }
}

function ClearSymbol(){ //記号を続けない
  if(typeof calculate_input === 'number'){
    ;
  } 
  else if(isNaN(Number(calculate_input.slice(-1))) === true){
    calculate_input = calculate_input.slice(0,-1);
  }
}

//----------FifthRow-------------
$('.button_0').click(function(){
  ClearResult();
  ClearZero();
  calculate_input = calculate_input + '0';
  Display();
});

$('.button_00').click(function(){
  ClearResult();
  ClearZero();
  if(Number(calculate_input) === 0 || isNaN(Number(calculate_input.slice(-1))) === true){
    calculate_input = calculate_input + '0';
  }else{
    calculate_input = calculate_input + '00';
  }
  Display();
});

$('.button_period').click(function(){
  ClearResult();
  if(calculate_input === '' || isNaN(Number(calculate_input.slice(-1))) === true){
    calculate_input = calculate_input + '0.';
  }else{
    calculate_input = calculate_input + '.';
  };
  Display();
});

$('.button_AC').click(function(){
  calculate_input = '';
  Display();
});

$('.button_equel').click(function(){
  if(typeof calculate_input === 'number'){
    calculate_input = calculate_input*2;
  } 
  else if(isNaN(Number(calculate_input.slice(-1))) === true){
    calculate_input = calculate_input.slice(0,-1);
  }
  calculate_input = calculate_input.replace(/x/g,'*');
  calculate_input = calculate_input.replace(/÷/g,'/');
  calculate_input = eval(calculate_input);
  Display();
});

//----------FourthRow-------------

$('.button_1').click(function(){
  ClearResult();
  ClearZero();
  calculate_input = calculate_input + '1';
  Display();
});

$('.button_2').click(function(){
  ClearResult();
  ClearZero();
  calculate_input = calculate_input + '2';
  Display();
});

$('.button_3').click(function(){
  ClearResult();
  ClearZero();
  calculate_input = calculate_input + '3';
  Display();
});

$('.button_plus').click(function(){
  ClearSymbol();
  if(calculate_input === ''){
    ;
  }else{
    calculate_input = calculate_input + '+';
  }
  Display();
});

$('.button_minus').click(function(){
  ClearSymbol();
  if(calculate_input === ''){
    ;
  }else{
  calculate_input = calculate_input + '-';
  }
  Display();
});

//----------ThirdRow-------------

$('.button_4').click(function(){
  ClearResult();
  ClearZero();
  calculate_input = calculate_input + '4';
  Display();
});

$('.button_5').click(function(){
  ClearResult();
  ClearZero();
  calculate_input = calculate_input + '5';
  Display();
});

$('.button_6').click(function(){
  ClearResult();
  ClearZero();
  calculate_input = calculate_input + '6';
  Display();
});

$('.button_times').click(function(){
  ClearSymbol();
  if(calculate_input === ''){
    ;
  }else{
  calculate_input = calculate_input + 'x';
  }
  Display();
});

$('.button_divided').click(function(){
  ClearSymbol();
  if(calculate_input === ''){
    ;
  }else{
  }
  calculate_input = calculate_input + '÷';
  Display();
});

//----------SecondRow-------------

$('.button_7').click(function(){
  ClearResult();
  ClearZero();
  calculate_input = calculate_input + '7';
  Display();
});

$('.button_8').click(function(){
  ClearResult();
  ClearZero();
  calculate_input = calculate_input + '8';
  Display();
});

$('.button_9').click(function(){
  ClearResult();
  ClearZero();
  calculate_input = calculate_input + '9';
  Display();
});


