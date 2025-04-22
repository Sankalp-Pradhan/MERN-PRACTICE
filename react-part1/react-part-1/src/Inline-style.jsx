
import React from "react";

const App = () => {
    return (
        <div>
            <MyComponent />
        </div>

    );
};

function MyComponent() {
    return (
        <div style={{ backgroundColor: 'blue', color: 'white' }}>
            Hello, World!
        </div>
    );
}
export default App