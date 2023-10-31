import React, { useState } from "react";

function RegistrationForm(){
    let errorText = document.getElementsByTagName('small');

    const [formData,setFormData] = useState({name:'',email:'',phone:'',color:'blue',password:'',confirmPassword:''});
    const [isSubmit,setIsSubmit] = useState(false);

    const handleChange = (event) => {
        const { name, value} = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        Array.from(errorText).forEach(element => {
            element.style.display = 'block';
        });

        if(formData.name !== '' && formData.email !== '' && formData.phone !== ''){
            if(formData.password === formData.confirmPassword && formData.password !== ''){
                setIsSubmit(true);
            }else{
                setIsSubmit(false);
                alert("Password does not match!");
            }
        }else{
            setIsSubmit(false);
            alert("Fill the input form data!");
        }
        
    }

    const handleCard = (event) => {
       setIsSubmit(false);
    };

    return (
        <div className="form-section">
            <div className="section-left-side">

            {
                !isSubmit ?
                <form action="" className="reg-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name :</label><br/>
                    <input type="text" name="name" id="name" className="reg-form-input" placeholder="Enter your name" value={formData.name} onChange={handleChange}/>
                    {
                        formData.name === '' ? <small id="input-error">Name is empty</small> : ''
                    }
                    <br></br>

                    <label htmlFor="email">Email :</label><br/>
                    <input type="email" name="email" id="email" className="reg-form-input" placeholder="Enter your email" value={formData.email} onChange={handleChange}/>
                    {
                        formData.email === '' ? <small id="input-error">Email is empty</small> : <span>&nbsp;</span>
                    }
                    <br></br>

                    <label htmlFor="phone">Phone No :</label><br/>
                    <input type="phone" name="phone" id="phone" className="reg-form-input" placeholder="Enter your phone" value={formData.phone} onChange={handleChange}/>
                    {
                        formData.phone === '' ? <small id="input-error">Phone number is empty</small> : ''
                    }
                    <br></br>

                    <label>Choose Color :</label><br/><br/>
                    <div className="radio">
                    <label htmlFor="rad1" id="red">
                        <input
                        type="radio"
                        id="rad1"
                        name="color"
                        value="red"
                        checked={formData.color === "red"}
                        onChange={handleChange}
                        />
                        &nbsp;Red
                    </label>
                    </div>

                    <div className="radio">
                    <label htmlFor="rad2" id="green">
                        <input
                        type="radio"
                        id="rad2"
                        name="color"
                        value="green"
                        checked={formData.color === "green"}
                        onChange={handleChange}
                        />
                        &nbsp;Green
                    </label>
                    </div>

                    <div className="radio">
                    <label id="blue" htmlFor="rad3">
                        <input
                        type="radio"
                        id="rad3"
                        name="color"
                        value="blue"
                        checked={formData.color === "blue"}
                        onChange={handleChange}
                        />
                        &nbsp;Blue
                    </label>
                    </div><br/><br/>

                    <label htmlFor="password">Password :</label><br/>
                    <input type="password" name="password" id="password" className="reg-form-input" placeholder="Enter your password" value={formData.password} onChange={handleChange}/>
                    {
                        formData.password === '' ? <small id="input-error">Password is empty</small> : ''
                    }
                    <br></br>

                    <label htmlFor="confirmPassword">Comfirm Password :</label><br/>
                    <input type="password" name="confirmPassword" id="confirmPassword" className="reg-form-input" placeholder="Comfirm your password" value={formData.confirmPassword} onChange={handleChange}/>
                    {
                        formData.confirmPassword === '' ? <small id="input-error">Confirm Password is empty</small> : ''
                    }
                    <br></br>

                    <input type="submit" name="submit" id="submit" className="submit-btn" value="Submit"/><br/>
                </form>
                : ''
            }
            </div>
            
            <div className="section-right-side">
            {
                isSubmit ? <div id="card" className="user-card" style={{background:`${formData.color}`}} onClick={handleCard}>
                    <h2 className="user-info-header">User Information</h2>
                        <div className="card-body">
                            <p>Name : {formData.name}</p><br></br>
                            <p>Email : {formData.email}</p><br></br>
                            <p>Phone : {formData.phone}</p><br></br>
                            <p>Password : {formData.password}</p><br></br>
                        </div>
                    </div> : ''
            }    
            </div>
        </div>  
    );
}

export default RegistrationForm;