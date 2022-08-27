import { useSelector, useDispatch } from "react-redux"


const ReducersCach = () => {
    const addCash = (cash) => {
        dispatch({ type: 'ADD_CASH', payload: cash })
    }

    const getCash = (cash) => {
        dispatch({ type: 'GET_CASH', payload: cash })
    }
    const cash = useSelector(state => state.cash);
    const dispatch = useDispatch()
    console.log(cash);
    return (

        <div>
            <h2> {cash}</h2>
            <div>
                <button onClick={() => addCash(+(prompt()))}>Пополнить счет</button>
                <button onClick={() => getCash(+(prompt()))}>Снять со счета</button>
            </div>

        </div>

    )

}
export default ReducersCach