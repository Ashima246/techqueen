const express = require('express')
const { db } = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'))

const routes = {
  student: require('./routes/student'),
  teacher: require('./routes/teacher.js'),
  courses: require('./routes/courses'),
}

app.use('/student', routes.student)
app.use('/teacher', routes.teacher)
app.use('/courses', routes.courses)

db.sync({ alter: true })
  .then(() => {
    app.listen(9876, () => {
      console.log('Server started on http://localhost:9876')
    })
  })
  .catch(console.error)