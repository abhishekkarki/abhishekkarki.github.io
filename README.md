# portfolio

## creating a node project
`npm init -y` with this you will get a package.json file

- install typescript `npm install -g typrscript`

- check typescript version `tsc --version`

- `tsc --init --sourceMap --rootDir src --outDir dist` it will initialize a typescript project by creating a tsconfig.json file
and the options like sourceMap will map the javascript with the typescript and the .ts files will be in the src and the compiled files are in the dist folder

`tsc` make a dist folder which will have the compiled files 
add this to the next line 

- creating a launch configration in the debug section go to the create a launch and debug configration -> node -> 

"program": "${workspaceFolder}/dist/index.js",

- to set the watch the changes without compiling again and again
`npm i --save-dev typescript`
go to the command pallete -> Tasks: Configure Default Build Task -> tsc:watch-tsconfig.json 
then again F1->Tasks:Run Build Task

•	Build the Project: Run npm run build to compile the TypeScript code to JavaScript.
	•	Run the Project: After building, run npm start to execute the compiled code.
	•	Develop with Watch Mode: Run npm run dev to enable watch mode, which automatically recompiles on file changes.
	3.	Ensure tsconfig.json is Confi


Vite is used as a bundler
- to start a development server `npm run dev` 

- If you want to build the project for production (e.g., to deploy it), run: `npm run build`

- preview the production build `npm run preview`



removing the cached files `git rm -r --cached .vscode dist node_modules package-lock.json`