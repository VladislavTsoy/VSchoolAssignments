import React from 'react'
import Card from './Cards'

const App = () => {
    const styles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr'
    }

const players = [
    {
        name: 'Carson Wentz',
        description: 'Carson James Wentz is an American football quarterback for the Philadelphia Eagles of the National Football League.',
        imgUrl: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2573079.png&w=350&h=254',
        stats: 'http://www.nfl.com/player/carsonwentz/2555259/careerstats'
    },
    {
        name: 'Nick Foles',
        description: 'Nicholas Edward Foles is an American football quarterback for the Philadelphia Eagles of the National Football League. He played college football at Arizona and was drafted by the Eagles in the third round of the 2012 NFL Draft.',
        imgUrl: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14877.png',
        stats: 'http://www.nfl.com/player/nickfoles/2532842/careerstats'
    },
    {
        name: 'Zach Ertz',
        description: 'Zachary Adam Ertz is an American football tight end for the Philadelphia Eagles of the National Football League. He was drafted by the Eagles in the second round of the 2013 NFL draft.',
        imgUrl: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15835.png&w=350&h=254',
        stats: 'http://www.nfl.com/player/zachertz/2540158/careerstats'
    },
    {
        name: 'Malcolm Jenkins',
        description: 'Malcolm Jenkins is an American football safety for the Philadelphia Eagles of the National Football League.',
        imgUrl: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/12426.png&w=350&h=254',
        stats: 'http://www.nfl.com/player/malcolmjenkins/79848/careerstats'
    },
    {
        name: 'Brandon Graham',
        description: 'Brandon Lee Graham is an American football defensive end for the Philadelphia Eagles of the National Football League.',
        imgUrl: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/13239.png&w=350&h=254',
        stats: 'http://www.nfl.com/player/brandongraham/496788/careerstats'
    },
    {
        name: 'Jason Kelce',
        description: 'Jason Kelce is an American football center for the Philadelphia Eagles of the National Football League. He was drafted by the Eagles in the sixth round of the 2011 NFL Draft. He played college football at Cincinnati.',
        imgUrl: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14124.png&w=350&h=254',
        stats: 'http://www.nfl.com/player/jasonkelce/2495298/careerstats'
    },
    {
        name: 'Alshon Jeffrey',
        description: 'Alshon Jemell Jeffery is an American football wide receiver for the Philadelphia Eagles of the National Football League. He played college football at South Carolina, and was drafted by the Chicago Bears in the second round of the 2012 NFL Draft.',
        imgUrl: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14912.png&w=350&h=254',
        stats: 'http://www.nfl.com/player/alshonjeffery/2533039/careerstats'
    },
    {
        name: 'Jason Peters',
        description: 'Jason Raynard Peters is an American football offensive tackle for the Philadelphia Eagles of the National Football League. He was signed by the Buffalo Bills as an undrafted free agent in 2004, originally as a tight end.',
        imgUrl: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/6012.png&w=350&h=254',
        stats: 'http://www.nfl.com/player/jasonpeters/2505827/careerstats'
    },

]

const playerDisplay = players.map((player, i) => {
    return <Card key={player.name + i}
                name={player.name}
                description={player.description}
                image={player.imgUrl}
                source={player.stats}/>
})



    return (
        <div style={styles}>
            {playerDisplay}
        </div>
    )
}

export default App