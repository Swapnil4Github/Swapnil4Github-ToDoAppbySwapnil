const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cron =require('node-cron')

//models
const TodoTask = require("./models/TodoTask");

dotenv.config();


app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

//connection to db
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, (err) => {
    if(err) {
        console.log(err);
      }
      else{
          console.log("Connected to db!");
      }
app.listen(process.env.PORT || 3000, () => console.log("Server Up and running"));
});



//view engine configuration
app.set("view engine", "ejs");

// GET METHOD
app.get("/", (req, res) => {
    TodoTask.find({}, (err, tasks) => {
    res.render("todo.ejs", { todoTasks: tasks });
    });
    });

//POST METHOD
app.post('/',async (req, res) => {
    var dt = new Date();
    //adding task duration in current time
    dt.setMinutes( dt.getMinutes() + parseInt(req.body.duration) );
    const todoTask = new TodoTask({
    content: req.body.content,
    description: req.body.description,
    creator: req.body.creator,
    duration: req.body.duration,
    expireAt : dt,
    });
    try {
    await todoTask.save();
    res.redirect("/");
    } catch (err) {
        console.log(err)
    res.redirect("/");
    }
    });

//UPDATE
app
.route("/edit/:id")
.get((req, res) => {
const id = req.params.id;
TodoTask.find({}, (err, tasks) => {
res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
})
});

//update POST
app.route('/edit/:id')
.post((req, res) => {
const id = req.params.id;
const con=req.body
var dt = new Date();
    dt.setMinutes( dt.getMinutes() + parseInt(req.body.duration) );
    TodoTask.findById(id).then(task=>{
       return task.update({
            content: req.body.content,
            description: req.body.description,
            creator: req.body.creator,
            duration: req.body.duration,
            expireAt : dt
        })
    }).then(result=>{
        console.log("updated")
        return res.redirect("/");

    }).catch((err)=>{
        console.log(err)
        return res.send(err);
    });
});

//DELETE
app.route("/remove/:id").get((req, res) => {
    const id = req.params.id;
    TodoTask.findByIdAndRemove(id, err => {
    if (err) {

        console.log(err)
        return res.send(err)
    }
    res.redirect("/");
    });
    });

    //crone job that will run every second to check if there is  any task
    //whose duration is ended if yes then delete that task
    var job = cron.schedule('* * * * * *', function() {
        TodoTask.find({}).then(tasks=>{
            if(tasks){
                tasks.forEach(task=>{
                    //checking if task duration reach the current time 
                    if(task.expireAt<Date.now()){
                        task.remove().then(()=>{
                            console.log("task deleted")
                        })
                    }
                })
            }
        }).catch(err=>{
            console.log("error while deleting the task")
        })
      });
