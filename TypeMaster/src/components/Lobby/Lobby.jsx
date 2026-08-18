import { useState } from "react";
import "./Lobby.css";

const Lobby = ({ onCreateRoom, onJoinRoom }) => {
  const [roomCode, setRoomCode] = useState("");

  const handleJoinRoom = () => {
    const code = roomCode.trim().toUpperCase();

    if (!code) {
      return;
    }

    onJoinRoom(code);
  };

  return (
    <div className="lobby">

      {/* Decorative background elements */}
      <div className="lobby-glow lobby-glow-left"></div>
      <div className="lobby-glow lobby-glow-right"></div>

      <div className="lobby-content">

        {/* Logo */}
        <div className="brand-logo">
          <div className="keyboard-icon">
            ⌨
          </div>

          <div className="brand-crown">
            ♛
          </div>
        </div>

        {/* Title */}
        <h1 className="brand-title">
          <span>Type</span>
          <span>Master</span>
        </h1>

        {/* Decorative divider */}
        <div className="title-divider">
          <span></span>
          <b>ϟ</b>
          <span></span>
        </div>

        {/* Subtitle */}
        <p className="brand-subtitle">
          RACE YOUR FRIENDS. TYPE FASTER. WIN.
        </p>

        {/* Create Room */}
        <div
          className="create-room-card"
          onClick={onCreateRoom}
        >
          <div className="create-room-icon">
            <span>♟</span>
            <span>+</span>
          </div>

          <div className="create-room-content">
            <h2>Create Room</h2>
            <p>Be the host and start the race</p>
          </div>
        </div>

        {/* Join Room */}
        <div className="join-room-card">

          <div className="join-room-title">
            <span></span>
            <h2>Join a Room</h2>
            <span></span>
          </div>

          <div className="join-room-form">

            <div className="room-input-wrapper">
              <span className="room-hash">#</span>

              <input
                type="text"
                placeholder="Enter Room Code"
                value={roomCode}
                onChange={(e) =>
                  setRoomCode(e.target.value.toUpperCase())
                }
                maxLength={6}
              />
            </div>

            <button
              className="join-room-button"
              onClick={handleJoinRoom}
            >
              <span>Join Room</span>
              <span className="join-arrow">›</span>
            </button>

          </div>

          <p className="room-help">
            <span>ⓘ</span>
            Enter the 6-digit room code shared by your friend
          </p>

        </div>

        {/* Footer */}
        <div className="lobby-footer">
          <span>🏆</span>
          Fastest fingers. Greatest fun.
        </div>

      </div>
    </div>
  );
};

export default Lobby;