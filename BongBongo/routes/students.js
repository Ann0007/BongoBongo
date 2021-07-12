
get = (req, res, next) => {
  let query;
  console.log(req.query.name);
  if (req.query.name) {
    query = req.models.Student.findOne({
      "Students.name": req.query.name
    });
  } else {
    query = req.models.Student.find();
  };
  query.exec().then((student) => {
    return res.send(student);
  }).catch((error) => next(error));
};

getById = (req, res, next) => {
  req.models.Student.findById(req.params.id).then((student) => {
    return res.send(student);
  }).catch((error) => next(error));
};

post = (req, res, next) => {
  req.models.Student.create(
    {
    name: req.body.name,
    email: req.body.email,
    address: {
      street: req.body.address.street,
      city: req.body.address.city,
      zipcode: req.body.address.zipcode,
      }
    }
  ).then((student) => {
    console.log(student)
    return res.status(201).send(student);
  }).catch((error) => next(error));
};

put = (req, res, next) => {
  req.models.Student.updateOne({
    _id: req.params.id
  }, {
    name: req.body.name,
    email: req.body.email,
    address: {
      street: req.body.address.street,
      zipcode: req.body.address.zipcode,
      city: req.body.address.city,
    },
    }, {
      new: true,
      upsert: true,
      runvalidators: true,
    }).then((status) => {
      console.log("status: ", status);
      if (status.upserted)
        res.status(201);
      else if (status.nModified)
        res.status(200);
      else
        res.status(204);
      res.send();
    }).catch((error) => next(error));
};

deleteById = (req, res, next) => {
  req.models.Student.findByIdAndDelete(req.params.id).then((deleted) => {
    if (deleted)
      return res.send(deleted).status(200);
    res.sendStatus(204);
  }).catch((error) => next(error));
};

module.exports = {
  get:get,
  post:post,
  put:put,
  getById:getById,
  deleteById:deleteById,
};



// get = (req, res, next) => {
//     var query;
//   if(req.query.name){
//     query = req.models.name.find({name: req.query.name})
//   }
//   else
//   {
//     query = req.models.Student.find()
//   }
  
//     query.exec().then((students) => {
//         return res.send(students);
//       }).catch((error) => next(error))
//     }
  
//   post = (req, res, next) => {
//     req.models.Student.create({
  
//       name: req.body.name,
//       email: req.body.email,
//       street: req.body.street,
//       zipcode: req.body.zipcode,
//       city: req.body.city
      
//     }).then((student) => {
//       return res.status(201).send(student)
//     }).catch((error) => next(error))
//   }
  
//   getById = (req, res, next) => {
//     req.models.Student.findById(req.params.id).then((student) => {
//       return res.send(student);
//     }).catch((error) => next(error))
//   }
  
//   deleteById = (req, res, next) => {
//     req.models.Student.findByIdAndDelete(req.params.id).then((deleted)=> {
//       if (deleted)
//         return res.send(deleted).status(200)
//       res.sendStatus(204)
//     }).catch((error) => next(error))
//   }
  
//   put = (req, res, next) => {
//     req.models.Student.updateOne({_id: req.params.id},
//       {
//         name: req.body.name,
//         email: req.body.email,
//         street: req.body.street,
//         zipcode: req.body.zipcode,
//         city: req.body.city
//     },{
//       new: true,
//       upsert: true,
//       runvalidators: true,
//     }).then((status) => {
//       console.log("status: ", status)
//       if (status.upserted) {
//         res.status(201)
//       } else if (status.nModified) {
//         res.status(200)
//       } else {
//         res.status(204)
//       }
//       req.models.Student.findById(req.params.id).then((student) => {
//         res.send(student)
//       })
//     }).catch((error) => next(error))
//   }
  
//   module.exports = {
//     get,
//     post,
//     getById,
//     deleteById,
//     put,
//   }