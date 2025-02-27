# Social Network API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) - https://opensource.org/licenses/MIT

## Table of Contents 
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Tests](#tests)

[License](#license)

[Questions](#questions)

[Resources](#resources)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Tutorials](#tutorials)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[3rd-Party Software](#3rd-party-software)

[Screenshots](#screenshots)

[Video Demonstration](#video-demonstration)

## Description
The Social Network API is a backend application built using Node.js, Express, and MongoDB. It provides a robust API for managing a social network, allowing users to create, read, update, and delete user profiles and thoughts. Users can also add and remove friends, as well as react to thoughts. The application leverages Mongoose for data modeling and validation, ensuring data integrity and consistency. This API serves as a foundation for building social networking applications, offering essential features such as relationship management, and data interaction.

## Installation
1. **Clone [the Repository](https://github.com/Lauren245/Social-Network-API)**

2. **Install Dependencies:** Ensure you have Node.js and npm installed. Then, run the following command to install the required dependencies: ```npm install```.

3. **Set up environment variables.** Create a .env file and add the following to it: ```MONGODB_URI = mongodb://localhost:27017/```

4. **Build the project** Use the ```npm run build``` command at the root level to build the application.

5. **Start the server** Use the ```npm run start``` command at the root level to build the application.

## Usage
- This application is just for testing API endpoints.

## Tests
- Tests can be done by testing the endpoints through software such as Insomnia. 

## License
Copyright 2025 Lauren Moore

This software uses an [MIT license](https://opensource.org/license/MIT).

## Questions
If you have additional questions, you can contact me at: 

GitHub: [Lauren245](https://github.com/Lauren245)

Email: laurenmoorejm@gmail.com

## Resources

### Tutorials
1. **[Mongoose Virtuals](https://www.geeksforgeeks.org/mongoose-virtuals/)** by Geeks for Geeks:

2. **[Understanding the MVC Pattern with TypeScript: An In-depth Analysis](https://medium.com/@alessandro.traversi/understanding-the-mvc-pattern-with-typescript-an-in-depth-analysis-5a5d6f2d61a4)** by Alessandro Traversi

3. **[Mongoose SchemaTypes Getters](https://www.geeksforgeeks.org/mongoose-schematypes-getters/)** by Geeks for Geeks:

4. **[How to always return the executed value of a getter?](https://www.mongodb.com/community/forums/t/how-to-always-return-the-executed-value-of-a-getter/153060)** MongoDB Developer Community.

5. **[Mongoose SchemaType Options](https://www.geeksforgeeks.org/mongoose-schematype-options/)** by Geeks for Geeks:

6. **[Mongoose Validation](https://www.geeksforgeeks.org/mongoose-validation/)** by Geeks for Geeks:

7. **[Validation in Mongoose(where, how and handle errors)](https://chanwingkeihaha.medium.com/validation-in-mongoose-where-how-and-handle-errors-b44f68cccae3)**
by: Yingqi Chen

8. **[Subdocuments](https://mongoosejs.com/docs/subdocs.html)** mongoose documentation

9. **[Schemas](https://mongoosejs.com/docs/guide.html)** mongoose documentation

10. **[Getters/Setters in Mongoose](https://mongoosejs.com/docs/tutorials/getters-setters.html)** mongoose documentation

11. **[FindOne Method in Mongoose](https://www.geekster.in/articles/findone-method-in-mongoose/#:~:text=In%20MongoDB%20and%20Node.,specified%20criteria%20from%20a%20collection.)** by: Geekster

### 3rd-Party Software

This application utilizes the following third-party software:

1. **Node.js** - JavaScript runtime built on Chrome's V8 JavaScript engine.
2. **Express** - Fast, unopinionated, minimalist web framework for Node.js.
3. **MongoDB** - NoSQL database for storing application data.
4. **Mongoose** - Elegant MongoDB object modeling for Node.js.
5. **dotenv** - Module that loads environment variables from a `.env` file into `process.env`.
6. **Nodemon** - Utility that monitors for any changes in your source and automatically restarts your server.
7. **Jest** - JavaScript testing framework designed to ensure correctness of any JavaScript codebase.
8. **Supertest** - Library for testing Node.js HTTP servers.
9. **Insomnia** - API client for testing and debugging RESTful APIs.

## Screenshots

**Image of the test results for getting all users as shown in Insomnia.**
![A screenshot of the Insomnia API testing tool shows a GET request to localhost:3001/api/users. The response preview on the right displays a JSON array of user objects, each containing _id, username, email, thoughts, friends, _v, and friendCount. The status code is 200 OK. The left sidebar lists various API requests related to thoughts, friends, and users, including creating, updating, and deleting users and thoughts. The interface has a dark theme.](./assets/screenshots/Social-Media-API-Testing-All-Users.jpg)


**Image of the test results for getting all thoughts as shown in Insomnia.**
![ A screenshot of the Insomnia API testing tool shows a GET request to localhost:3001/api/thoughts. The response preview on the right displays a JSON array of thought objects, each containing _id, thoughtText, username, createdAt, reactions, _v, and reactionCount. One thought has a reaction, while the other does not. The status code is 200 OK. The left sidebar lists various API requests related to thoughts, friends, and users, including creating, updating, and deleting thoughts and users. The interface has a dark theme.](./assets/screenshots/Social-Media-API-Testing-All-Thoughts.jpg)


## Video Demonstration
 **[Link to demonstration video on Google Drive](https://drive.google.com/file/d/18H-BICkyTQzgFeQZz7H3H0usi0kFl2g_/view?usp=sharing)**

---

**[Back to Top](#social-network-api)**