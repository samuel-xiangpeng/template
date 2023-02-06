import {createRoot} from "react-dom/client";
import React, {useEffect} from 'react'
import "./index.less";
const root = createRoot(document.body)
const App = () => {
    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            console.log("SAMUEL DEVELOPMENT")
        } else {
            console.log("SAMUEL PRODUCTION")
        }
    }, [])

    return (
        <React.Fragment>
            <div className="box">
                <p style={{fontSize: "30px", textAlign: "center"}}>
                    Hello World! 🚚 💭
                </p>
            </div>
        </React.Fragment>
    )
}

root.render(
    <App/>
);




