# Redux'n Cats ([Live Demo](https://sharlaan.github.io/Redux-n-Cats))

Proof of concept featuring classic todolist and Cats gifs/images, and demonstrating architecture and usecases with Redux, through branches :

- [x] Master : "feature-based" architecture with independant modules, using classic React lifecycle hooks
- [x] Master-ReactHooks : based on master, using new React hooks
- [ ] TS : based on master-ReactHooks, fully typed with Typescript
- [x] Context : based on master-ReactHooks, but replacing Redux with React Context API
- [ ] RSK : based on master-ReactHooks, but replacing Redux with Redux-Starter-Kit
- [ ] RRE : based on master-ReactHooks, but replacing Redux with Redux-Rest-Easy
- [x] Rematch : based on master-ReactHooks, but replacing Redux with Rematch
- [ ] TS-XX : Typescript'ed version of either RSK or RRE or Rematch or ReactContext branches
- [ ] Apollo : based on TS, but replacing Redux with Apollo-client and Apollo-link-state

## Features

- 2 main features : a private TodoList, and a public Cats displayer
- TODO: authentication with JWT, 2FFA, or social networks
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
- React-Redux (based on React.Context API)
- Redux-thunk for async actions
- State management alternatives :
  - React Context : replace Redux with React Context API and useContext hook.
  - Redux-Starter-Kit : all-in-one to reduce redux boilerplate, immutability (Immer), selectors (reselect).
  - Redux-Rest-Easy: same as RSK, with caching, memoization and integrable with Normalizr.
  - Rematch: plugin-based lib, it seems very flexible depending on project needs.
  - Apollo : for the new graphQL era :D

## Todo List

- [TodoList] Add on`DblClick` on todo for editing
- [TodoList] Add a filter
- [Cats] Add a filter to choose particular images, supporting wildcards
