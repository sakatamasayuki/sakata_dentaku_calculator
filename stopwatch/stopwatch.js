//---------------------------初期値---------------------------------
var i_milsecond = 0;
var i_second = 0;
var i_minute = 0;
var i_hour = 0;

//---------------------ストップウォッチ関数始め-------------------------
function ShowCount(){
  //---------------------------ミリ秒---------------------------------
  if(i_milsecond < 100){
    i_milsecond++;
  }else{
    i_milsecond=0;
  }

  //---------------------------秒---------------------------------
  if(i_second < 60 && i_milsecond === 100){
    i_second++;
  }else if(i_second === 60){
    i_second=0;
  }else{
    ;
  }

  //---------------------------分---------------------------------
  if(i_minute < 60 && i_second === 60){
    i_minute++;
  }else if(i_minute === 60){
    i_minute=0;
  }else{
  ;
  }

  //---------------------------時間---------------------------------
  if(i_minute === 60){
    i_hour++;
  }else{
  ;
  }

  //---------------------------２桁表記---------------------------------
  $('.watch_milsecond').text(('0' + i_milsecond).slice(-2));

  $('.watch_second').text(('0' + i_second).slice(-2));

  $('.watch_minute').text(('0' + i_minute).slice(-2));

  $('.watch_hour').text(('0' + i_hour).slice(-2));
}
//---------------------ストップウォッチ関数終わり---------------------

//---------------------------スタート---------------------------------
function StartCount(){
  CountID = setInterval('ShowCount()',10);
}

//---------------------------ストップ---------------------------------
function StopCount(){
  clearInterval(CountID);
}

//---------------------------リセット---------------------------------
function ResetCount(){
  clearInterval(CountID);
  i_second = 0
  i_milsecond = 0
  i_minute = 0
  i_hour = 0
  $('.watch_milsecond').text('00');
  $('.watch_second').text('00');
  $('.watch_minute').text('00');
  $('.watch_hour').text('00');
}

//---------------------------ボタン---------------------------------
      $('.button_start').click(function(){
        StartCount();
        $('.button_start').attr('disabled',true);
        $('.button_stop').attr('disabled',false);
        $('.button_reset').attr('disabled',false);
      });

      $('.button_stop').click(function(){
        StopCount();
        $('.button_start').attr('disabled',false);
        $('.button_stop').attr('disabled',true);
        $('.button_reset').attr('disabled',false);
      });

      $('.button_reset').click(function(){
        ResetCount();
        $('.button_start').attr('disabled',false);
        $('.button_stop').attr('disabled',true);
        $('.button_reset').attr('disabled',true);
      });
