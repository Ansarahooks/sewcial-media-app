import React, { useState } from 'react';
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
  const [formData, setFormData] = useState({
    file: '',
    patternName: '',
    patternCompanyName: '',
    fabricColor: '',
    fabricType: '',
    projectDifficulty: 0,
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:3000/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      });

      if (response.ok) {
        console.log('Form data submitted successfully!');
      } else {
        console.error('Error submitting form data.');
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  //displays form after clicking Add New Project Button
  const handleClick = () => {
    setShowForm(!showForm);
    console.log(showForm);
  };

  //function for showing difficulty of pattern in form
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  //function for uploading images in form
  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    setFormData({ ...formData, [e.target.file]: e.target.value });
  };

  return (
    <div id='formInfo' className='container'>
      <h1 className='header'>Sewcial Media</h1>
      <button className='button' onClick={() => handleClick()}>
        Add New Project!
      </button>
      {showForm && (
        <form
          className='form'
          onSubmit={handleSubmit}
          // action='/projects'
          // method='POST'
        >
          {/* Form elements go here */}
          <input type='image' src={file} width='300' height='300'></input>
          <br />
          <input
            type='file'
            name='file'
            onChange={handleChange}
            value={formData.file}
          ></input>
          <br />
          <label>
            Pattern Name:
            <input
              type='text'
              name='patternName'
              onChange={handleFormChange}
              value={formData.patternName}
            />
          </label>
          <br />
          <label>
            Pattern Company Name:
            <input
              type='text'
              name='patternCompanyName'
              onChange={handleFormChange}
              value={formData.patternCompanyName}
            />
          </label>
          <br />
          <label>
            Fabric Color:
            <input
              type='text'
              name='fabricColor'
              onChange={handleFormChange}
              value={formData.fabricColor}
            />
          </label>
          <br />
          <label>
            Fabric Type:
            <input
              type='text'
              name='fabricType'
              onChange={handleFormChange}
              value={formData.fabricType}
            />
          </label>
          <br />
          <label>
            Project Difficulty (1 - Easy, 5 - Very Difficult) {inputValue}:
            <input
              type='range'
              name='projectDifficulty'
              min='1'
              max='5'
              step='1'
              value={inputValue}
              onInput={handleInput}
            />
          </label>
          <br />
          <button type='submit'>Submit</button>
          {/* <input type='submit' value='Submit' /> */}
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
