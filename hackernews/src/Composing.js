// Composable Components can refer to other components in their output. 
// You can use it to pass elements to your components from above, 
// which are unknown to the component itself,
// but make it possible to compose components into each other.

function Welcome(props) {             
    return <h1>Hello, {props.name}</h1>;
}

// App component that renders Welcome many times
function App() {   
    return (
        <div>
            <Welcome name="Sara" /> 
            <Welcome name="Ben" />
            <Welcome name="Jeff" />
        </div>
    );
}

export default App;



// What ist the difference between controlled components and and uncontrolled components?
// How do you pass the component properties in split up component
// How can you empower reusable and composable components?