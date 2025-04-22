import React, { useState, useEffect } from 'react';

const App = () => {
    return (
        <div>
            <ErrorBoundary >
            <Card1 />
            </ErrorBoundary >
            <Card2 />
        </div>
    )
}

function Card1() {
    throw new Error("hello i am error fuck me")
    return <div style={{ background: "grey", borderRadius: 20, padding: 10 }}>
        Hi there
    </div>
}

function Card2() {
    return <div style={{ background: "blue", borderRadius: 20, margin: 20, padding: 10 }}>
        Hi there
    </div>
} 


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <div style={{ background: "grey", borderRadius: 20, padding: 10 }}>
            Something went wrong
        </div>
        }

        return this.props.children;
    }
}


export default App;