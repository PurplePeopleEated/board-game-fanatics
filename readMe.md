# Group B: Board Game Fanatics

## Description

Board Game Fanatic is an interactive application that allows a user to compile a list of their favorite board games and order the list to their desire. The only requirement to access the application is a Board Game Fanatic username and password. Once the user has initialized their session they will be able to implement their board game list. 

The Board Game Fanatic app came to life conceptually as an application that provides a unique user experience  in a virtually untapped niche market. The notion of allowing a very specific user the ability to execute a list of their favorite board games caters to what some would call a significant improvement in the evolution of list-making. While simple in scope the application allows the user a straightforward implementation of their board game hierarchy, a tool for which many discussions and disputes among friends, family and more will most certainly ignite!   
   
Upon login with a Board Game Fanatics username, the user can search and save their favorite board games and create an ordered list to create their personal board game hierarchy.

## User Story

As a BOARD GAME FANATIC, I want to track and manage my favorite board games so I can share my BOARD GAME HIERARCHY with my fellow board game fanatics.

## Technology Used

- Javascript
- Node.js
- Express.js
- Handlebars.js
- Express-session
- MYSQL
- Granim
- Sequelize
- NPM

## Outline of Tasks

-A brainstorming session was initiated and the developer team established the concept of the app 
-The Github repository was created and working branch established
-The backend files were created and organized to meet the MVC paradigm 
  - The server and route files containing the GET and POST routes were developed and necessary module requirements initiated
  - The server environment was established via NPM 
  - The login/logout/establish user account was created
  - The MYSQL database was created and tested via seeded data
  - Sequelize ORM established for communication with the database
  - Cookies implemented to store session data
- Frontend user experience
  -  User experience enahnced with styling via CSS and Granim
  -  HTML pages to generate via Handlebards 
- Creating a Functional App
  -  Testing for confirmation that app functions locally
  - Initial deployment to Heroku
  - Debugging and making final adjustments to the code for the app to function as intended 


## Challenges
While conceptually the project was intentionally simple there were roadblocks along the way that impeded the development.

- Initially the router module export for both the user and api routes were missing the necessary require variable that we eventually corrected to solve the issue.
- Into production we had identified a missing model file that threw multiple errors. Once the applicable file was initiated the problem was immediately resolved.
- Reviewing all individual files for errors while incredibly tedious proved to be effective especially with each developer providing a second/third set of eyes
- Learning the new visual framework Granim also added a level of difficulty only curbed after documentation was reviewed and some trial and error.
- Deployment with Heroku came with its share of challenges and frustrations at times

## Successes

- The successful management of a library of files and maintaining the MVC paradigm
- Having success understanding rsearching and developing with a framework for the first time (Granim)
- As a developer team consistently maintaining a continuous open line of communication and the ability for each developer to initiate individually an aspect of the project requiring attention

## Future Development

- Further interactivity on the page that allows the user to drag and order their list of favorite board games
- Implementation of a third party API to add further data such as specific game image or game description that could be imported with the board games chosen by the user.
- Additional visual elements via other CSS Frameworks

## Links

https://github.com/PurplePeopleEated/board-game-fanatics

https://limitless-woodland-06528-9312ac9a848a.herokuapp.com/

 
