const db = require('../config/connection');
const { Profile, Activity, Food,ClassRoom,Teacher } = require('../models');
db.once('open', async () => {
    await Teacher.deleteMany();
    
  const Teachers = await Teacher.insertMany([
      {
        "first_name" : "Amy",
        "last_name" : "Smith",
        "username" : "Amy Smith",
        "email" : "amysmith@dev.com",
        "password" :"password03",
        "is_main" : false,
        "is_active" : true,
        "classRooms" :ClassRoom[0]._id
        },
        {
            "first_name" : "Amy",
            "last_name" : "Smith",
            "username" : "Alex",
            "email" : "alex@dev.com",
            "password" :"password02",
            "is_main" : false,
            "is_active" : true,
            "classRooms" :ClassRoom[0]._id
           
          
          }
    ])
    console.log('teacher seeded');

  process.exit();
});