var tag = document.createElement('script');
// tag.src = 'https://www.youtube.com/player_api';
// tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
  playerDefaults = {
    autoplay: 0,
    autohide: 0,
    modestbranding: 0,
    rel: 0,
    showinfo: 0,
    controls: 0,
    disablekb: 1,
    enablejsapi: 1,
    iv_load_policy: 3,
    loop: 1,
    playlist: 'XE1XmMUNCH8',
    videoId: 'XE1XmMUNCH8',
    suggestedQuality: 'highres'
  };
// var vid = [
// 			{'videoId': 'biLnDhkJc14', 'startSeconds': 0, 'endSeconds': 53, 'suggestedQuality': 'highres'},
// {'videoId': 'J_YRNCxOEns', 'startSeconds': 465, 'endSeconds': 657, 'suggestedQuality': 'hd720'},
// {'videoId': 'OWsCt7B-KWs', 'startSeconds': 0, 'endSeconds': 240, 'suggestedQuality': 'hd720'},
// {'videoId': 'qMR-mPlyduE', 'startSeconds': 19, 'endSeconds': 241, 'suggestedQuality': 'hd720'}
// ],
// randomVid = Math.floor(Math.random() * vid.length),
// currVid = randomVid;


function onYouTubePlayerAPIReady () {
  // tv = new YT.Player('tv', {
  //   events: {
  //     'onReady': onPlayerReady,
  //     'onStateChange': onPlayerStateChange
  //   },
  //   playerVars: playerDefaults
  // });
}

function onPlayerReady (e) {
  // tv.loadVideoById(vid[currVid]);
  // e.target.playVideo();
  // e.target.mute();
  // $('#tv').addClass('active');
}

function onPlayerStateChange (e) {
  if ((e.data === YT.PlayerState.PLAYING) && $('#tv').not('.active')) {
//     $('#tv').addClass('active');
  }else if ((e.data !== YT.PlayerState.PLAYING) && $("#tv").hasClass('active')) {
//     $('#tv').removeClass('active');
  }else if(e.data === -1){
//     tv.loadVideoById('XE1XmMUNCH8');
  }
  // || e.data == YT.PlayerState.CUED
  // if (e.data === 1){
  //   $('#tv').addClass('active');
  // } else if (e.data === 2){
  //   $('#tv').removeClass('active');
  //   if(currVid === vid.length - 1){
  //     currVid = 0;
  //   } else {
  //     currVid++;
  //   }
  //   tv.loadVideoById(vid[currVid]);
  //   tv.seekTo(vid[currVid].startSeconds);
  // }
}

function vidRescale() {

  // var w = $(window).width() + 200,
  //   h = $(window).height() + 200;
  //
  // if (w / h > 16 / 9) {
  //   tv.setSize(w, w / 16 * 9);
  //   $('.tv .screen').css({
  //     'left': '0px'
  //   });
  // } else {
  //   tv.setSize(h / 9 * 16, h);
  //   $('.tv .screen').css({
  //     'left': -($('.tv .screen').outerWidth() - w) / 2
  //   });
  // }
}

$(window).on('load resize', function() {
  // vidRescale();
});
