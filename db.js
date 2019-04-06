const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'mysql',
    database: 'tech',
    username: 'root',
    password: 'Ashima@123'
  })

  
const Student= db.define('student', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
        },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone_no:{
        type:Sequelize.STRING,
        allowNull:false
    },
    course_status: {

        type:Sequelize.BOOLEAN,
        allowNull:false
    }
    
  })

  const Teacher = db.define('teacher', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    } 
  })
  
  const Courses = db.define('courses', {
    course_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    course_fees: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  })

  Teacher.hasMany(Courses)
  Courses.belongsTo(Teacher)
  Student.hasMany(Courses)
  Courses.belongsTo(Student)


  module.exports = {
    db,
    Student, Teacher, Courses
  }

