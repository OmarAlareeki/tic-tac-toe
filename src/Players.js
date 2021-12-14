import './App.css';

const Players = () => {
    return (
        <form>
            <label htmlFor='player1name' type='text' name='player1'>PlayerX </label>
            <input />
            <div></div>
            <label htmlFor='player2name' type='text' name='player2'>PlayerO</label>
            <input />
            <button className='start'>Start</button>
        </form>

    )
}

export default Players
