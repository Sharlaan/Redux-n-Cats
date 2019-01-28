# Redux'n Cats ([Live Demo](https://sharlaan.github.io/Redux-n-Cats))

Proof of concept featuring classic todolist and Cats gifs/images, and demonstrating architecture and usecases with Redux, through branches :

- [x] Master : "feature-based" architecture with independant modules, using classic React lifecycle hooks
- [x] Master-ReactHooks : based on master, using new [React hooks](https://fr.reactjs.org/docs/hooks-intro.html)
- [ ] TS : based on master-ReactHooks, fully typed with Typescript
- [x] Context : based on master-ReactHooks, but replacing Redux with React Context API
- [ ] RSK : based on master-ReactHooks, but replacing Redux with [Redux-Starter-Kit](https://redux-starter-kit.js.org/)
- [ ] RRE : based on master-ReactHooks, but replacing Redux with [Redux-Rest-Easy](https://brigad.gitbook.io/redux-rest-easy/#problem)
- [x] Rematch : based on master-ReactHooks, but replacing Redux with [Rematch](https://rematch.gitbooks.io/rematch/docs/purpose.html)
- [x] Easy-Peasy : based on master-ReactHooks, but replacing Redux with [Easy-Peasy](https://easy-peasy.now.sh/)
- [ ] TS-XX : Typescript'ed version of either RSK or Rematch or ReactContext or Easy-Peasy branches
- [ ] Apollo : based on TS, but replacing Redux with [Apollo-client](https://www.apollographql.com/docs/react/why-apollo/)

## Features

- 2 main features : a private TodoList, and a public Cats displayer
- integration with classic third party middlewares (thunk, logger, devtools, ...)
- synchronous and asynchronous actions
- Context branch : modularized state providers (instead of the classical single one in root)
- reset, add, remove
- set multiple values before dispatching once to store
- set the store automatically "on change"
- customisable fetching parameters
- refresh
- in todos, demonstrating event delegation using one single click handler
- layout based on CSS-Grid, check on mobile or resizing your browser ;)
- TODO: authentication with JWT, 2FFA, or social networks
- TODO: facade API exposing different fetching ways to the Cats API.

## Usage

- git clone the repo
- cd in project directory
- run `yarn && yarn start`
  It should open your default browser with `localhost:3000`

## Stack

Project boostrapped with create-react-app v2

- Javascript ES8+
- Typescript
- React 16.8 (Hooks)
- Redux 4
- React-Redux 7.1 (based on React.Context API and hooks)
- Redux-thunk for async actions
- State management alternatives :
  - React Context : replace Redux with React Context API and useContext hook.
  - Redux-Starter-Kit : all-in-one to reduce redux boilerplate, immutability (Immer), selectors (reselect).
  - Redux-Rest-Easy: same as RSK, with caching, memoization and integrable with Normalizr, **but no TS typings (yet)**.
  - Rematch: plugin-based lib, it seems very flexible depending on project needs.
  - Easy-Peasy : excellent Typescript integration
  - Apollo : for the new graphQL era :D

## Todo List

- [TodoList] Add todo editing with `onDblClick`
- [TodoList] Add a filter
- [Cats] Add a filter to choose particular images, supporting wildcards
