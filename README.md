
![image](https://github.com/vaishnavwalke/Manufac_test/assets/84281792/5e2bb012-33bb-4bbd-90d1-ae6297b1f7fc)

use commmand - yarn start

codesandbox link - https://codesandbox.io/p/github/vaishnavwalke/Manufac_test/main?workspaceId=6f43939a-f127-417c-be01-5909dbe6c2bf

**FlavanoidsStatistics. Its main purpose is to load a dataset from a JSON file, calculate statistics (mean, median, mode) for different classes within the dataset, and then display these statistics in a table. Here's a short explanation of what the code does:

It imports the necessary React hooks (useEffect and useState) and styles from external files.

It defines the FlavanoidsStatistics functional component.

Inside the component, it initializes two pieces of state:

dataset: It starts as an empty array and will store the loaded dataset.
statistics: It starts as an empty object and will store the calculated statistics.
It uses the useEffect hook to fetch data from a JSON file (/Wine-Data.json) when the component mounts. Once the data is loaded, it calculates statistics for different classes based on the "Alcohol" attribute and stores these statistics in the statistics state.

The calculateStatistics function is used to calculate the mean, median, and mode for each class in the dataset.

The component renders a table with headers for different classes and rows for mean, median, and mode statistics for each class.

The classes variable contains the keys (class labels) for the statistics object.

It maps through the classes to generate the table rows with statistics for each class.

The table is styled using CSS classes defined in the imported stylesheet.

Overall, this code demonstrates how to load and process data in a React component and display the results in a tabular format. It calculates statistical measures for different classes within the dataset and dynamically generates the table based on the available classes.


****GammaStatistics. Its purpose is to calculate and display statistical measures (mean, median, mode) for a given dataset grouped by classes and specific data points' attributes. Let's break down what this code does and how you can explain it in an interview:

Imports and Component Definition:

The code imports React and some necessary styles.
Functional Component:

GammaStatistics is a React functional component that takes a dataset prop as input. This prop is expected to be an array of data points.
Data Calculation Functions:

calculateGamma(dataPoint): This function calculates a custom statistic called "Gamma" for a single data point based on the values of its attributes (Ash, Hue, Magnesium).

groupDataByClass(): This function groups the dataset by a specific attribute, in this case, "Alcohol." It creates an object where each class (unique Alcohol value) is a key, and the associated values are an array of calculated Gamma values for data points belonging to that class.

calculateMean(data): This function calculates the mean (average) of an array of data.

calculateMedian(data): This function calculates the median (middle value) of an array of data.

calculateMode(data): This function calculates the mode (most frequent value) of an array of data.

Grouping Data:

groupedData is an object that holds the data grouped by class using the groupDataByClass function.
Calculating Statistics:

classes holds the unique class labels obtained from the grouped data.

statistics is an object that will store statistical measures for each class. It iterates through the classes, calculates the mean, median, and mode for each class's data, and stores these values in the statistics object.

Rendering:

The component returns JSX to render a table. It maps through the classes to generate table headers and cells with statistical values for each class.

The table has three rows: one for Mean, one for Median, and one for Mode.

Styling:

The table is styled using CSS classes defined in an external stylesheet.






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
