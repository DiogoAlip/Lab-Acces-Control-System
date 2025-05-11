# What have this branch?
- Firebase: As a backend saves us the effort of creating our own API for backend and a No SQL data base and an authentication method whit Typescript support.
- Redux: Simplify the change and the selection of states, this library use reducers and contexts for those goals.
## Data Base Estructure

Maintaining a structure for the database helps in management and knowing the types of data that users will handle.

Just for in this branch, is consideraded the next structure of data base. Some different from the original branch.

![image](./estructure_DB.png)

## Rules

- Students and Master can make petitions, and this can be rejected or acepted.
- Masters can have 1 or more laboratiries under charge, they can denie or accept petittions.
- Any petition have an array of asistences, it contain the ids, names, and an absence justification, inside of an object.
Example:
```
[
  {
    "id_student":"5as74hf5jf7ac1ax26h5g8"
    "state":"absent"
    "reason":""
  }, { },
...]
```

- The state of the laboratories change with the actual date, if a petittion is accepted and the current hour is within the hour range, the state of the laboratorie will be "busy". Else will be "free".
---

# Propierties

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
