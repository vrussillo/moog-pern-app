import "../styles/Patchbooks.css";
import { list } from "./imports/LBDImports";

function LBD() {
  const audios = list.map((audio) => new Audio(audio));

  const getCurrentAudio = () => {
    return audios.find((audio) => false === audio.paused);
  };

  const toggle = (nextAudio) => {
    const currentAudio = getCurrentAudio();

    if (currentAudio && currentAudio !== nextAudio) {
      currentAudio.pause();
    }

    nextAudio.paused ? nextAudio.play() : nextAudio.pause();
  };

  return (
    <div className="patches-div">
      <img src="/templates/LBD/LBD-1.png" className="patch-img" alt="Cover" />
      <img
        src="/templates/LBD/LBD-2.png"
        className="patch-img"
        alt="Description"
      />
      <div className="patch-div">
        <img
          src="/templates/LBD/LBD-3.png"
          className="patch-img"
          alt="Chocolate Factory"
        />
        <button className="lbd-btn-play" onClick={() => toggle(audios[0])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/LBD/LBD-4.png"
          className="patch-img"
          alt="1976 Ensemble"
        />
        <button className="lbd-btn-play" onClick={() => toggle(audios[1])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/LBD/LBD-5.png"
          className="patch-img"
          alt="Summmer Of 76"
        />
        <button className="lbd-btn-play" onClick={() => toggle(audios[2])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/LBD/LBD-6.png"
          className="patch-img"
          alt="Des Morts"
        />
        <button className="lbd-btn-play" onClick={() => toggle(audios[3])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/LBD/LBD-7.png"
          className="patch-img"
          alt="Power Trio"
        />
        <button className="lbd-btn-play" onClick={() => toggle(audios[4])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/LBD/LBD-8.png"
          className="patch-img"
          alt="Space Phaser Solo"
        />
        <button className="lbd-btn-play" onClick={() => toggle(audios[5])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/LBD/LBD-9.png"
          className="patch-img"
          alt="Hunter Sequence"
        />
        <button className="lbd-btn-play" onClick={() => toggle(audios[6])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/LBD/LBD-10.png"
          className="patch-img"
          alt="After"
        />
        <button className="lbd-btn-play" onClick={() => toggle(audios[7])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/LBD/LBD-11.png"
          className="patch-img"
          alt="Bass W Auto Drums"
        />
        <button className="lbd-btn-play" onClick={() => toggle(audios[8])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/LBD/LBD-12.png"
          className="patch-img"
          alt="1981 SEQ"
        />
        <button className="lbd-btn-play" onClick={() => toggle(audios[9])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/LBD/LBD-13.png"
          className="patch-img"
          alt="Electronic Forests"
        />
        <button className="lbd-btn-play" onClick={() => toggle(audios[10])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/LBD/LBD-14.png"
          className="patch-img"
          alt="Nite Shift"
        />
        <button className="lbd-btn-play" onClick={() => toggle(audios[11])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/LBD/LBD-15.png"
          className="patch-img"
          alt="End Page"
        />
      </div>
    </div>
  );
}

export default LBD;
