This react application uses React 16.8.0 and is connected to node.js backend through appollo client and graphql.
Building a web application with a React front-end, Node.js for the backend, GraphQL for API interactions, and Mongoose for database access is a choice that was made based on a number of reasons.

React, as a modern and widely adopted JavaScript library for building user interfaces, offers a component-based structure that enhances code reusability and maintainability. React's virtual DOM and component architecture enable the creation of highly responsive and interactive user interfaces. This is essential for delivering a modern user experience.

Node.js is my favourite because it is known for its non-blocking, event-driven architecture, making it well-suited for applications that require high concurrency and speed. Using JavaScript on both the front-end and back-end reduces context switching for me, increasing productivity.

GraphQL allows clients to request only the data they need, reducing over-fetching and under-fetching of data. This leads to more efficient data transfer, which is crucial for mobile clients with limited bandwidth.

I always choose MongoDB as my database, Mongoose provides an elegant and intuitive way to interact with the database through schema modeling and validation. It simplifies data manipulation and ensures data consistency.

## Quick start

#Node.js backend

1.  Clone the project's zip
2.  Make sure you have node.js installed
3.  Type `npm install` in terminal/console in the source folder where `package.json` is located
4.  Run in terminal `npm start`.
    This will run the node.js backend project in http://localhost:5000

#react.js frontend

1.  navigate to "client" folder in from root directory by typing `cd client`
2.  `npm install` in terminal/console
3.  Run in terminal `npm start`.
4.  this will start the project and open in the browser (default is http://localhost:3000)
    Please note that the front end is connected to the node.js that runs in http://localhost:5000. Please adjust this in the /client/src/ApolloProvide.js file if your node.js project runs in a different port.

#Database
The database used is mongodb atlas and mongoose is used in the node.js API connection.
The database is accessible anywhere if node.js computer is connected to the internet.

#### No configurations are needed for the database.
