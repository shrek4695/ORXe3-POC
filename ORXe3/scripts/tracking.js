const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
const MongoClient = require('mongodb').MongoClient;

const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.post('/tracker', (req, res) => {
    console.log("hi");

    const uri = "mongodb+srv://sa:test123@cluster0-cnbxu.mongodb.net/test?retryWrites=true";
    // const client = new MongoClient(uri, { useNewUrlParser: true });
    // client.connect(err => {
    //     const collection = client.db("Hotel").collection("ORXe");
    //     // perform actions on the collection object
    //     client.close();
    // });
    MongoClient.connect(uri, { useNewUrlParser: true } , (err, client) => {
        const collection = client.db("ORXe").collection("ORXeAnalytics");
        console.log("connected");
        var ins = req.body;
        collection.insertOne(ins, function(err,res){
            console.log('inserted');
        })
        client.close();
    })
    console.log('response of tracker', req.body);
    res.send(req.body);
});

app.get('/', (req, res) => {
    res.send('App Works')
});

app.listen(3000, () => console.log('Listening on port 3000'))