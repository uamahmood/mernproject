To install and run on localhost:

1. npm run start4

2. heroku -  auto builds and deploys with:
npm i && npm run build && npm start

3. Open browser and navigate to http://localhost:3000 (if not opened automatically)

4.  The server.js file connects to mongodb via mongoose.connect('mongodb://localhost:27017/demodb').
If a mongodb atlas uri is provided, the app can be run without first running mongodb in a seperate terminal.

