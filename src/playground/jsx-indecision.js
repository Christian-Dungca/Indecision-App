
// JSX - JavaScript XML

const appRoute = document.querySelector('.app');
const app = {
    title : 'Idecision App',
    subtitle : 'Put your life in the hands of a computer',
    options : []
};

// when a form is submitted 
const onFormSubmit = (e) => {
    e.preventDefault();

    // e.target => points to element where event started on
    // e.target.elements => access to all the forms elements which is indexed by name attribute

    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptions();
    }
}

const deleteOptions = () => {
    app.options = [];
    renderOptions();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const renderOptions = () => {
    const template = (
        <div>
            <h1> {app.title} </h1>
            {app.subtitle && <p> {app.subtitle} </p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"} </p>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}> What should I do </button>
            <button onClick={deleteOptions}> delete all </button>

            <h3> List Items </h3>
            <ol>

            {
                app.options.map((listItem) => {
                    return <li key={listItem}> {listItem} </li>;
                })
            }

            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoute);
}

renderOptions();