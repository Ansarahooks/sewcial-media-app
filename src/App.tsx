import ListGroup from './components/ListGroup.tsx';

function App() {
  const items = ['New York', 'Tokyo', 'London', 'Paris'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={'Cities'}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
