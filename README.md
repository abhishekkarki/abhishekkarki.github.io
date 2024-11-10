# portfolio

## creating a node project
`npm init -y` with this you will get a package.json file

- install typescript `npm install -g typrscript`

- check typescript version `tsc --version`

- `tsc --init --sourceMap --rootDir src --outDir dist` it will initialize a typescript project by creating a tsconfig.json file
and the options like sourceMap will map the javascript with the typescript and the .ts files will be in the src and the compiled files are in the dist folder

- creating a launch configration in the debug section go to the create a launch and debug configration -> node -> 

"program": "${workspaceFolder}/src/index.ts",
