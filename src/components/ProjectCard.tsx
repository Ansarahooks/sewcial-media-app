import { useState } from 'react';

function ProjectCard() {
  const [inputValue, setInputValue] = useState('');

  const [file, setFile] = useState();

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div className='form'>
        {/* <h2>Sew many projects. Sew little time...</h2> */}
        {/* {formVisible && ( */}
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
        {/* )} */}
      </div>
    </>
  );
}

export default ProjectCard;
