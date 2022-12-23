import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const EmployeeTable = () =>{

    const [empdata, empdatachange] = useState(null)
    const navigate = useNavigate() 
    const RemoveData = (id) =>{
        if (window.confirm("Do you want remove?")) {
            fetch('http://localhost:3004/employee/'+ id, {
                method:"DELETE"
            }).then((res)=>{
                alert("remove successuly")
                window.location.reload()
            }).catch((err)=>{
                console.log(err.message)
            })
        }
    }
    const LoadEdit = (id) =>{
        navigate('/employee/edit/' + id)
    }
    useEffect(()=>{
        fetch('http://localhost:3004/employee')
        .then((res)=>{
            return res.json()
        }).then((res)=>{
            empdatachange(res)
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    Employee table
                </div>
                <div className="card-body">
                <Link to="/employee/create" className="btn btn-primary">
                    Add Data
                </Link>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            empdata &&
                                empdata.map((item)=>(
                                    <tr key={item.id}>
                                        <td>{item.id}</td>  
                                        <td>{item.name}</td>  
                                        <td>{item.email}</td>  
                                        <td>{item.phone}</td>
                                        <td>
                                            <a href="" className="btn btn-warning" onClick={()=>{LoadEdit(item.id)}}  >edit</a>
                                            <a href="" className="btn btn-danger" onClick={()=>{RemoveData(item.id)}} >delete</a>
                                        </td>  
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeTable