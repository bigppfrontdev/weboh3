const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())


let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1
  },
  {
    name: 'Martti Tienari',
    number: '040-123456',
    id: 2
  },
  {
    name: 'Arto Järvinen',
    number: '040-123456',
    id: 3
  },
  {
    name: 'Lea Kutvonen',
    number:'040-123456',
    id: 4
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id )
  if ( person ){
   response.json(person)
  } else {
    response.status(404).end()
  }
})

app.post('/api/persons', (request, response) => {
  const id = Math.random(1000000000)
  const person = request.body
  console.log(note)
  person.id = id;

  response.json(note)
})

app.delete('/api/person/:id', (request, response) => {
  const id = Number(request.params.id)
  console.log(body)
  if (body.content === undefined || body.number === undefined || persons.name.includes(body.name)) {
    return response.status(400).json({error: 'content missing'})
  }

  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})