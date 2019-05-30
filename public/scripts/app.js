'use strict';

console.log('App.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'Daniel\'s Indecision App',
    options: [],
    showDetails: false
};

var formSubmit = function formSubmit(event) {
    event.preventDefault();
    var option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderApp();
    }
};
var removeAll = function removeAll() {
    app.options = [];
    renderApp();
};

var makeDecision = function makeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var toggleInfo = function toggleInfo() {
    app.showDetails = !app.showDetails;
    renderApp();
};

var appRoot = document.getElementById('app');
var renderApp = function renderApp() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? "Here are your options: " : "No options"
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: makeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    ' ',
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: formSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        ),
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleInfo },
            app.showDetails ? 'Hide Details' : 'Show Details'
        ),
        app.showDetails && React.createElement(
            'p',
            null,
            'This is showing the details'
        )
    );

    ReactDOM.render(template, appRoot);
};
renderApp();
