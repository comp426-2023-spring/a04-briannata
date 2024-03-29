#!/usr/bin/env node
import { rps, rpsls } from "./lib/rpsls.js"
import express from "express"
import minimist from "minimist"

const app = express()
const port = minimist(process.argv.slice(2)).port || 5000

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/app', (req, res) => {
    res.status(200).send('200 OK');
})

app.get('/app/rps', (req, res) => {
    res.status(200).send(rps());
})

app.get('/app/rpsls', (req, res) => {
    res.status(200).send(rpsls());
})

app.get('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.query.shot));
})

app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.query.shot));
})

app.get('/app/rps/play/:arg', (req, res) => {
    res.status(200).send(rps(req.params.arg));
})

app.get('/app/rpsls/play/:arg', (req, res) => {
    res.status(200).send(rpsls(req.params.arg));
})

app.post('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.body.shot));
})

app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.body.shot));
})

app.get('*', function(req, res){
    res.status(404).send('404 NOT FOUND');
  });

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})