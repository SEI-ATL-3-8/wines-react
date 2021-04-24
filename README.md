# Wine timeeee
Your mission is to build a react frontend that consumes the wines (or books, or people) api from http://myapi-profstream.herokuapp.com/. In this readme, any reference to books, wines, or people refers to whichever api you choose to work with.

## User Stories
1. The site has nav links that lets us navigate between the Home page, All Books page, and the Create A Book page. The site starts on the Home page, which just has a welcome message.
1. The All Books view displays the title of all books in the db. These titles are links that take us to the Single Book view for that book.
1. In the Single Book view, I see the full details about the selected book.
1. In the Create a Book page, there is a form for creating a new book.
1. When the new book page is submitted, the book gets created in the backend, and I am taken to either the list of all books or the details page for that book.
1. When in the Single Book view, there is a Delete button to delete this book from the backend.
1. When in the Single Book view, there is an Edit button that takes me to the Editing Book view. This view is very similar to the Create a Book view, except it has a different header, and the fields of the form are pre-filled with the book's attributes. When the Editing Book form is submitted, the book gets updated in the backend, and the page transitions to the Single Book view for the newly-edited book.


### Tips
1. Plan out your routes ahead of time. Each different page of the site needs its own route, and its own page component. The Home, All Books, and Create A Book views are accessible from the nav, but there are also Edit and Single Books views that are only accessible from non-nav links.
2. Plan out all your components ahead of time, and plan which pieces of state you'll need, and where they'll live. Make a component tree diagram that notes where the state lives, and what each component passes as props to each other component.
3. Use `react-dotenv` to store your backend url. If this process becomes a time vortex it is ok to bail and just hardcode it, but soon it will be not-optional to change our backend url per environment. So take this opportunity to practice! Some notes on setting it up are below.
4. For both the Single Book and Edit Book views, there are two equally valid approaches:
  - Pass the id of the book into the Single Book / Edit Book component and let the component make an api request for the full info
  - Store the array of all full books info in the top level state, and right before rendering the Single Book / Edit Book component, find the book from your master list that has an id matching your url params, and pass this whole book into the Single Book view as a prop.
5. To create a page transition after creating a new book or updating an existing book, have a piece of state in the form component called `shouldRedirect` that initially starts as false, and gets set to true after the POST request. Then, conditionally render a `<Redirect />` component (google it!) if this state is true. The end result will be that once the POST request completes, `shouldRedirect` gets set to true, which causes the component to render the `<Redirect />`, which causes react-router to take you to the specified page.

### using react-dotenv:
  - install the package
  - make a .env file in root of react folder
  - put .env in .gitignore
  - put /public/env.js in .gitignore
  - prepend build & start scripts with "react-dotenv && "
  - add new top level info to package:
  ```json
  "react-dotenv": { "whitelist": ["YOUR", "ENV", "VAR", "KEYS"] },
  "homepage": "",
  ```
  - set config vars in .env
  - `yarn start`: after vars are changed in .env, the changes won't take until you run the start command again
  - import env from 'react-dotenv' in each file that needs it, access vars from env object
