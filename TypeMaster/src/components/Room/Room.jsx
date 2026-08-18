import "./Room.css";
const Room = ({
  roomCode,
  players,
  isHost,
  onStartGame,
  onLeaveRoom,
}) => {
  return (
    <div className="room">
      <div className="room-header">
        <h1>Typing Race</h1>

        <div>
          Room Code: <strong>{roomCode}</strong>
        </div>
      </div>

      <div className="players">
        <h2>Players ({players.length})</h2>

        {players.map((player) => (
          <div key={player.id} className="player">
            <span>{player.username}</span>

            {player.isHost && (
              <span>Host</span>
            )}

            {player.isReady && (
              <span>Ready</span>
            )}
          </div>
        ))}
      </div>

      <div className="room-actions">
        {isHost && (
          <button
            onClick={onStartGame}
            disabled={players.length < 2}
          >
            Start Game
          </button>
        )}

        <button onClick={onLeaveRoom}>
          Leave Room
        </button>
      </div>
    </div>
  );
};

export default Room;