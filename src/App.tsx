import {useState} from 'react';
import * as C from './App.style';
import {Item} from './types/Item'
import { ListItem } from './components/ListItem';


const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar pao na padaria', done: false},
    {id: 2, name: 'Comprar bolo na padaria', done: false}

  ]);

  return(
    <C.Container>
      <C.Content>
        <C.Header>Lista de Tarefas</C.Header>

        {list.map((item, index) => (
            <ListItem key={index} item={item}/>
          ))}

      </C.Content>
    </C.Container>
  );
}

export default App;