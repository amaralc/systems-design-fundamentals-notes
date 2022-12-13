const express = require('express');
const fs = require('fs');

const DATA_DIR = 'algo-expert-db-data';

const app = express();
app.use(express.json());

const hashTable = {};

app.post('/memory/:key', (req, res) => {
  const key = req.params.key;
  hashTable[key] = req.body.data;
  res.send(hashTable[key]);
})

app.get('/memory/:key', (req, res) => {
  const key = req.params.key;
  if(key in hashTable){
    res.json(hashTable[key]);
    return;
  }
  res.send('null');
});

app.post('/disk/:key', (req, res) => {
  const key = req.params.key;
  const destinationFile = `${DATA_DIR}/${key}`;
  fs.writeFileSync(destinationFile, req.body.data);
  const data = fs.readFileSync(destinationFile);
  res.send(data);
});

app.get('/disk/:key', (req, res) => {
  const key = req.params.key;
  const destinationFile = `${DATA_DIR}/${key}`;
  try {
    const data = fs.readFileSync(destinationFile);
    res.send(data);
  } catch (e) {
    res.send('null');
  }
});

app.listen(3001, () => {
  console.log('Listening on port 3001!');
})