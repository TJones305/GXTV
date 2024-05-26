/* API code for channel */

console.log("GXTV Data");



//       // 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement('script');

//       tag.src = "https://www.youtube.com/iframe_api";
//       var firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//       // 3. This function creates an <iframe> (and YouTube player)
//       //    after the API code downloads.
//       var player;
//       function onYouTubeIframeAPIReady() {
//         player = new YT.Player('player', {
//           height: '650',
//           width: '800',
//           videoId: 'M7lc1UVf-VE',
//           playerVars: {
//             'playsinline': 2
//           },
//           events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//           }
//         });
//       }

//      //https://www.youtube.com/channel/UCRbVYPLvBSzEyrlCiRa4fZg

//       // 4. The API will call this function when the video player is ready.
//       function onPlayerReady(event) {
//         event.target.playVideo();
//       }

//       // 5. The API calls this function when the player's state changes.
//       //    The function indicates that when playing a video (state=1),
//       //    the player should play for six seconds and then stop.
//       var done = false;
//       function onPlayerStateChange(event) {
//         if (event.data == YT.PlayerState.PLAYING && !done) {
//           setTimeout(stopVideo, 6000);
//           done = true;
//         }
//       }
//       function stopVideo() {
//         player.stopVideo();
//       }

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