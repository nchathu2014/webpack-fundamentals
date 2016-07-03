import  React from 'react';

class App extends React.Component{

    constructor(){
        super();
        console.log("App initialized...");
    }

    render(){
        return(
            <div>
                I am a React Component
            </div>
        );
    }

}

export default App;