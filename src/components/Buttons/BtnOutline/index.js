import './style.css'

const BtnOutline = (handleLogin) =>{
    return (
        <button className="btn btn-outline w-100" onClick={handleLogin}>
          Login
        </button>
    )
} 

export default BtnOutline;