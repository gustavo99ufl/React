import Item from './Item';

function List() {
    return(
        <>
        <div>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={1985}/>
                <Item marca='Volkswagen' ano_lancamento={1964}/>
                <Item marca='Renault' ano_lancamento={1980}/>
            </ul>
        </div>
        </>
    )
}

export default List