import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const EmployeeEdit = () =>{
    const[id, idchange] = useState("")
    const[name, namechange] = useState("")
    const[email, emailchange] = useState("")
    const[phone, phonechange] = useState("")
    const navigate = useNavigate()
    const {empid} = useParams()

    useEffect(()=>{
        fetch("http://localhost:3004/employee/"+empid)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            idchange(res.id)
            namechange(res.name)
            emailchange(res.email)
            phonechange(res.phone)
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        const empdata={id, name, email, phone}
        fetch('http://localhost:3004/employee/'+empid,{
            method:"PUT",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(empdata)
        }).then((res)=>{
            alert('create data success')
            navigate('/')
        })
    } 

    return (
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card-title">
                  <h3>Employee Create</h3>
                </div>
                <div className="card-body">
                  <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        ID
                      </label>
                      <input type="text" value={id} disabled="disabled" className="form-control" name="id" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Name
                      </label>
                      <input type="text" className="form-control" name="name" value={name} onChange={e =>namechange(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Email
                      </label>
                      <input type="email" className="form-control" name="email" value={email} onChange={e =>emailchange(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Phone
                      </label>
                      <input type="number" className="form-control" name="phone" value={phone} onChange={e =>phonechange(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary">save</button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default EmployeeEdit