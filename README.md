# Fun with AI

*Shopify Frontend Developer Intern Challenge - Fall 2022*

- Click [HERE](https://docs.google.com/document/d/1O7mCynsz_cBXkEaCFGSZAuvAOY84QVq35l20xJwjOYg/edit#) to view the project spec
- Click [HERE](https://fun-with-ai-ect.herokuapp.com/) to view the deployed site

## TABLE OF CONTENTS
- [Project Overview](#overview)
- [Application Demo](#application-demo)
- [Setup Instructions](#setup-instructions)
- [Tech Stack](#technologies-used)
- [Project Materials](#project-materials)
- [Credits](#credits)
- [Author](#author)

## OVERVIEW
*Fun with AI*, is an application built with the OpenAI API [completions endpoint](https://beta.openai.com/docs/guides/completion) and uses the “text-curie-001” engine. A user can enter a prompt, submit it, receive an AI generated response, and then reset the form and repeat the process. In addition all prompt response pairings are stored and displayed in chronological order for a user to review.


## APPLICATION DEMO
Below is a walkthrough of the basic user flow of adding a prompt, submitting it, receiving a response, and resetting the form:  

![Fun with AI](https://media.giphy.com/media/cprmxHpPPn7F6Fmh8H/giphy.gif) 


Responses in the response log are displayed in reverse-chronological order (meaning that the most recent response is displayed first), and the log updates after every new submission!

![Fun with AI](https://media.giphy.com/media/qHA2CtD2LWRzZkIaKF/giphy.gif)

A prompt must be entered in order to submit the form. If a user tries to submit the form without entering a prompt, an alert will pop up indicating that the input field must be filled out. Similarly, after the form has been submitted, the input field is uneditable until after the form is reset. This is done by clicking the reset button.

![Fun with AI](https://media.giphy.com/media/JzeDwzYdWH1PumlLec/giphy.gif)

![Fun with AI](https://media.giphy.com/media/kHBMqLHN43qktkhy8a/giphy.gif)

Finally, the application is fully responsive to all viewports!

![Fun with AI](https://media.giphy.com/media/PC2MIJHyyUQjwunRj9/giphy.gif)

## Features
- A user can add a prompt, submit it, receive an AI generated response, and reset the form to submit another prompt.
- The application is fully tabbable and possesses a 100% Lighthouse Accessibility Audit Score.
- The application is responsive to all viewports (phones, tablets, laptops, etc.)
- All user flows are tested via Cypress.

## SETUP INSTRUCTIONS
- Copy the SSH clone address
- Run ```git clone git@github.com:ectweitmann/fe_internship_challenge.git``` in your repo
- `cd` in to the cloned repo, and run ```npm install```
- Finally run ```npm start``` and visit localhost:3000
### INSTRUCTIONS FOR RUNNING CYPRESS TEST SUITE
- Run ```npm start``` in your terminal
- Open a second tab in your terminal and make sure you are still inside the project repo
- Run ```npm run cypress``` 
- After the Cypress dashboard renders, click on the link that reads: "► Run 1 integration spec"

## TECHNOLOGIES USED 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![OpenAI](https://tm.ibxk.com.br/2019/07/24/24010320131186.jpg?ims=102x28)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![Atom](https://img.shields.io/badge/Atom-%2366595C.svg?style=for-the-badge&logo=atom&logoColor=white)

## PROJECT MATERIALS
- [Wireframe](https://www.figma.com/file/oT7useUaxjgZoV9QRoDgin/Shopify-FE-Internship-Challenge?node-id=0%3A1)

---

## CREDITS:
<a href="https://www.flaticon.com/free-icons/crystal-ball" title="crystal ball icons">Crystal ball icons created by Smashicons - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/learn" title="learn icons">Learn icons created by wanicon - Flaticon</a>

## AUTHOR:
Ethan Tweitmann

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ethantweitmann/) 
