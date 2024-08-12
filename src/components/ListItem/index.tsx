import { Item } from '../../types/Item';
import * as C from './styles'


type Props = {
    item: Item;
}
export const ListItem = ({item}:Props) => {
    return(
        <C.Container>
            <input type="checkbox" />
            <label>{item.name}</label>
        </C.Container>
    );
}