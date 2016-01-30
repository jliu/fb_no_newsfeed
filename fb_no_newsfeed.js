function facebookNoNewsfeed() {
  var toggleNewsfeed = document.createElement('button');
  toggleNewsfeed.id = 'toggleNewsfeedButton';
  toggleNewsfeed.innerText = 'Show Newsfeed'; 
  toggleNewsfeed.className = '_1mf7 _4jy0 _4jy3 _4jy1 _51sy';
  document.getElementById('contentCol').insertBefore(toggleNewsfeed, document.getElementById('rightCol'));
  toggleNewsfeed.addEventListener('click', function() {
    toggleNewsfeed.innerText = contentArea.classList.toggle('really-show-it') ?
      'Hide Newsfeed' : 'Show Newsfeed';
  });
}

facebookNoNewsfeed();
