import React from "react";

const App = () => {
    return (
        <div>
            {[
                <Todo key={1} tittle={"Go to Gym"} done={false} />,
                <Todo key={2} tittle={"eat"} done={false} />,
            ]}
        </div>
    );
};
function Todo({ tittle, done }) {
    return <div>
        {tittle} -{done ? "Done!" : 'Not done! '}
    </div>
}

export default App