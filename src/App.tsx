import ProjectDisplay from './components/ProjectDisplay.tsx';
import Dashboard from '../src/components/Dashboard.tsx';

function App() {
  return (
    <>
      <h1>Sewcial Media</h1>
      <button>Add New Project!</button>
      <ProjectDisplay />
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
