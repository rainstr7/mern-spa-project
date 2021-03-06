<b>M</b> - MongoDB / <b>E</b> - Express / <b>R</b> - React / <b>N</b> - Node

<code>npm init <br/></code>
<code>npm install express mongoose</code><br/>
<code>npm install -D nodemon concurrently</code></br>

<a href="https://www.npmjs.com/package/express">Express</a> - fast, unopinionated, minimalist web framework for node.</br>
<a href="https://www.npmjs.com/package/nodemon">Nodemon</a> is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. <br />
<a href="https://www.npmjs.com/package/mongoose">Mongoose</a> is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.</br>
<a href="https://www.npmjs.com/package/concurrently">Concurrently</a> is Run multiple commands concurrently. Like npm run watch-js & npm run watch-less but better.

<code>npm install config <br></code>
<a href="https://www.npmjs.com/package/config">Config</a> organizes hierarchical configurations for your app deployments.

Example:<br>
<code>./config/[default.json, production.json]</code><br>
<code>import</code><br />
<code>const config = require('config');</code><br />
<code>const PORT = config.get('port') || 5000;</code><br />

<code>npm install bcryptjs</code><br />
Optimized <a href="https://www.npmjs.com/package/bcryptjs">bcrypt</a> in JavaScript with zero dependencies. Compatible to the C++ bcrypt binding on node.js and also working in the browser.

<code>npm install --save express-validator</code></br>
<a href="https://express-validator.github.io/docs/">express-validator</a> is a set of express.js middlewares that wraps validator.js validator and sanitizer functions.

<code>npm install jsonwebtoken</code></br>
<a href="https://www.npmjs.com/package/jsonwebtoken">An implementation of JSON Web Tokens.</a>

Initialization React in directory "client"</br>
<code>npx create-react-app [client]</code></br>
<a href="https://materializecss.com/">UI styles - Materialize</a>

add new script to root package. json</br>
<code>"client": "npm run start ---prefix client"</code></br>
<code>"dev": "concurrently \"npm run server\" \"npm run client\""</code>

add new dependency to React package.json</br>
<code>npm install materialize-css@next</code></br>
<a href="https://materializecss.com/">A modern responsive front-end framewogit commite 0rk based on Material Design</a></br>

<code>npm install react-router-dom</code></br>
<a href="https://www.npmjs.com/package/react-router-dom">react-router-dom</a> - DOM bindings for React Router.

add new option to React package.json</br>
"proxy": "http://localhost:5000"

<code>npm install shordid</code></br>
<a href="https://www.npmjs.com/package/shortid">ShortId</a> creates amazingly short non-sequential url-friendly unique ids. Perfect for url shorteners, MongoDB and Redis ids, and any other id users might see.

<code>npm install --save-dev cross-env</code></br>
<a href="https://www.npmjs.com/package/cross-env">cross-env</a> - run scripts that set and use environment variables across platforms

<b>Setting server</b><br/>
https://vscale.io/<br/>
add domain<br/>
add server Ubuntu<br/>
add ssh<br/>
connect<br/>
sudo apt update<br/>
sudo apt -y upgrade<br/>
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates<br/>
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -<br/>
sudo apt install git<br/>
sudo apt -y install nodejs<br/>
git clone [repository link]<br/>
npm install<br/>
npm run client:install<br/>
npm run client:build<br/>
npm run start<br/>

<b>On server install</b></br>
<code>sudo npm install -g pm2</code></br>
<code>pm2 start npm -- start</code></br>
<code>pm2 stop [id process]</code></br>
<a href="https://www.npmjs.com/package/pm2">PM2</a> is a production process manager for Node.js applications with a built-in load balancer. It allows you to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks.</br>




