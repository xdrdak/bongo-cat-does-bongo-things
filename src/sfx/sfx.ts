export class SFX {
  sfx: Array<HTMLAudioElement>;

  constructor(soundsUrls = []) {
    this.sfx = soundsUrls.map(url => new Audio(url));
  }

  play(index = 0) {
    if (this.sfx[index] && this.sfx[index].play) {
      this.sfx[index].currentTime = 0;
      this.sfx[index].play();
    }
  }
}
