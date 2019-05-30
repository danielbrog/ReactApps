console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Daniel\'s Indecision App',
    options: [],
    showDetails: false
};

const formSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;
    if(option){
        app.options.push(option);
        event.target.elements.option.value= '';
        renderApp();
    }
};
const removeAll = () => {
    app.options = [];
    renderApp();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const toggleInfo=() => {
    app.showDetails = !app.showDetails;
    renderApp();
}

const appRoot=document.getElementById('app');
const renderApp = () =>{

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options: " : "No options"}</p>
            <button disabled={app.options.length === 0}  onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
                app.options.map((option)=> {
                    return <li key={option}> {option}</li>;
                })
            }
            </ol>
            <form onSubmit={formSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleInfo}>{app.showDetails ? 'Hide Details' : 'Show Details'}</button>
            {app.showDetails && <p>This is showing the details</p>}
        </div>
    );


    ReactDOM.render(template, appRoot);
} 
renderApp();
