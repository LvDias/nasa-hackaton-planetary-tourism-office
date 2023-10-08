import express from 'express'
const app = express()
const port = 3001

import api from './api/index'

import 'dotenv/config'

import cors from 'cors'

app.use(cors())
app.use('/', api)

app.listen(port, () => console.log(`Server running on port ${port}`))
