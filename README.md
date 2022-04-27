# Interview Scheduler

Interview Scheduler is a single page application built by Julia Tran using React. The interview scheduler allows a student to book and manage an interview with a mentor. Appointments can be made each day of the week from noon to four. Appointments are displayed for the selected day. When an appointment is created the user can type in their name and choose an interviewer from the list. Clicking on the save button will perform a save action. If the name input is left blank or no interviewer is chosen, errors will occur.  When the response is returned from the server, an appointment can be seen with the student name and interviewer chosen. Users can also edit and delete interviews and save those changes to the server. Status indicators are shown between saving, editing and  deleting actions. If an error occurs during saving, editing or deleting the server returns an error indicating what specific error has occurred.

Data is persisted by an API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using a JSON format. Jest and Cypress tests are used throughout the development of the project.

Would you like to try the Interview Scheduler? Follow these easy steps to get it running on your own computer!

## Getting Started

1. Clone this repository onto your local device.
2. Install dependencies with `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:8000/>.
4. If you are interested in the testing enviroment run `npm test` for the Jest Tests.
5.  If you are interested in the storybook enviroment run `npm run storybook` for the Jest Tests.
6. Get Scheduling!

## Dependencies
- React
- Express
- Webpack, Babel
- Axios
- Storybook
- Webpack Dev Server
- Jest
- Testing Library
- Cypress

## Screenshots
!["Screen shot of main page"]
!["Screen shot of form"]
!["Screen shot of confirmation"]
