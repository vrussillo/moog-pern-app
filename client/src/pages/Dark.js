import { useState, useEffect } from "react";
import { list } from "./imports/DarkImports";
import "../styles/Patchbooks.css";

const Dark = () => {
  const [id, setId] = useState([]);

  const getUser = async (id) => {
    try {
      const body = { id };
      const res = await fetch(`/templates/dark/${id}`, {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();
      setId(parseData.id);
      if (body !== parseData.id) {
        console.log(parseData.id);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // Audio Button

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
  // Audio Button

  return (
    <div className="patches-div">
      <img src="/templates/Dark/Dark-1.png" className="patch-img" alt="Cover" />
      <img
        src="/templates/Dark/Dark-2.png"
        className="patch-img"
        alt="Description"
      />
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-3.png"
          className="patch-img"
          alt="Disco Tom"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[0])}>
          Preview Sound
        </button>
      </div>

      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-4.png"
          className="patch-img"
          alt="Drone Tides"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[1])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-5.png"
          className="patch-img"
          alt="Evolution Arp"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[2])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-6.png"
          className="patch-img"
          alt="Fat Pluck Bass"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[3])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-7.png"
          className="patch-img"
          alt="Organ Lead"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[4])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-8.png"
          className="patch-img"
          alt="Short Flutey Arp"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[5])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-9.png"
          className="patch-img"
          alt="Soft Sizzle Lead"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[6])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-10.png"
          className="patch-img"
          alt="Silky Lead"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[7])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-11.png"
          className="patch-img"
          alt="Syncy Slink Lead"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[8])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-12.png"
          className="patch-img"
          alt="Wrecked Bass"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[9])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-13.png"
          className="patch-img"
          alt="Slowfire"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[10])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-14.png"
          className="patch-img"
          alt="Star-Weaver"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[11])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-15.png"
          className="patch-img"
          alt="Phases"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[12])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-16.png"
          className="patch-img"
          alt="The Dream"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[13])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-17.png"
          className="patch-img"
          alt="Cosmochordal"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[14])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-18.png"
          className="patch-img"
          alt="Disco Drone"
        />
        <button className="dark-btn-play" onClick={() => toggle(audios[15])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-19.png"
          className="patch-img"
          alt="End Page"
        />
      </div>
    </div>
  );
};

export default Dark;
