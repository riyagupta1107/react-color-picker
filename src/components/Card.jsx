import logo from '../assets/react.svg'
function Card() {
    return (
        <div className="card">
            <img src={logo} alt="profile"></img>
            <h2>Card Component</h2>
            <p>This is a Card Component</p>
        </div>
    );  
}
export default Card