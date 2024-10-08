import { useEffect, useState } from "react";
import { useAudio } from "../FileContext";

/* eslint-disable react/prop-types */
const ControlPanel = ({ wavesurferRef }) => {
  const { zoom, setZoom, speed, setSpeed } = useAudio();
  const [volume, setVolume] = useState(0.4);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleVolume = (e) => {
    setVolume(e.target.valueAsNumber);
  };

  useEffect(() => {
    if (wavesurferRef.current) {
      wavesurferRef.current.setVolume(volume);
    }
  }, [volume, wavesurferRef]);

  return (
    <div className="mt-10 flex items-center justify-around flex-wrap flex-col md:flex-row">
      <div className="mb-10 md:m-0">
        <button
          onClick={() => {
            wavesurferRef.current.playPause();
            setIsPlaying(!isPlaying);
          }}
          className="btn btn-success"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      <div className="flex  items-center">
        <label className="w-40" htmlFor="volumeInput">
          Volume
        </label>
        <input
          type="range"
          id="volumeInput"
          min="0"
          max="1"
          value={volume}
          step="0.1"
          onChange={(e) => handleVolume(e)}
          className="range range-xs"
        />
      </div>
      <div className="flex  items-center">
        <label className="w-40" htmlFor="zoom">
          Zoom
        </label>
        <input
          type="range"
          id="zoom"
          min={"0"}
          max={"1000"}
          value={zoom}
          onChange={(e) => setZoom(e.target.valueAsNumber)}
          className="range range-xs"
        />
      </div>
      <div className="flex items-center">
        <label className="w-40" htmlFor="speed">
          Playback Rate
        </label>
        <input
          type="range"
          id="speed"
          min={0.5}
          step={0.5}
          max={4}
          value={speed}
          onChange={(e) => setSpeed(e.target.valueAsNumber)}
          className="range range-xs"
        />
      </div>
    </div>
  );
};

export default ControlPanel;
