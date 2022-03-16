import "../styles/Patchbooks.css";
import { list } from "./imports/MikeDeanImports";

function MikeDean() {
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
      <img
        src="/templates/MikeDean/MikeDean-1.png"
        className="patch-img"
        alt="Cover"
      />
      <img
        src="/templates/MikeDean/MikeDean-2.png"
        className="patch-img"
        alt="Description"
      />
      <div className="patch-div">
        <img
          src="/templates/MikeDean/MikeDean-3.png"
          className="patch-img"
          alt="Snare"
        />
        <button className="md-btn-play" onClick={() => toggle(audios[0])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/MikeDean/MikeDean-4.png"
          className="patch-img"
          alt="Filter Resonance Pluck"
        />
        <button className="md-btn-play" onClick={() => toggle(audios[1])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/MikeDean/MikeDean-5.png"
          className="patch-img"
          alt="909 Kick"
        />
        <button className="md-btn-play" onClick={() => toggle(audios[2])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/MikeDean/MikeDean-6.png"
          className="patch-img"
          alt="Feedback Overload"
        />
        <button className="md-btn-play" onClick={() => toggle(audios[3])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/MikeDean/MikeDean-7.png"
          className="patch-img"
          alt="Lead Synth"
        />
        <button className="md-btn-play" onClick={() => toggle(audios[4])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/MikeDean/MikeDean-8.png"
          className="patch-img"
          alt="Windy Flute"
        />
        <button className="md-btn-play" onClick={() => toggle(audios[5])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/MikeDean/MikeDean-9.png"
          className="patch-img"
          alt="End Page"
        />
      </div>
    </div>
  );
}

export default MikeDean;
