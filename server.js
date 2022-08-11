const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());

const suits = {
  'wing gundam': {
    'pilotName': 'Heero Yuy',
    'gundamSuit': 'XXXG-01W Wing Gundam' 
  },
  'heavyarms': {
    'pilotName': 'Trowa Barton',
    'gundamSuit': 'XXXG-01H Heavyarms'
  },
  'deathscythe': {
    'pilotName': 'Duo Maxwell',
    'gundamSuit': 'XXXG-01D Deathscythe'
  },
  'sandrock': {
    'pilotName': 'Quatre Raberba Winner',
    'gundamSuit': 'XXXG-01SR Sandrock'
  },
  'shenlong': {
    'pilotName': 'Chang Wufei',
    'gundamSuit': 'XXXG-01S Shenlong'
  },
  'unknown': {
    'pilotName': 'unknown',
    'gundamSuit': 'unknown'
  }
}
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
  const suitName = req.params.name.toLowerCase();
  if ( suits[suitName] ) {
    res.json(suits[suitName])
  } else {
    res.json(suits['unknown'])
  }
  
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is now running on port ${PORT}!`);
})