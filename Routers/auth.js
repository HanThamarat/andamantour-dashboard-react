const express = require('express');
const router = express.Router();
const getConn = require('../configs/connect');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET

router.post('/createAgent', async (req, res) => {
    try{
    const { fullname, email, password } = req.body
    const hashPassword = await bcrypt.hashSync(password, 10)
        const [results] = await getConn.query('INSERT INTO Agents(agentsName,agnetsEmail,agentsPassword) VALUES(?,?,?)',
        [ fullname, email, hashPassword ]);
        return res.status(201).json({message: 'create user data successfully', body: results});
    } catch(err) {
        return res.status(500).send(`err server : ${err}`);
    }
})

router.post('/signIn', async (req, res) => {
    try{
        const { email, password } = req.body;
        const [results] = await getConn.query("SELECT * FROM Agents WHERE LOWER(agnetsEmail) = LOWER(?)", email);
        const userData = results[0];
        const match = await bcrypt.compareSync(password, userData.agentsPassword);
        console.log(match);
        if(!match){
            res.status(400).json({
                message: "login faild (wrong email, password)"
            });
            return false
        }

        //token jwt token
        const token = await jwt.sign({ email, role: 0 }, secret, { expiresIn: '1h' })

        return res.status(200).json({message: 'login successfully', body: { data: results, token: token }});
    } catch(err) {
        return res.status(401).send(err)
    }
})

router.get('/agents', async (req, res) => {
    try {
        const authHeader = req.headers['authorization']
        let authToken = ''
        if(authHeader) {
            authToken = authHeader.split(' ')[1]
        }
       
        const agent = jwt.verify(authToken, secret);
        console.log('agent', agent)

        const [recheckAgent] = await getConn.query('SELECT * FROM Agents WHERE LOWER(agnetsEmail) = LOWER(?)', [ agent.email ])

        if(!recheckAgent[0]){
            throw { message: 'user not found' }
        }

        return res.status(200).json({
            user: recheckAgent[0]
        })
    } catch (error) {
        return res.status(403).json({
            message: 'authentication fiald',
            error
        })
    }
})

module.exports = router