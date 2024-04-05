    /*
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
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

     // https://www.youtube.com/channel/UCRbVYPLvBSzEyrlCiRa4fZg

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
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

/* API code for channel */

/**
   * Sample JavaScript code for youtube.channels.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */
/*
function authenticate() {
  return gapi.auth2.getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
      .then(function() { console.log("Sign-in successful"); },
            function(err) { console.error("Error signing in", err); });
}
function loadClient() {
  gapi.client.setApiKey("SECRETKEY");
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi.client.youtube.channels.list({
    "part": [
      "snippet,contentDetails,statistics"
    ],
    "id": [
      "UCRbVYPLvBSzEyrlCiRa4fZg"
    ]
  })
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
            },
            function(err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function() {
  gapi.auth2.init({client_id: "gxtv-408810"});
});
*/

(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('OC1B4qLitG4-eOaFz');
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_7nimshf","contact_form",this)
          .then(function() {
              console.log('SUCCESS!');
              // let name = document.getElementById("user_name");
              // let email = document.getElementById("user_email");
              // let message = document.getElementById("message");
              // name.value =" ";
              // email.value =" ";
              // message.value=" ";
              document.getElementById("contact-form").style.display = "none";
              document.getElementById("form_reply").style.display = "block"
          }, function(error) {
              console.log('FAILED...', error);
          });
          //window.location.replace("{{ url_for('index') }}");
  });
  
}

let formBtn = document.getElementById("reset");
let formBtnLink = document.querySelector("#reset>a");

formBtn.addEventListener('mouseover', function run(){
  formBtn.style.backgroundColor = "rgb(4, 10, 94)";
  formBtnLink.style.color = "aliceblue";
  formBtnLink.style.backgroundColor = "rgb(4, 10, 94)";
  formBtnLink.style.textDecoration ="none";
})

formBtn.addEventListener('mouseout', function run(){
  formBtn.style.backgroundColor = "aliceblue";
  formBtnLink.style.color = "rgb(4, 10, 94)";
  formBtnLink.style.backgroundColor = "aliceblue";
  formBtnLink.style.textDecoration ="none";
})