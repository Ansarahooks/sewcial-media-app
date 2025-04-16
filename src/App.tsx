import { useState } from 'react';
import ProjectDisplay from './components/ProjectDisplay.tsx';
import Dashboard from '../src/components/Dashboard.tsx';

interface Props {
  formVisible: boolean;
}

function App({ formVisible }: Props) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
    console.log(showForm);
  };

  return (
    <>
      <h1>Sewcial Media</h1>
      <button onClick={() => handleClick()}>Add New Project!</button>
      <ProjectDisplay formVisible={showForm} />
      <Dashboard />
    </>
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
