/* API code for channel */

console.log("GXTV Data");

fetch("GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCRbVYPLvBSzEyrlCiRa4fZg&maxResults=10&order=date&key= HTTP/1.1")
.then((data)=>{
  console.log(data.json())
})




//API Call YouTube
const CLIENT_ID = "?";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const authorizeButton = document.getElementById('authorize-button');
const signoutButton = document.getElementById('signout-button');
const content = document.getElementById('content');
const channelForm = document.getElementById('channel-form');
const channelInput = document.getElementById('channel-input');
const videoContainer = document.getElementById('vid-container');
const defaultChannel = 'GXTV2024';
// Load auth2 library
function handleClientLoad(){
  gapi.load('client:auth2', initClient);
}
// Init API client library and set up sign in listeners
function initClient() {
  gapi.client.init({
    discoveryDocs: DISCOVERY_DOCS,
    clientId: CLIENT_ID,
    scope: SCOPES
  }).then(() => {
    // Listen for state changes
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    // Handle initial sign in state changes
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  });
}

function updateSigninStatus(isSignedIn) {
  if(isSignedIn){
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    content.style.display = 'block';
    videoContainer.style.display = 'block';
    getChannel(defaultChannel);
  } else {
    authorizeButton.style.display = ' block';
    signoutButton.style.display = 'none';
    content.style.display = 'none';
    videoContainer.style.display = 'none';
  }
}
// Handle login
function handleAuthClick(event){
  gapi.auth2.getAuthInstance().signIn();
}
// Handle sign out
function handleSignoutClick(event){
  gapi.auth2.getAuthInstance().signIn();
}

//Display Channel Data to User
function showChannelData(data){
  const channelData = document.getElementById("channel-data");
  channelData.innerHTML = data;
}


// Get channel from API
function getChannel(channel){
  gapi.client.youtube.channels.list({
    'part':'snippent.contentDetails.statistics',
    'forUsername': channel
  }).then(function(response) {
    console.log(response);
    const channel = response.result.items[0];
    const output = `
    <ul class="collection">
      <li class="collection-item">Title: ${channel.snippet.title} </li> 
      <li class="collection-item">ID: ${channel.id} </li> 
      <li class="collection-item">Views: ${channel.statistics.subscriberCount} </li> 
      <li class="collection-item">Videos: ${channel.statistics.videoCount} </li> 
    </ul>
    <p>${channel.snippet.description}</p>
    <hr>
    <a class="btn grey darken-2" target="_blank" href="https://youtube.com/${
      channel.snippet.customUrl
    }">Visit Channel</a>
    `;
    showChannelData(output);

    const playlistId = channel.contentDetails.relatedPlaylists.uploads;
    requestVideoPlaylist(playlistId)
  })
  .catch(err => alert('No Channel By That Name'));
}

//
function requestVideoPlaylist(playlistId){
  const requestOptions = {
    playlistId: playlistId,
    part:'snippet',
    maxResults: 10
  }

  const request = gapi.client.youtube.playlistItems.list(requestOptions);

  request.execute(response=> {
    console.log(response);
    const playListItems = response.result.items;
    if(playListItems){
      let output = '<h4 class="center-align">Latest Videos</h4>';
      playListItems.forEach(item => {
        const videoId = item.snippet.resourceId.videoId;

        output += `
        <div class="col s3"> 
          <iframe width="100%" height="auto" src="https://www.youtube.cpm/embed${videoId}"
          frameborder="0" allow=" autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        `
      });

      videoContainer.innerHTML = output;
    } else {
      videoContainer.innerHTML = "No Uploaded Videos";
    }
  })
}

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