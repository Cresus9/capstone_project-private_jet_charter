import React,{ useState } from 'react'

export default function EditProfil({user, setUser}) {
    const UpdateBody= {
        first_name : "",
        last_name: "",
        email: "",
        password: ""
      }

    const [updated, setUpdated]=useState({...UpdateBody})
    const [errors, setErrors] = useState([])

    const changeHandler = (e) =>{
        setUpdated({
            ...updated,
            [e.target.name]:e.target.value
        })
    }

    const formHandler= (e) =>{
        e.preventDefault()
        fetch(`/members/${user.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updated),
		})
			.then((res) => {
				if (res.ok) {
					res.json().then((user) => {
						setUser(user);
					});
				} else {
					res.json().then((data) => setErrors(data.errors));
				}
			})
    }

  return (
    <div>
        <form onSubmit={formHandler}  className='sigup_form'>
            <h1 className='moi'>Update Profile Info</h1>
            <span className='signup_div'>
                <label> First Name:
                <input
                    className='sign'
                    name='first_name'
                    placeholder=''
                    value={updated.first_name}
                    onChange={changeHandler}
                />
                </label>
                <label> Last Name:
                <input
                    className='sign'
                    name='last_name'
                    placeholder=''
                    value={updated.last_name}
                    onChange={changeHandler}
                />
                </label>
                <label> Email:
                <input 
                    className='sign'
                    name='email'
                    placeholder=''
                    value={updated.email}
                    onChange={changeHandler}
                />
                </label>
                <label> Password:
                <input
                    className='sign'
                    name='password'
                    placeholder=''
                    value={updated.password}
                    onChange={changeHandler}
                />
                </label>
                {/* <input 
                    name='confirmPassword'
                    placeholder=''
                    // value={}
                /> */}
                <button  className='signbtn' type="submit">Submit</button>
            </span>
        </form>
    </div>
  )
}
