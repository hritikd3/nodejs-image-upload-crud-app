

<h1 align="center">Project Name🚨</h1>   



<h1 align="center">Seamless User Management:🧑‍💻 <br>
 Create, Explore, Update, and Delete with Ease! </h1>

 Deployed Link:- [Click here](https://nodecrud-hp3d.onrender.com/)

<hr>

![image](https://github.com/hritikd3/nodejs-image-upload-crud-app/assets/86347286/b9861d86-b5fc-4895-a306-5b8706da22fb)

**Add User**

![image](https://github.com/hritikd3/nodejs-image-upload-crud-app/assets/86347286/b0f2ec36-8c5b-4dd3-953b-3d19ba5b71a2)

**Delete User**

![image](https://github.com/hritikd3/nodejs-image-upload-crud-app/assets/86347286/96d57755-aebf-4fce-94f7-494dc0ff6bd9)

**Update User**
<hr>

## Tech Stack 🚀

- EJS
- Express
- MongoDB
- Node.js

## Description📜

This web application showcases a seamless user management system with powerful CRUD (Create, Read, Update, Delete) functionality. It allows you to effortlessly create, explore, update, and delete user data with just a few clicks. Built with EJS, Express, MongoDB, and Node.js, it offers a user-friendly interface and smooth navigation to enhance your experience.


## Usage✨

To use this application, follow these steps:

Open your web browser and visit http://localhost:5500 or the deployed URL of your application.

##### Home Page: 
The home page displays a list of users. You can view the existing users and perform actions like adding a new user, editing an existing user, or deleting a user.

##### Add User: 
Click on the "Add User" button to navigate to the add user form. Fill in the required details such as name, email, phone, and select an image. Click the "Add User" button to create a new user. The user will be added to the database and displayed on the home page.

##### Edit User: 
To edit an existing user, click on the "Edit" button next to the user you want to modify. This will take you to the edit user form. Update the necessary information and click the "Update User" button to save the changes. The user details will be updated in the database and reflected on the home page.

##### Delete User:
To delete a user, click on the "Delete" button next to the user you want to remove. Confirm the deletion in the prompt that appears. The user will be deleted from the database, and the corresponding user entry will be removed from the home page.

##### Search Users: 
Use the search field at the top of the page to search for specific users by name or email. As you type, the user list will dynamically update to display matching results.

##### Navigation: 
You can navigate to different sections of the application using the navigation links in the header. Clicking on "Home" will take you back to the home page, "Add User" will navigate to the add user form, and so on.
<hr>

## The CRUD Operation ⛳

 ***CRUD*** stands for **Create, Read, Update,and Delete**, which are the fundamental actions used for persistent storage and manipulation of data.

Here's a breakdown of how CRUD is implemented in my project:

**Create**: 
Users can be created by filling out the "Add User" form. When the form is submitted, the data is sent to the server, and a new user is created in the MongoDB database using Mongoose. The user's information, including their name, email, phone, and image, is stored in the database.

**Read**: 
The application allows users to view the existing users on the home page. When the page loads, a request is sent to the server to fetch all the user data from the database. The retrieved user data is then displayed on the home page, showing details such as name, email, phone, and image.

**Update**: 
Users can update their information by clicking the "Edit" button next to their entry on the home page. This action takes them to the edit user form, where they can modify their name, email, phone, or image. Upon submitting the form, the updated user data is sent to the server, and the corresponding user record in the database is updated using Mongoose.

**Delete**: 
To remove a user from the system, users can click the "Delete" button next to their entry on the home page. This triggers a request to the server, which then locates the user in the database based on their unique identifier (ID). The user record is then deleted using Mongoose, permanently removing the user from the database.

These CRUD operations allow users of my application to effectively manage user data, create new user entries, retrieve existing user information, update user details, and delete unwanted user records. 
<hr>

## Installation ℹ️

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/project-name.git

2. Install the dependencies:

   ```bash
    cd project-name 
    npm install 

3. Configure environment variables:

- Create a .env file in the root directory of your project.
Define the required environment variables in the .env file. For example, the database connection URI or any other configuration variables.

4. Install the dependencies:

   ```bash
    cd project-name 
    npm install 


5. Open your web browser and visit http://localhost:5500 to access the application.
<hr>

## References 🙌
- [EJS](https://ejs.co/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Express Session](https://www.npmjs.com/package/express-session)
- [GitHub](https://github.com/)
