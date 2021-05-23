<b>M</b> - MongoDB / <b>E</b> - Express / <b>R</b> - React / <b>N</b> - Node

<code>npm init <br/></code>
<code>npm install express mongoose <br/> </code>

<a href="https://www.npmjs.com/package/nodemon">Nodemon</a> is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. <br />
<a href="https://www.npmjs.com/package/mongoose">Mongoose</a> is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.




<code>npm install config <br></code>

<a href="https://www.npmjs.com/package/config">Config</a> organizes hierarchical configurations for your app deployments. <code>./config/[default.json, production.json]</code><br>

Example:<br>
<code>const config = require('config');</code><br />
<code>const PORT = config.get('port') || 5000;</code>

