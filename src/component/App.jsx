import {useState ,useEffect} from 'react';    
import axios from 'axios';
import './app.css'
    
    const  App = (props) => {
    const [users, setUsers] = useState([])
        
        useEffect(() => {
            axios.get('https://reqres.in/api/users?page=1')
                .then((response) => {
                    const result = response.data.data
                    // console.log(result)
                    setUsers(result)
                })
                .catch((error) => {
                    alert(error.message);
                })
        }, [])
        const removeUser = (id) => {
            const result = users.filter((user)=>{
        
            return user.id !== id;
            })
            setUsers(result)
        }
    return (
        <>
            <h1>Listing users - {users.length}</h1>

            <ul>
                {users.map((ele)=>{
                    const {
                        id,
                        first_name,
                        last_name
                    } = ele
                    return(<div className="btn-group" key={id}>
                        <li>{first_name} {last_name}</li>  
                        <button 
                            className='btn'
                            onClick={()=> removeUser(id)}
                        >remove</button>
                        </div>
                    )
                })}
            </ul>  
        </>
    )
    }

export default App;