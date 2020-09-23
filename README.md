# Issue Tracker

A full stack application that manages books and their subsequent user comments for the Freecodecamp curriculum.

**Final Project:** [https://misty-windy-roll.glitch.me/](https://misty-windy-roll.glitch.me/)

**User Story #1:** Nothing from my website will be cached in my client as a security measure.

**User Story #2:** I will see that the site is powered by 'PHP 4.2.0' even though it isn't as a security measure.

**User Story #3:** I can post a title to /api/books to add a book and returned will be the object with the title and a unique \_id.

**User Story #4:** I can get /api/books to retrieve an aray of all books containing title, \_id, & commentcount.

**User Story #5:** I can get /api/books/{\_id} to retrieve a single object of a book containing title, \_id, & an array of comments (empty array if no comments present).

**User Story #6:** I can post a comment to /api/books/{\_id} to add a comment to a book and returned will be the books object similar to get /api/books/{\_id}.

**User Story #7:** I can delete /api/books/{\_id} to delete a book from the collection. Returned will be 'delete successful' if successful.

**User Story #8:** If I try to request a book that doesn't exist I will get a 'no book exists' message.

**User Story #9:** I can send a delete request to /api/books to delete all books in the database. Returned will be 'complete delete successful' if successful.

**User Story #10:** All 6 functional tests required are complete and passing.

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Built With

- [Node](https://nodejs.org/en/) - JavaScript runtime environment
- [MongoDB](https://www.mongodb.com/) - NoSQL database

## Authors

- **Peter Huang** - Principal developer - [Portfolio](https://www.peterhuang.net/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
