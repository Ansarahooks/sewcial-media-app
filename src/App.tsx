import { useState } from 'react';
import ProjectDisplay from './components/ProjectDisplay.tsx';
import Dashboard from '../src/components/Dashboard.tsx';

// interface Props {
//   formVisible: boolean;
// }

function App() {
  //function App({ formVisible }: Props) {
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [file, setFile] = useState();

  const handleClick = () => {
    setShowForm(!showForm);
    console.log(showForm);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className='container'>
      <h1 className='header'>Sewcial Media</h1>
      <button className='button' onClick={() => handleClick()}>
        Add New Project!
      </button>
      {showForm && (
        <form>
          {/* Form elements go here */}
          <input type='image' src={file} width='300' height='300'></input>
          <br />
          <input type='file' name='file' onChange={handleChange}></input>
          <br />
          <label>
            Pattern Name:
            <input type='text' name='pattern-name' />
          </label>
          <br />
          <label>
            Pattern Company Name:
            <input type='text' name='pattern-company-name' />
          </label>
          <br />
          <label>
            Fabric Color:
            <input type='text' name='fabric-color' />
          </label>
          <br />
          <label>
            Fabric Type:
            <input type='text' name='fabric-type' />
          </label>
          <br />
          <label>
            Project Difficulty (1 - Easy, 5 - Very Difficult) {inputValue}:
            <input
              type='range'
              name='project-difficulty'
              min='1'
              max='5'
              step='1'
              value={inputValue}
              onInput={handleInput}
            />
          </label>
          <br />
          <button type='submit'>Submit</button>
        </form>
      )}
      <ProjectDisplay showForm={showForm} />
      <Dashboard />
    </div>
  );
}

export default App;

// function App() {
//   const items = ['New York', 'Tokyo', 'London', 'Paris'];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading={'Cities'}
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;
