import PropTypes from 'prop-types'

function Item(marca, ano_lancamento) {
    return(
        <>
        <li>
            {marca} - {ano_lancamento}
        </li>
        <p>desenvolvido por Gustavo</p>
        </>
    )
}

Item.propTypes = {
    marca: Proptypes.string,
}

export default Item;