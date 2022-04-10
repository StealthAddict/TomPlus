// can write all the items from the database to a json file and then have this program read that

// use onclick in html to activate the functions in this file

// api request
var VIDEO_ID = 'I21s_UUMSX0';

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: VIDEO_ID,
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  surpriseVid();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}


function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function surpriseVid() {
  var r = getRandomInt(3);
    
  if (r == 1){
    twitchVid();
  } else if (r == 2){
    mainVid();
  } else {
    vlogVid();
  }
}

function mainVid() {
  var r = getRandomInt(281);

  VIDEO_ID = site_ids['tommyinnit'][r]['ID'];
  player.loadVideoById(VIDEO_ID);
}
function vlogVid() {
  var r = getRandomInt(25);
  VIDEO_ID = site_ids['tomsimons'][r]['ID'];
  player.loadVideoById(VIDEO_ID);
}

function twitchVid() {
  var r = getRandomInt(400);
  
  VIDEO_ID = site_ids['tommyvods'][r]['ID'];

  player.loadVideoById(VIDEO_ID);
}

const site_ids = {"tommyinnit":[
  {
      "ID": "09SAblhflgQ"
  }, 
  {
      "ID": "s9FqnrJnmDQ"
  }, 
  {
      "ID": "iKD14Sr2CUI"
  }, 
  {
      "ID": "h61SlPZfWfw"
  }, 
  {
      "ID": "VxP0MlK-9X8"
  }, 
  {
      "ID": "OCSfKNhe-FU"
  }, 
  {
      "ID": "04v11ArCQrk"
  }, 
  {
      "ID": "g6dMBAXeOyQ"
  }, 
  {
      "ID": "Qa-VW57sL5U"
  }, 
  {
      "ID": "a3ejYq70wps"
  }, 
  {
      "ID": "1Z1bvTYKNUw"
  }, 
  {
      "ID": "WDBeFoZxhIc"
  }, 
  {
      "ID": "yD_s4K199jc"
  }, 
  {
      "ID": "jOh8tKzkcBM"
  }, 
  {
      "ID": "IltbJlVL1qY"
  }, 
  {
      "ID": "oSzziSyV7vU"
  }, 
  {
      "ID": "iGVpcKidejI"
  }, 
  {
      "ID": "r_ltC5vjq04"
  }, 
  {
      "ID": "d7d8UueL_tw"
  }, 
  {
      "ID": "c9c62TCSyFc"
  }, 
  {
      "ID": "XDbGgF1p580"
  }, 
  {
      "ID": "KbMhb4ZS1DU"
  }, 
  {
      "ID": "f6neC_O2MNc"
  }, 
  {
      "ID": "TRigGOh-_ys"
  }, 
  {
      "ID": "RKdh459XsP8"
  }, 
  {
      "ID": "3NUmtOVdsaM"
  }, 
  {
      "ID": "epLQTad1kFU"
  }, 
  {
      "ID": "LH0CWJYgEaI"
  }, 
  {
      "ID": "xJumqw9Q_AQ"
  }, 
  {
      "ID": "ohrhxTLvfds"
  }, 
  {
      "ID": "KbhtubTmWaw"
  }, 
  {
      "ID": "76aQGDv-O8s"
  }, 
  {
      "ID": "-SDtMXExr_g"
  }, 
  {
      "ID": "rLSSaUv6DwQ"
  }, 
  {
      "ID": "LIBsKhpeFKw"
  }, 
  {
      "ID": "Qua_b277fic"
  }, 
  {
      "ID": "2u8y7o6JMQY"
  }, 
  {
      "ID": "9wvzFOcwI40"
  }, 
  {
      "ID": "L_RdOXbSJNU"
  }, 
  {
      "ID": "UFZ5EMTcehA"
  }, 
  {
      "ID": "erL1XmgORA0"
  }, 
  {
      "ID": "mza_35bEaII"
  }, 
  {
      "ID": "h9stFKuPGa8"
  }, 
  {
      "ID": "cd4ILT8LDoI"
  }, 
  {
      "ID": "gy7V1gOqQLc"
  }, 
  {
      "ID": "YC6zogEBE4o"
  }, 
  {
      "ID": "Y_Cmk0MGRpQ"
  }, 
  {
      "ID": "JJMiGpx8e_s"
  }, 
  {
      "ID": "Wrvg8Rg-Va8"
  }, 
  {
      "ID": "EUGfsx2EmAw"
  }, 
  {
      "ID": "NQbz1SNWzSQ"
  }, 
  {
      "ID": "wtEEJUh5cGM"
  }, 
  {
      "ID": "wyFmfiaHucY"
  }, 
  {
      "ID": "KEB8vt8SOB4"
  }, 
  {
      "ID": "d0V87udiiKY"
  }, 
  {
      "ID": "8DnjwAuO4CY"
  }, 
  {
      "ID": "lSewwlHjzz8"
  }, 
  {
      "ID": "vQrcfRTf2IQ"
  }, 
  {
      "ID": "IUcBX_QIzgU"
  }, 
  {
      "ID": "FPqMslF8wQk"
  }, 
  {
      "ID": "MQDg-YqlP6s"
  }, 
  {
      "ID": "EQeuk8tsOQY"
  }, 
  {
      "ID": "wnTgkprki1c"
  }, 
  {
      "ID": "8PZyzjpVFhg"
  }, 
  {
      "ID": "krU5TE1l_Nk"
  }, 
  {
      "ID": "Y_qzqgOkkpE"
  }, 
  {
      "ID": "iK-QXUPBGkg"
  }, 
  {
      "ID": "_oZvbYx6TlM"
  }, 
  {
      "ID": "1GQOSaHfNaQ"
  }, 
  {
      "ID": "OQhwIbMXdP4"
  }, 
  {
      "ID": "un38j-pKLWE"
  }, 
  {
      "ID": "ce1qmCm6O_0"
  }, 
  {
      "ID": "azXzvZIHOPk"
  }, 
  {
      "ID": "zh_H1dKdfMM"
  }, 
  {
      "ID": "_LLlwZ6O1HE"
  }, 
  {
      "ID": "nNavV-FTBeA"
  }, 
  {
      "ID": "7msDInjK0wk"
  }, 
  {
      "ID": "Z_Ak46GjrqA"
  }, 
  {
      "ID": "CCbQ-DVQUyo"
  }, 
  {
      "ID": "I6pusIj2z2A"
  }, 
  {
      "ID": "nY8K5bx7dV0"
  }, 
  {
      "ID": "ubQMjpBw-n0"
  }, 
  {
      "ID": "N0HuPEvqoZc"
  }, 
  {
      "ID": "xZDpEVMWE-M"
  }, 
  {
      "ID": "ct23QxqHdMQ"
  }, 
  {
      "ID": "lwrYRKh1kws"
  }, 
  {
      "ID": "XvZC2jLRj9U"
  }, 
  {
      "ID": "b7nTzE51Ybw"
  }, 
  {
      "ID": "Y8030yHgKcs"
  }, 
  {
      "ID": "704g8FYV2ZY"
  }, 
  {
      "ID": "AFcpJKE2ZmE"
  }, 
  {
      "ID": "6Q_lS2afVOg"
  }, 
  {
      "ID": "qqfth_rv4-0"
  }, 
  {
      "ID": "cdDvHaOTdjI"
  }, 
  {
      "ID": "crMNI4HpOvM"
  }, 
  {
      "ID": "8FrXg5HUYpI"
  }, 
  {
      "ID": "wtoseWvF1sw"
  }, 
  {
      "ID": "DbwTj6_p7lM"
  }, 
  {
      "ID": "jf4H4ab9zvQ"
  }, 
  {
      "ID": "mTjXltIsXrQ"
  }, 
  {
      "ID": "ZqFnceOjwZ4"
  }, 
  {
      "ID": "s7KfXa1WSFo"
  }, 
  {
      "ID": "h0i_XGgcy4c"
  }, 
  {
      "ID": "bNUSb_BsXlo"
  }, 
  {
      "ID": "XCb-lkh8K_8"
  }, 
  {
      "ID": "mDI9FvfeN_U"
  }, 
  {
      "ID": "rVZgGARFfIE"
  }, 
  {
      "ID": "tzh1AHgH3QI"
  }, 
  {
      "ID": "sWPvdw7bOak"
  }, 
  {
      "ID": "H7CvtXXxirA"
  }, 
  {
      "ID": "2tqcnrfW9Tg"
  }, 
  {
      "ID": "pEthT2aQnC8"
  }, 
  {
      "ID": "iqDewFlIG0k"
  }, 
  {
      "ID": "WsQV1boFCLk"
  }, 
  {
      "ID": "0zkyKk6rlSI"
  }, 
  {
      "ID": "qId7dMMw4Dk"
  }, 
  {
      "ID": "jb8hTOLzLnI"
  }, 
  {
      "ID": "IX7P4vWKEX0"
  }, 
  {
      "ID": "YsqYmlOfaqw"
  }, 
  {
      "ID": "fc6TdQ4y8t4"
  }, 
  {
      "ID": "63invJUyJU0"
  }, 
  {
      "ID": "XdvXP87__eA"
  }, 
  {
      "ID": "TsN62hImLoM"
  }, 
  {
      "ID": "ot_TOh1wsF0"
  }, 
  {
      "ID": "IM2HpYEAET0"
  }, 
  {
      "ID": "71-iunknB6w"
  }, 
  {
      "ID": "ptpBPlEy-Uo"
  }, 
  {
      "ID": "TmbQAFrjQKc"
  }, 
  {
      "ID": "ZUO3tZ_PY0o"
  }, 
  {
      "ID": "4oFmj4rRXaA"
  }, 
  {
      "ID": "sKNWa1R8m6o"
  }, 
  {
      "ID": "oGxWPw97Yjw"
  }, 
  {
      "ID": "FLWU2EVeAKQ"
  }, 
  {
      "ID": "RWH10upb4h4"
  }, 
  {
      "ID": "L9baDLULQjQ"
  }, 
  {
      "ID": "twAEuN3BlTI"
  }, 
  {
      "ID": "4vPzn5BsqA8"
  }, 
  {
      "ID": "JWPmtBRTlbY"
  }, 
  {
      "ID": "F7fxVw9vu-E"
  }, 
  {
      "ID": "hyblfZgaqGk"
  }, 
  {
      "ID": "SAKPpWd8gVA"
  }, 
  {
      "ID": "uCEHbLJMHSE"
  }, 
  {
      "ID": "rFBDpgiiy4w"
  }, 
  {
      "ID": "gECnmxp_lAI"
  }, 
  {
      "ID": "cgSBWNjyB30"
  }, 
  {
      "ID": "QWOvf4r5F-o"
  }, 
  {
      "ID": "v07BoDP3aRc"
  }, 
  {
      "ID": "3og9tbv6krY"
  }, 
  {
      "ID": "qOPHt6zZLhg"
  }, 
  {
      "ID": "NWKTMRzPc7k"
  }, 
  {
      "ID": "2KyiI-4auaA"
  }, 
  {
      "ID": "5cS2b6RTC3w"
  }, 
  {
      "ID": "qSKb951efCQ"
  }, 
  {
      "ID": "-HTiJ-KnnNk"
  }, 
  {
      "ID": "xtuR3s7y0iM"
  }, 
  {
      "ID": "ILV5zvdLfJQ"
  }, 
  {
      "ID": "b1EJ13q6y9Y"
  }, 
  {
      "ID": "RO36tKs7q3I"
  }, 
  {
      "ID": "NMGuLSqXoZQ"
  }, 
  {
      "ID": "XCaGLdgNzs4"
  }, 
  {
      "ID": "QLJNczzNxL8"
  }, 
  {
      "ID": "ua3AgOfu_ko"
  }, 
  {
      "ID": "4SDpRMLF_qc"
  }, 
  {
      "ID": "wpNpOm3S0-0"
  }, 
  {
      "ID": "MQm64UHGLVA"
  }, 
  {
      "ID": "R6gWYm2y0h4"
  }, 
  {
      "ID": "doy1TUsRT-I"
  }, 
  {
      "ID": "rAKOGDzH4QI"
  }, 
  {
      "ID": "IPZJXv8yBVY"
  }, 
  {
      "ID": "ttd2FfSd6qk"
  }, 
  {
      "ID": "5N7jLMQTG70"
  }, 
  {
      "ID": "FXQ5dhkd4N4"
  }, 
  {
      "ID": "mqUTFTPbCOU"
  }, 
  {
      "ID": "d3s8jQiHUEY"
  }, 
  {
      "ID": "9eMkWDFcE1I"
  }, 
  {
      "ID": "EYwRq0YLKOc"
  }, 
  {
      "ID": "XnKwMiik5aQ"
  }, 
  {
      "ID": "pwuQeL-ZrLc"
  }, 
  {
      "ID": "WZdzlA9N1RQ"
  }, 
  {
      "ID": "PedyXgiDdvM"
  }, 
  {
      "ID": "I78S2MP02EQ"
  }, 
  {
      "ID": "lzWNaYv6RLI"
  }, 
  {
      "ID": "tZPjAOBR4Dw"
  }, 
  {
      "ID": "XBYMm_MtKGo"
  }, 
  {
      "ID": "nOulsEUWV1U"
  }, 
  {
      "ID": "4YEXvPl92mI"
  }, 
  {
      "ID": "W6vOF_WD5aI"
  }, 
  {
      "ID": "iBxSxi-Kq2E"
  }, 
  { "ID": "kA6H-mZrT7g"}, {"ID": "p6GEctbmHGE"}, {"ID": "_GPPL1rhNWo"}, 
  {
      "ID": "41yERFJVjwQ"
  }, 
  {
      "ID": "TrPTURTpdKE"
  }, 
  {
      "ID": "CXDgIjDzxjw"
  }, 
  {
      "ID": "xTliRo0aNA8"
  }, 
  {
      "ID": "pCRr-Ba3x5o"
  }, 
  {
      "ID": "uY-Q0r1VUNY"
  }, 
  {
      "ID": "LeswnEWHkf0"
  }, 
  {
      "ID": "3hxLq-I4ueQ"
  }, 
  {
      "ID": "0oj7fM_r9yM"
  }, 
  {
      "ID": "ABBNAdohKls"
  }, 
  {
      "ID": "CF0ZscHKrnQ"
  }, 
  {
      "ID": "tOZWhBZZrW8"
  }, 
  {
      "ID": "_FByROLqz-M"
  }, 
  {
      "ID": "YYJ3QXIzFgg"
  }, 
  {
      "ID": "m_vXn5J_f60"
  }, 
  {
      "ID": "YUcyNESJfrY"
  }, 
  {
      "ID": "09XoL5g94oc"
  }, 
  {
      "ID": "JtJLCZMfhFQ"
  }, 
  {
      "ID": "SWsCXCc081c"
  }, 
  {
      "ID": "LyEi91zim0I"
  }, 
  {
      "ID": "q9LuMnk8ZL4"
  }, 
  {
      "ID": "fv5zEIYMcYc"
  }, 
  {
      "ID": "q2TUNYPgnfY"
  }, 
  {
      "ID": "XS7ykCvhFwc"
  }, 
  {
      "ID": "0j2TC_jpmVo"
  }, 
  {
      "ID": "TyPsw5qlYcU"
  }, 
  {
      "ID": "YPKF1rW-UrY"
  }, 
  {
      "ID": "vC_fEOR9YVo"
  }, 
  {
      "ID": "_tu8WL-2yZ0"
  }, 
  {
      "ID": "zp6X729lCbQ"
  }, 
  {
      "ID": "4W19nw6WGlc"
  }, 
  {
      "ID": "UjXwDpRjE8M"
  }, 
  {
      "ID": "8RMGonYV4DY"
  }, 
  {
      "ID": "VW5EhLmlh4c"
  }, 
  {
      "ID": "-mg6xZQnTjU"
  }, 
  {
      "ID": "EJR8XdtJCt8"
  }, 
  {
      "ID": "8TN9e6UOuy0"
  }, 
  {
      "ID": "Nb9MpN7_mno"
  }, 
  {
      "ID": "-JEf2xABw38"
  }, 
  {
      "ID": "pGwthmXi-PM"
  }, 
  {
      "ID": "HcREVjoBSdE"
  }, 
  {
      "ID": "ipbOpTBg4tQ"
  }, 
  {
      "ID": "7-A-Sf-Gajw"
  }, 
  {
      "ID": "cH0gyjQyaoY"
  }, 
  {
      "ID": "UDvQmw3ytkU"
  }, 
  {
      "ID": "hiQ4pzTUoRw"
  }, 
  {
      "ID": "6XbophGSwhc"
  }, 
  {
      "ID": "_FO-ncrmnb8"
  }, 
  {
      "ID": "PGu0O1OGuCY"
  }, 
  {
      "ID": "Jr2FkyWX2yw"
  }, 
  {
      "ID": "0oTpqpiQAVU"
  }, 
  {
      "ID": "79b7xfrvKbU"
  }, 
  {
      "ID": "oc48GDQo4E0"
  }, 
  {
      "ID": "SVOvJf_keYw"
  }, 
  {
      "ID": "4mv6Ly-zw1o"
  }, 
  {
      "ID": "zNBjVCLVLK8"
  }, 
  {
      "ID": "QnqJwVU-pZ0"
  }, 
  {
      "ID": "D_p9ClhfZKQ"
  }, 
  {
      "ID": "tB6xdrxclrM"
  }, 
  {
      "ID": "QaOaYokn5o4"
  }, 
  {
      "ID": "iWbtGy_O7v4"
  }, 
  {
      "ID": "y1-vGUFy1XI"
  }, 
  {
      "ID": "2XQfhDqpMBg"
  }, 
  {
      "ID": "QiUsPLfaTh4"
  }, 
  {
      "ID": "VBM9GoxrZKg"
  }, 
  {
      "ID": "VY2v32W3snQ"
  }, 
  {
      "ID": "NINtCBStnoc"
  }, 
  {
      "ID": "VITmBo_FY2Y"
  }, 
  {
      "ID": "ZR5JWniVZ14"
  }, 
  {
      "ID": "qDlcAGkha08"
  }, 
  {
      "ID": "Mv2GIyDrzm8"
  }, 
  {
      "ID": "ijNtBBi66Qs"
  }, 
  {
      "ID": "fAyhUOv8yl8"
  }, 
  {
      "ID": "LPg-Y-UFXME"
  }, 
  {
      "ID": "4Ht6Iq6vORw"
  }, 
  {
      "ID": "LgxoXX-Kj3A"
  }, 
  {
      "ID": "DVnab3qL2_Q"
  }, 
  {
      "ID": "sFe7lRpk7wI"
  }, 
  {
      "ID": "wZs_QYAiogU"
  }, 
  {
      "ID": "UDRpYI_XBLI"
  }, 
  {
      "ID": "xvBL4SrFCG4"
  }, 
  {
      "ID": "47KXkJIb-S8"
  }, 
  {
      "ID": "RA-eTiyF8ok"
  }, 
  {
      "ID": "KIuWvX4BxLM"
  }, 
  {
      "ID": "InZPbY_JTZM"
  }, 
  {
      "ID": "N_SyuuEioCE"
  }, 
  {
      "ID": "1Ppjl6DkQWk"
  }, 
  {
      "ID": "PErGL1W-JWk"
  }, 
  {
      "ID": "Knyc0oHd-zE"
  }, 
  {
      "ID": "AGBqFvjdHQ0"
  }
],
"tomsimons":[
  {
      "ID": "kIAT0l8eAKU"
  }, 
  {
      "ID": "sR5RpqU1f60"
  }, 
  {
      "ID": "I21s_UUMSX0"
  }, 
  {
      "ID": "Anw5C_WcTOc"
  }, 
  {
      "ID": "rG5Op069fqY"
  }, 
  {
      "ID": "sTiKX__AAVk"
  }, 
  {
      "ID": "aqipiqO1m4U"
  }, 
  {
      "ID": "rJylehVPGkw"
  }, 
  {
      "ID": "RUGaUnq6ljY"
  }, 
  {
      "ID": "XH4Y8rziMg0"
  }, 
  {
      "ID": "IgAUPniSKsY"
  }, 
  {
      "ID": "yLpx_e4ewb4"
  }, 
  {
      "ID": "Egd7-Y1HPio"
  }, 
  {
      "ID": "ZU-8HZIU0cI"
  }, 
  {
      "ID": "TysA-YiNTX8"
  }, 
  {
      "ID": "AnVeBXWNaG4"
  }, 
  {
      "ID": "6an2z3eVJ30"
  }, 
  {
      "ID": "J6qFdyC5DCI"
  }, 
  {
      "ID": "fbCSSV8RpMc"
  }, 
  {
      "ID": "3dWvR_RXPhQ"
  }, 
  {
      "ID": "u7Z9eqcDTyU"
  }, 
  {
      "ID": "o-vSpgM8RNI"
  }, 
  {
      "ID": "hzyvYNN23uY"
  }, 
  {
      "ID": "s0_w3jAf5ho"
  }, 
  {
      "ID": "7omx1_Zi0JA"
  }
],
"tommyvods":[
  {
      "ID": "Z-E9qlBKs14"
  }, 
  {
      "ID": "aYlZ-01wyzA"
  }, 
  {
      "ID": "YwWEFMvemoE"
  }, 
  {
      "ID": "KL7vQSRwBD0"
  }, 
  {
      "ID": "RqhxbiAWMgY"
  }, 
  {
      "ID": "hLNRbmEeBJM"
  }, 
  {
      "ID": "vDm8cjtYnBI"
  }, 
  {
      "ID": "Di2-jg8mI7I"
  }, 
  {
      "ID": "uEl7ua_2_D4"
  }, 
  {
      "ID": "MOTSPTSwrQs"
  }, 
  {
      "ID": "wwoDYUcfB30"
  }, 
  {
      "ID": "vx6vq5h0V1U"
  }, 
  {
      "ID": "dfYNWA-8joo"
  }, 
  {
      "ID": "jdjm1XMOBso"
  }, 
  {
      "ID": "jCmb5vVeJsM"
  }, 
  {
      "ID": "vFcC0F-xtZg"
  }, 
  {
      "ID": "lXsvVlakSNY"
  }, 
  {
      "ID": "_uXrNGqXmBs"
  }, 
  {
      "ID": "GcEuFruMJpg"
  }, 
  {
      "ID": "fjhxv1rEB5k"
  }, 
  {
      "ID": "C3WxyfsfkW8"
  }, 
  {
      "ID": "5ok_uJwUus0"
  }, 
  {
      "ID": "VsdA2dVPYcs"
  }, 
  {
      "ID": "TwAjO8ZsLS8"
  }, 
  {
      "ID": "Mp2gPd9tRzI"
  }, 
  {
      "ID": "pmubmkQyQjk"
  }, 
  {
      "ID": "82kb6v2VcBk"
  }, 
  {
      "ID": "-_MnOk8Fgsk"
  }, 
  {
      "ID": "jAyRmi6b98Y"
  }, 
  {
      "ID": "OIl3yZ_NPSU"
  }, 
  {
      "ID": "Y6S61xTwUQU"
  }, 
  {
      "ID": "EqKzX-ZOf0Q"
  }, 
  {
      "ID": "tCC7E8SUUQ4"
  }, 
  {
      "ID": "i8G9A_6-B2M"
  }, 
  {
      "ID": "5DPPfD3xsog"
  }, 
  {
      "ID": "Toa0zi0EYiE"
  }, 
  {
      "ID": "V952hNAeLos"
  }, 
  {
      "ID": "R0QY6qbM0zs"
  }, 
  {
      "ID": "kMHOQHbfwxg"
  }, 
  {
      "ID": "Dmz3rgxUeo0"
  }, 
  {
      "ID": "vaArRlzTRjY"
  }, 
  {
      "ID": "RhHRm11Bl-0"
  }, 
  {
      "ID": "8XBDCglU8UE"
  }, 
  {
      "ID": "nUp12Gg7IWk"
  }, 
  {
      "ID": "JfUgfHY1zj4"
  }, 
  {
      "ID": "bGN7W_ch1hg"
  }, 
  {
      "ID": "MNAnk-0sy9U"
  }, 
  {
      "ID": "_RjXm6PtsOg"
  }, 
  {
      "ID": "1pa0Iq79V0w"
  }, 
  {
      "ID": "EGVXqoZmoWo"
  }, 
  {
      "ID": "x-sTwNndKC4"
  }, 
  {
      "ID": "Zvm363vsd5I"
  }, 
  {
      "ID": "IWnmdYco0qg"
  }, 
  {
      "ID": "JGmwK4sRzro"
  }, 
  {
      "ID": "n6RXusMf3MI"
  }, 
  {
      "ID": "CFylw9cRYZg"
  }, 
  {
      "ID": "2PlsPIG8umo"
  }, 
  {
      "ID": "n4_MweQ6FdE"
  }, 
  {
      "ID": "NBUhArxNjvc"
  }, 
  {
      "ID": "N0kPeBJpyhQ"
  }, 
  {
      "ID": "nXklOaDgPYc"
  }, 
  {
      "ID": "X2YepyaBARw"
  }, 
  {
      "ID": "pV6O17qrW-8"
  }, 
  {
      "ID": "pG2Wi09dFsA"
  }, 
  {
      "ID": "HJe7JkV9r0Q"
  }, 
  {
      "ID": "SRaIwodPiH8"
  }, 
  {
      "ID": "YF5VqlYlWpI"
  }, 
  {
      "ID": "A9VZXNKwIcs"
  }, 
  {
      "ID": "TdLvcjCCRj8"
  }, 
  {
      "ID": "_vDS6kc4tjs"
  }, 
  {
      "ID": "ikHahVyKkCI"
  }, 
  {
      "ID": "j-3BOgbIhik"
  }, 
  {
      "ID": "UtEz36NZmsc"
  }, 
  {
      "ID": "L5HDQUd6kB8"
  }, 
  {
      "ID": "UxOMjWxSg1U"
  }, 
  {
      "ID": "bnq72wbQvCI"
  }, 
  {
      "ID": "ddgKb7wuKoU"
  }, 
  {
      "ID": "EX9NaLI039E"
  }, 
  {
      "ID": "1VXmOBgA7w4"
  }, 
  {
      "ID": "W_FQClsmU88"
  }, 
  {
      "ID": "LdJcOLAWvI4"
  }, 
  {
      "ID": "esPMmY-pAFw"
  }, 
  {
      "ID": "9MCNsHjDILI"
  }, 
  {
      "ID": "E6QfW87Rt7E"
  }, 
  {
      "ID": "_b_rRNZkoZc"
  }, 
  {
      "ID": "NIdM1eQucwQ"
  }, 
  {
      "ID": "yYZiEcodd4U"
  }, 
  {
      "ID": "BWLiMTavk1I"
  }, 
  {
      "ID": "noyYUKkeINQ"
  }, 
  {
      "ID": "Ta3cUlGjhRM"
  }, 
  {
      "ID": "hMp3kaIOdTc"
  }, 
  {
      "ID": "c8LnbeaLuN4"
  }, 
  {
      "ID": "ZM8IiCGFJgo"
  }, 
  {
      "ID": "IZhili89kSE"
  }, 
  {
      "ID": "ayVnnkl6bRI"
  }, 
  {
      "ID": "ejK4sZrt1A8"
  }, 
  {
      "ID": "Awhka16TL-I"
  }, 
  {
      "ID": "JRld4gRzaxA"
  }, 
  {
      "ID": "al73_e5SylU"
  }, 
  {
      "ID": "AsV-LIxUmpQ"
  }, 
  {
      "ID": "JlBwZrlu3GA"
  }, 
  {
      "ID": "_0SuvCZcfr0"
  }, 
  {
      "ID": "fl1LCdRqNrY"
  }, 
  {
      "ID": "AlOrZB4bgY8"
  }, 
  {
      "ID": "0Co12ARCSOw"
  }, 
  {
      "ID": "_s-7qJKS5ho"
  }, 
  {
      "ID": "NjrkQ1QTd8c"
  }, 
  {
      "ID": "lQ2SD95NiSw"
  }, 
  {
      "ID": "1y5KiMuIlm4"
  }, 
  {
      "ID": "P4s4cXEhsXs"
  }, 
  {
      "ID": "yjo7Elx0Xto"
  }, 
  {
      "ID": "v8-ILt7H2Q0"
  }, 
  {
      "ID": "DcljQIzbUyI"
  }, 
  {
      "ID": "4bodi-XuGR8"
  }, 
  {
      "ID": "Ga3RmEBrVks"
  }, 
  {
      "ID": "sYWs7zme-eI"
  }, 
  {
      "ID": "w-ruTlhdpNo"
  }, 
  {
      "ID": "bePgYOufRVg"
  }, 
  {
      "ID": "aSFOuQsvEDk"
  }, 
  {
      "ID": "5WF10KcBjIU"
  }, 
  {
      "ID": "A3PlFp_Vg6k"
  }, 
  {
      "ID": "6SiurepNDms"
  }, 
  {
      "ID": "N8tLPvFjL2Y"
  }, 
  {
      "ID": "VfwOVIZerIc"
  }, 
  {
      "ID": "hydJNmvW7Gs"
  }, 
  {
      "ID": "UTVoyIbe8M4"
  }, 
  {
      "ID": "_sMjgPSpIX8"
  }, 
  {
      "ID": "fHnLvtUjfps"
  }, 
  {
      "ID": "BKSQK9cTCxA"
  }, 
  {
      "ID": "ndMLZrfkXsc"
  }, 
  {
      "ID": "cXcdnEGNdJM"
  }, 
  {
      "ID": "dxGY4UWO9a0"
  }, 
  {
      "ID": "4Ufa-MV3cDU"
  }, 
  {
      "ID": "_okO4CssoqI"
  }, 
  {
      "ID": "OGXPvme_aE8"
  }, 
  {
      "ID": "6lhr1KlIVQI"
  }, 
  {
      "ID": "wSAlbtO6zr8"
  }, 
  {
      "ID": "DRXKriskZdQ"
  }, 
  {
      "ID": "P2Fdrd5QVsc"
  }, 
  {
      "ID": "FYZdckVvDDk"
  }, 
  {
      "ID": "Vvews4NiUsM"
  }, 
  {
      "ID": "_tQgUPoTv6c"
  }, 
  {
      "ID": "UEj1xRvpSbk"
  }, 
  {
      "ID": "mJdYgaDHilM"
  }, 
  {
      "ID": "c6ILC5Z5bD4"
  }, 
  {
      "ID": "DI5ueEb7VuQ"
  }, 
  {
      "ID": "sHQ7XHLaDOU"
  }, 
  {
      "ID": "2SfKCGBV0C4"
  }, 
  {
      "ID": "GwdNcGsIGEk"
  }, 
  {
      "ID": "w-EgCI0DwR4"
  }, 
  {
      "ID": "faFiCnh0TAE"
  }, 
  {
      "ID": "kTbuqvZ304Q"
  }, 
  {
      "ID": "nwiVPrKmU0w"
  }, 
  {
      "ID": "0t7tbOftxaY"
  }, 
  {
      "ID": "ABkDL3pmobg"
  }, 
  {
      "ID": "qzdbudo8cFQ"
  }, 
  {
      "ID": "HF9dSo9y_Bk"
  }, 
  {
      "ID": "_A4fEPBg2ho"
  }, 
  {
      "ID": "UzLaneCuhMw"
  }, 
  {
      "ID": "R3GB6rIFM0I"
  }, 
  {
      "ID": "3Z_kdlivG0M"
  }, 
  {
      "ID": "4y649zJLkgY"
  }, 
  {
      "ID": "rVlO2RRKD0o"
  }, 
  {
      "ID": "NNlIeYVRer0"
  }, 
  {
      "ID": "2ZP1NNDXjVY"
  }, 
  {
      "ID": "smfyzGfyhO4"
  }, 
  {
      "ID": "WUcPmVuTDb4"
  }, 
  {
      "ID": "KHVwIeixGNM"
  }, 
  {
      "ID": "ioue9UQddOc"
  }, 
  {
      "ID": "nmNLfZ4Zyzg"
  }, 
  {
      "ID": "Lk1N5WU1u3E"
  }, 
  {
      "ID": "gzyb0uN6j5c"
  }, 
  {
      "ID": "YREUoEi3YOg"
  }, 
  {
      "ID": "O-wvzh6GmkE"
  }, 
  {
      "ID": "v15zfbtxonM"
  }, 
  {
      "ID": "3Ect8Nl3rZw"
  }, 
  {
      "ID": "qVITvr3uRVU"
  }, 
  {
      "ID": "aGbsqvq_vWA"
  }, 
  {
      "ID": "x2z0H0NFb9Y"
  }, 
  {
      "ID": "q2RctrCf7BU"
  }, 
  {
      "ID": "KQbh_YrTJvw"
  }, 
  {
      "ID": "Ua2ip0xgwkg"
  }, 
  {
      "ID": "41R4xvHLWog"
  }, 
  {
      "ID": "mvoVJCcQkjA"
  }, 
  {
      "ID": "DfDtsRNArH8"
  }, 
  {
      "ID": "LygFWZ6DQM8"
  }, 
  {
      "ID": "6NuBkBv1QFs"
  }, 
  {
      "ID": "rEgklZPL7PA"
  }, 
  {
      "ID": "KjJcBBrdYVM"
  }, 
  {
      "ID": "pA-h1QJk4V8"
  }, 
  {
      "ID": "KZqYWLp1C9k"
  }, 
  {
      "ID": "4IewuY1WoB0"
  }, 
  {
      "ID": "w0_d-aY4R-M"
  }, 
  {
      "ID": "OzIchFU580U"
  }, 
  {
      "ID": "k-eyzt7Sdp8"
  }, 
  {
      "ID": "GreDXKfxsS4"
  }, 
  {
      "ID": "01zif0K6dB4"
  }, 
  {
      "ID": "EBU1rgVozx8"
  }, 
  {
      "ID": "nnax_Ecez9I"
  }, 
  {
      "ID": "se1iBUtt3dk"
  }, 
  {
      "ID": "0AGtiYum1M4"
  }, 
  {
      "ID": "3Z0wWX0msOg"
  }, 
  {
      "ID": "TjKlxTZiLGk"
  }, 
  {
      "ID": "QFvZ3Uco__4"
  }, 
  {
      "ID": "Rj91vXPNYBs"
  }, 
  {
      "ID": "NIzRFxA0VGw"
  }, 
  {
      "ID": "HufcbG73rFI"
  }, 
  {
      "ID": "I6HP2-uKSrA"
  }, 
  {
      "ID": "4znorK3TgT8"
  }, 
  {
      "ID": "g8XVMcwQWXo"
  }, 
  {
      "ID": "NuTfvpZPEwY"
  }, 
  {
      "ID": "-YfnOFeWCOE"
  }, 
  {
      "ID": "95Q02X4xmwU"
  }, 
  {
      "ID": "yddhgH27xy8"
  }, 
  {
      "ID": "UQgkJuwL-NA"
  }, 
  {
      "ID": "bBPOngFeoxk"
  }, 
  {
      "ID": "fQIi0U0pGqw"
  }, 
  {
      "ID": "flN8Rsx6Yug"
  }, 
  {
      "ID": "0cT9tXVbOlQ"
  }, 
  {
      "ID": "yBWn3cnscsI"
  }, 
  {
      "ID": "3uF6TjHKi8Y"
  }, 
  {
      "ID": "sdRz9aTFo6Y"
  }, 
  {
      "ID": "gxHffNBD4tk"
  }, 
  {
      "ID": "N8-nlMxTnXw"
  }, 
  {
      "ID": "3w16aBBV5X0"
  }, 
  {
      "ID": "T5SqqH8fiaE"
  }, 
  {
      "ID": "zKfiqGQEixQ"
  }, 
  {
      "ID": "PIbNA73wIu0"
  }, 
  {
      "ID": "IoKMoqstKqE"
  }, 
  {
      "ID": "OEB05RoZxBY"
  }, 
  {
      "ID": "HJNzkNSMVsU"
  }, 
  {
      "ID": "E9WUFq1_lLQ"
  }, 
  {
      "ID": "NbkzJQxpvJQ"
  }, 
  {
      "ID": "IND-kRkBvmw"
  }, 
  {
      "ID": "s0gHDkrfBIA"
  }, 
  {
      "ID": "bV4cIMelKGw"
  }, 
  {
      "ID": "xpmTci5d9Sk"
  }, 
  {
      "ID": "PElUv1FaAFA"
  }, 
  {
      "ID": "tSfkgE0fffQ"
  }, 
  {
      "ID": "9RdDCs3LQxg"
  }, 
  {
      "ID": "ZLmXVbkUPOA"
  }, 
  {
      "ID": "PxQJP9_jVHE"
  }, 
  {
      "ID": "-KSAYwRVR2Y"
  }, 
  {
      "ID": "PKqgonHWtro"
  }, 
  {
      "ID": "tRx_iMhaV9I"
  }, 
  {
      "ID": "0CH6m9a9h3M"
  }, 
  {
      "ID": "IE_zB-xQTC4"
  }, 
  {
      "ID": "hgWHQvDcjF0"
  }, 
  {
      "ID": "WzpcartfuWk"
  }, 
  {
      "ID": "KSVKOTekJkU"
  }, 
  {
      "ID": "vTqk1i7Emx4"
  }, 
  {
      "ID": "-1_kzzLsE2A"
  }, 
  {
      "ID": "EsgO3SOF0fw"
  }, 
  {
      "ID": "vmL0JUURXcg"
  }, 
  {
      "ID": "N9AUlEwMODc"
  }, 
  {
      "ID": "CCNksF35qxU"
  }, 
  {
      "ID": "r24GJ8IiEk8"
  }, 
  {
      "ID": "BKf4rWIxvcY"
  }, 
  {
      "ID": "lQSq1-5QRKU"
  }, 
  {
      "ID": "qevM-wF2HT4"
  }, 
  {
      "ID": "bkr7g3C89C4"
  }, 
  {
      "ID": "5WSPHYDfyzI"
  }, 
  {
      "ID": "4LZl47kB1T0"
  }, 
  {
      "ID": "1kaBc6N7D5o"
  }, 
  {
      "ID": "V4bTi4XpMoI"
  }, 
  {
      "ID": "BQhRMQPGKlI"
  }, 
  {
      "ID": "nslWxcW3QOc"
  }, 
  {
      "ID": "wsZSa-4dA-g"
  }, 
  {
      "ID": "8EPlLtfm2IY"
  }, 
  {
      "ID": "JtCMPBPO8R4"
  }, 
  {
      "ID": "hKHZS3W5ODc"
  }, 
  {
      "ID": "9QhCJf1v8gU"
  }, 
  {
      "ID": "L6m4qG8z4ko"
  }, 
  {
      "ID": "RdTY54O7LI8"
  }, 
  {
      "ID": "z9H-x_43JU0"
  }, 
  {
      "ID": "AmmsC2i_cOs"
  }, 
  {
      "ID": "mHZtwRhh79s"
  }, 
  {
      "ID": "BRz9_36bvLg"
  }, 
  {
      "ID": "ZvQkoPpeegg"
  }, 
  {
      "ID": "Z8F9nO8k37Q"
  }, 
  {
      "ID": "Gqk4dI9EU-k"
  }, 
  {
      "ID": "Uc6yrRCl_10"
  }, 
  {
      "ID": "8rtZdC8Lx0I"
  }, 
  {
      "ID": "MLz5mgZzwks"
  }, 
  {
      "ID": "Zd8QQ_4FO1k"
  }, 
  {
      "ID": "RaRoAxB5LZo"
  }, 
  {
      "ID": "22US0vyZODg"
  }, 
  {
      "ID": "lixDYtrFgXA"
  }, 
  {
      "ID": "jr8qiQEGHgg"
  }, 
  {
      "ID": "jIgjFuu-CF8"
  }, 
  {
      "ID": "_s1ZV_e1A_I"
  }, 
  {
      "ID": "2Rvq-orz5ms"
  }, 
  {
      "ID": "a8rZVOfzB6I"
  }, 
  {
      "ID": "MI5L02cijyw"
  }, 
  {
      "ID": "cywJh96ZGzw"
  }, 
  {
      "ID": "XpTn-PUZVa0"
  }, 
  {
      "ID": "hnJq-ryCo4M"
  }, 
  {
      "ID": "gcV4BqPf43w"
  }, 
  {
      "ID": "qd80YV9rcys"
  }, 
  {
      "ID": "gQutVkiN07g"
  }, 
  {
      "ID": "dq2JQv7POKQ"
  }, 
  {
      "ID": "WDap3EuCrqE"
  }, 
  {
      "ID": "S1brQMS8jvI"
  }, 
  {
      "ID": "rRxVUpyXGKo"
  }, 
  {
      "ID": "FGeDR66SuY4"
  }, 
  {
      "ID": "TPvOcjdh8zk"
  }, 
  {
      "ID": "-bHRW7agG9Y"
  }, 
  {
      "ID": "ldjEOaybqto"
  }, 
  {
      "ID": "xM28c7F8Boo"
  }, 
  {
      "ID": "R7jpBKDVxz4"
  }, 
  {
      "ID": "k9nfR_oO-0A"
  }, 
  {
      "ID": "bnvpXB4NUic"
  }, 
  {
      "ID": "fQfoSq1WcpM"
  }, 
  {
      "ID": "cs9G4ZieDEI"
  }, 
  {
      "ID": "Z1Jdbd-dQVQ"
  }, 
  {
      "ID": "fSRFU0_TIUE"
  }, 
  {
      "ID": "XN6SPH9mTuk"
  }, 
  {
      "ID": "BfVVfDcUI-Q"
  }, 
  {
      "ID": "Ie2nmXmpWhE"
  }, 
  {
      "ID": "YZLXAu0GGYU"
  }, 
  {
      "ID": "6fwPd2Bf61g"
  }, 
  {
      "ID": "nXkPcC2A3CQ"
  }, 
  {
      "ID": "R0gE6yrkpyU"
  }, 
  {
      "ID": "3NxqMGphxKo"
  }, 
  {
      "ID": "sGr3PAiRkA0"
  }, 
  {
      "ID": "4SHY1zb-N0k"
  }, 
  {
      "ID": "nfHPdaVbTBk"
  }, 
  {
      "ID": "UBBcZpqQyFY"
  }, 
  {
      "ID": "GhLl5DW2-W0"
  }, 
  {
      "ID": "2Bfwh0uBjIA"
  }, 
  {
      "ID": "YJIRX4Wrpw0"
  }, 
  {
      "ID": "LrXFeoBgBL0"
  }, 
  {
      "ID": "cVlHfTcOBZU"
  }, 
  {
      "ID": "f50Fc0-X_9k"
  }, 
  {
      "ID": "llAze5ONbog"
  }, 
  {
      "ID": "2FV0JvcxKDI"
  }, 
  {
      "ID": "9k-SPSStlIA"
  }, 
  {
      "ID": "DN0w8hR8LbA"
  }, 
  {
      "ID": "opZYooYzt7s"
  }, 
  {
      "ID": "p_RzA2cSGc0"
  }, 
  {
      "ID": "jH4VlCnoTUw"
  }, 
  {
      "ID": "46rh0-LjL_s"
  }, 
  {
      "ID": "ih1CN-XkZIg"
  }, 
  {
      "ID": "JUw_yJK_f2M"
  }, 
  {
      "ID": "B-nAQZggimE"
  }, 
  {
      "ID": "UQiLSLOCRoQ"
  }, 
  {
      "ID": "MCLTF6LzQac"
  }, 
  {
      "ID": "XYTz9I5ldSY"
  }, 
  {
      "ID": "GoWjmiv_zrk"
  }, 
  {
      "ID": "zaEvBTjyRNs"
  }, 
  {
      "ID": "uM9u4VqP6DA"
  }, 
  {
      "ID": "2TTHmo_VoEk"
  }, 
  {
      "ID": "ZbZS_CtrkPA"
  }, 
  {
      "ID": "sxnC0ibxxTc"
  }, 
  {
      "ID": "5IREyz-SsLo"
  }, 
  {
      "ID": "s_Dn-VJaUUE"
  }, 
  {
      "ID": "PI8ixolYTWw"
  }, 
  {
      "ID": "FJZgdNWKAPI"
  }, 
  {
      "ID": "iKPckBTkv7s"
  }, 
  {
      "ID": "y7RFNKFnFKk"
  }, 
  {
      "ID": "nY7SetSug_E"
  }, 
  {
      "ID": "fXkRvXumbuw"
  }, 
  {
      "ID": "B6Hj4ihBiE8"
  }, 
  {
      "ID": "txNOoPv5va8"
  }, 
  {
      "ID": "FsB4QVEpJzs"
  }, 
  {
      "ID": "mSL0No4AdFk"
  }, 
  {
      "ID": "b75eHQbqShE"
  }, 
  {
      "ID": "jpj3Jg33DSE"
  }, 
  {
      "ID": "0A8s0-JeJCc"
  }, 
  {
      "ID": "mS4OYlrMg_Q"
  }, 
  {
      "ID": "KtDOo59y5xM"
  }, 
  {
      "ID": "CFkRTnz7JTA"
  }, 
  {
      "ID": "BK-JBmRr-6A"
  }, 
  {
      "ID": "WMuhpIbbeOs"
  }, 
  {
      "ID": "DWQJ2J4qZzk"
  }, 
  {
      "ID": "XHLhfRwFmyE"
  }, 
  {
      "ID": "YQFSaINW3mo"
  }, 
  {
      "ID": "OflumFiduiQ"
  }, 
  {
      "ID": "0QXgizB2Oc4"
  }, 
  {
      "ID": "47MeZqW25kw"
  }, 
  {
      "ID": "WPywRyx6dso"
  }, 
  {
      "ID": "bcQ799zXK2Q"
  }, 
  {
      "ID": "2qRBDpdibnw"
  }, 
  {
      "ID": "vdVu9rAZK6o"
  }, 
  {
      "ID": "eHZ-k65z_e8"
  }, 
  {
      "ID": "wJCFEkMrlFA"
  }, 
  {
      "ID": "catyY6zop7c"
  }, 
  {
      "ID": "tmVAttlyF9s"
  }, 
  {
      "ID": "r1j6FNGSd5E"
  }, 
  {
      "ID": "I4lKEidj3Cw"
  }, 
  {
      "ID": "FXqyJwxhhh4"
  }, 
  {
      "ID": "7QuZ9IV8qm0"
  }, 
  {
      "ID": "GRka3xuPX1o"
  }, 
  {
      "ID": "2XK-flGYx64"
  }, 
  {
      "ID": "eKUq_b09trQ"
  }, 
  {
      "ID": "5PUGUGSydW4"
  }, 
  {
      "ID": "m4aapytTtPI"
  }, 
  {
      "ID": "ech0v41_sTI"
  }, 
  {
      "ID": "MDWcsQAd2RU"
  }, 
  {
      "ID": "w8S1_JuMpzA"
  }
]
};