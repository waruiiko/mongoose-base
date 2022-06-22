module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const HotSpot = require('../../model/HotSpot')
    router.post('/api/create', async (req, res) => {
        console.log('fine'+req.query)
        const model = await HotSpot.create(req.query)
        res.send(model)
    })
    router.get('/api', async (req, res) => {
        res.send('Hello World!')
    })
    router.get('/api/get', async (req, res) => {
        const query = req.query
        res.send({
            status: 200,
            msg: 'get',
            data: query
        })
    })
    //add
    router.get('/api/create', async (req, res) => {
        console.log('getCreate'+req.query)
        const raw = await HotSpot.create(req.query)
        // console.log(res)
        res.send({
            status: 200,
            msg: 'get',
            data: raw
        })
    });
    //find
    router.get('/api/find', async (req, res) => {
        // const raw = await HotSpot.find({ title: 'hello create!!' })
        const raw = await HotSpot.find(req.query)
        res.send(raw)
        console.log(req.query)
    });
    app.use('/', router)
}
