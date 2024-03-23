import Player from "./player";
import Players from "./players";

const PlayersList = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '20px',
  };

  return (
    <>
    {/* Return the list of players */}
    <div style={containerStyle}> 
        {Players.map((player) => (
          <Player key={player.id} {...player}/>
        ))}
      </div>
    </>
  );
};

export default PlayersList;