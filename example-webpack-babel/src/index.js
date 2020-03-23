import React, { Suspense } from "react"
import ReactDOM from "react-dom"

const App = React.lazy(() => import('./components/App'))

ReactDOM.render(
    <Suspense fallback={<div>Loading... </div>}>
        <App />
    </Suspense>,
    document.getElementById("root"))