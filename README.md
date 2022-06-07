# KatanaAutomation
Cypress Typescript Automation Assignment

Test cases covered in the automation suite:
1. verify user should login correctly
2. verify that user navigates to customer page when clicking add customer using global add button
3. verify that cusomer gets display name correctly displayed after entering first and last name
4. verify that all customer details are saved
5. verify that customer can add billing address
6. verify that customer can delete user details
7. verify customer contact page
8. verify add new customer from contacts page
9. verify update existing customer from contacts page
10. verify delete existing customer from contacts page

Outline of automating proposed scenarios on different levels of testing pyramid.
The testing pyramid is a concept that group software into three categories. This helps QA professionals to ensure quality, reduce the time it takes to find root cause of bug, and build more reliable suite.

From top to bottom, the main layer include:
1.	UI/Exploratory tests
2.	Integration tests
3.	Unit tests


UI/ Exploratory tests generally lie at the top layer of the pyramid which are generally are more complex and have more dependencies than unit and integrations tests. Our automation suite has been implemented based on the top layer of the pyramid. Following are the pros and cons list:
Pros: 
1.	Tests from user perspective.
2.	Verifies end to end workflow of the application.
3.	Reduces number of errors found in production.


Cons:
1.	Slow execution time as it performs end to end test on workflows.
2.	Test flakiness as it requires maintenance and trouble shooting if change in workflows.

Technical Document:

Tech Stack, Libraries and Dependencies used:
1. Typescript
2. Cypress
3. Visual studio code
4. Nodejs
5. npm


HOW TO USE:

1. git clone https://github.com/nishitgupta77/KatanaAutomation.git
2. open the terminal and run command: npm install
3. npm run test
