import "../styles/components/SomeText/Sometext.scss"

function SomeText(){
    return(
        <div className="some-text">
            <div className="some-text text">
                <h2>Advanced Game Search</h2>
                <p>Find and filter free-to-play games your way!</p>
            </div>
            <div className=" some-text delete-filtr">
                <p>Clear filtrs</p>
            </div>

        </div>
    );

}

export default SomeText;