import React from "react";
import { useState } from "react";

const Contact = () => {


     const [data, setData] = useState({

          fname: "",
          phone: "",
          email: "",
          msg: "",
     });

     const InputEvent = (event) =>{
          const{name , value} = event.target;
          setData((preVal) =>{

               return{
                    ...preVal,
                    [name] : value,
               };
          });

     };
     const formSubmit = (e) =>{
          e.preventDefault();
          
          alert(` Your Name : ${data.fname} ,,,  Your phone Number is : ${data.phone} ,,, Your email is : ${data.fname},,, Message : ${data.msg} `);

     }



  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            
             <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fname"
                  value={data.fname}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Mobile Number
                </label>
                <input
                  required
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                required
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                     name="msg"
                     value={data.msg}
                     onChange={InputEvent}

                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <br/>
              <div className="col-12">
                 
             <button onClick = {formSubmit} className="btn-lg btn-outline-info" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
