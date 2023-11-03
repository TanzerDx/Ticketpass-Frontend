import '../styles/Concerts.css';

function Concert(props) {



    return (
        <>
            <div className='background-color-concerts'>
                
                <div className="content">
                
                <h1>ID: {props.concertItem.id}</h1>
                
                </div>
            
            </div>
        </>
    )
}

export default Concert;