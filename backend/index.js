//connect to db and start server
import app from "../server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config();

const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

//connect to db
MongoClient.connect(
  process.env.RESTEVIEWS_DDB_URI,
  {
    poolSize: 50,
    wtimeout: 2500,
    useNewUrlParse: true
  }
)
.catch(err => {
  console.error(err.stack)
  process.exit(1)
})
.then(async client =>{
  app.listen(port, () => {
  console.log(`listening on port ${port}`)
  })
})

