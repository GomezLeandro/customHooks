import { useForm } from "../hooks/useForm";

export const FormApp = () => {

    const initialForm= {
        username:'',
        email:'',
        password:''  
}
const {username,email,password, onInputChange} =useForm (initialForm)


const handleSubmit = (event) => {
    event.preventDefault()
    console.log(username,email,password)
}

//uso del use ref
const focusRef = userRef()

useEffect(() => {
  focusRef.current.focus()
}, [])


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="username" className="form-label" aria-placeholder="Por favor ingrese su username"> Username </label>
            <input
                ref={focusRef}
                type="text" 
                className="form-control" 
                id="username" 
                name='username'
                value={username}
                onChange={onInputChange}
             />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label" aria-placeholder="Por favor ingrese su Email"> Email </label>
            <input
                 type="email" 
                 className="form-control" 
                 id="email" 
                 name='email'
                 value={email}
                 onChange={onInputChange}
             />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label" aria-placeholder="Por favor ingrese su contraseña">
              Password
            </label>
            <input
                 type="password"
                 className="form-control"
                 id="password"
                 name='password'
                 value={password}
                 onChange={onInputChange}
            />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
