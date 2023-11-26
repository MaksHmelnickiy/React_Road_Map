## Project Setup
We use internal library to run this project, so for you
to start the project you need to first create the `.npmrc` file
in the root of the project and put there the next line:
`@private:registry=https://nexus.cyberhat.guru/repository/react/`

Then use `npm login --registry=https://nexus.cyberhat.guru/repository/react/`
to login your terminal to the proxy registry. 
Now you are done and can install the dependencies.

## Available Scripts

In the project directory, you can run:

### `npm i`
Launches script to upload all dependency packages

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


