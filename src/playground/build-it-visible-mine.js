console.log('App.js is running!');

let showText = true; 
let btnText = 'Show details!';

const showDetails = (e) =>  {
  console.log('click!');
  
  e.preventDefault = true;
  if (!showText) {
    showText = true;
    btnText = 'Show details!';
  } else {
    showText = false;
    btnText = 'Hide details!';
  }
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={showDetails}>{btnText}</button>
      <p hidden={showText}>halhalhla</p>
    </div>
  );
  ReactDOM.render(template, document.getElementById('app'));
};

render();