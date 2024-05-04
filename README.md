#Thence Assignment

1. Clone the Repository: If you haven't already, clone the repository containing your project to your local machine. You can use Git to clone the repository by running the following 
   command in your terminal:
   git clone <repository-url>
2. Navigate to the Project Directory: Use the cd command to navigate into the directory of your project:
   cd <project-directory>
3. Install Dependencies: Before running the project, you need to install its dependencies. In a ReactJS project, this typically involves using yarn. Run one of the following commands 
   in your terminal:
   yarn install
4. Start the Development Server: Once the dependencies are installed, you can start the development server. In a typical ReactJS project, you use yarn dev to do this:
   yarn dev


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
