# TreeView Challenge

"Hello!!

Welcome to the TreeView Challenge!!

This is a project developed for the selection process."

The TreeView is a React component that provides an interactive tree view with checkboxes and expandability capabilities. It is designed to display hierarchical data in a clear manner and enable user interaction.

## Run the project

To run the project, install the dependencies using either yarn or npm install by executing the command `yarn` or `npm start`. The development utilized the Yarn library.

#### Setup

The project was developed using `TypeScript` and the `React` library. For CSS pre-processing, `Sass` was chosen, and as the styling library, `Radix-ui-primitives` was employed. The choice of TypeScript brings numerous benefits to the application, emphasizing immutability in the code and a more direct and streamlined interpretation of the component for users interacting with the design system. The selection of Vite is due to its quick React configuration, coupled with an extensive community that provides support and facilitates issue resolution during development.

## Project Structure

The project is structured into folders. The components folder contains all styling components. The hooks folder houses contexts and used logic. The stories folder contains the component style documentation using the Storybook tool. Finally, the cypress folder contains test configuration files.

## Understanding of the problem.

After reviewing videos explaining the desired functionality, the developer identified that the challenge was related to a tree structure. With this understanding, they chose to implement a graph algorithm along with a lookup structure.

This choice was motivated by the efficiency of the algorithm compared to a naive iterative approach. The use of graphs simplified calculations, providing a clear structure for child and parent data. This eliminated the need to employ a depth-first search algorithm, resulting in greater interactivity. With this method, the algorithm can access the data of any node with linear complexity.

Initially, a simpler implementation was considered, involving iteration through a list of nested objects due to its more direct logic. However, upon realizing that the problem did not specify the total dimension the tree could reach, the more robust method was chosen. This approach allows the component to operate efficiently throughout the algorithm, regardless of size, with linear complexity. In contrast, the initial approach would have quadratic complexity, which makes a significant difference in terms of performance and computational cost, especially when dealing with large volumes of data.

### Logic Resolution

The algorithm receives a list of objects and processes them, generating a mapping item and a graph indicating parent-child relationships, facilitating visualization. This information is essential for rendering the necessary elements.

Then, a traversal of the graph occurs to update the status of all nodes, taking advantage of the low processing cost of the children. Initially, the algorithm traverses all children, updating their states. If a node has a parent node, the updating process extends to higher levels. The lookup structure allows for quick modification of a node's information, contributing to the efficiency of the algorithm. All data for the UI is generated through a context, keeping the interface and logic decoupled for easier maintenance and application of tests in the application.

The implemented logic only deals with the construction and updating of statuses. The display and responsibility for collapsing elements are handled by the UI layer.

### UI Components

In an effort to follow best practices, SCSS Sass and radix-ui-primitives were used. However, it was decided that for the tree component, the radix root would be used. This decision was made because it allows for manual styling, as the component is simple, flexible, and customizable. During construction, it was observed that, given the level of customization demonstrated in the demo video, using a library component to control the display and collapsing of elements would become an anti-pattern. This is because many inheritances from the parent component would have to be denied.

Some design token keys were implemented to encapsulate colors and spacings. The goal was easy maintenance of these stylings by concentrating the values in a single variable, which not only standardizes but also makes it easier for future changes.

### Code Formatting

During development, esLint and Prettier were used, configured in the project to establish a standard in case more people are involved. The default lint configuration was chosen, and there is room for improvement by adding custom configurations.

Another method of standardizing the codebase was the installation of husky pre-commit and pre-push hooks to ensure that the code adheres to the standards.

### Component Testing

With the logic in place, it is pertinent to validate it. Therefore, test scenarios were developed using the Cypress tool to ensure that the expected behavior is occurring. To run the tests, enter the command yarn cypress open and select the component test option in the browser.

## Improvements

Given the time constraints, the product developed so far is considered version 0. For version 1, some improvements have been considered, such as:

<ul>

#### Implementation of iteration stop condition

 <ul>
Apply a stop condition for the algorithm, as in the current implementation, inserting an array pointing inside itself can result in the infinite rendering of the component.
</ul>

#### Translation Key

<ul>
Create translation keys into the code, which ensures better usability and avoids having loose strings in the codebase.
</ul>

#### Removal of the dangerousHtml in the label component.

<ul>
The usage of HtmlDangerous in the implementation is a risky approach as it opens the possibility of injecting malicious code into the application. This approach was used because there was not a well-defined scope in the project regarding which tags would be accepted, so all were allowed. However, as a point for future improvement, closing the scope of these tags and handling the component to accept only the listed ones would be important to control code injection into the application.
</ul>

</ul>

## Closing remarks

The practices developed took into consideration good code quality, but also aimed at delivering in a timely manner.
