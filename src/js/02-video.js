import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

const playerCurrentTime = 'videoplayer-current-time';
const lastTime = localStorage.getItem(playerCurrentTime);

const onPlay = function (timeupdate) {
  localStorage.setItem(playerCurrentTime, timeupdate.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(lastTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
