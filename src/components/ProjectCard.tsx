import { useState } from 'react';

function ProjectCard() {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div>
        {/* <h2>Sew many projects. Sew little time...</h2> */}
        {/* {formVisible && ( */}
        <form>
          {/* Form elements go here */}
          <input type='file' name='file'></input>
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
