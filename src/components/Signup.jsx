

const Signup =()=>{

    /*
    function handleSubmit(e){
        e.preventDefault();
      
        emailjs.sendForm('service_eick8wc', 'template_32ntqbg', e.target, '4tarkWwFT1FS6sm7H')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
      */

    return(
        <section id="signup">
            <div className="container">

                <div className="form-heading">
                    <h2>Sign-Up for Newsletter</h2>
                </div>
                
                <form
                    action=""
                    /*onSubmit={handleSubmit}*/
                    /*action="contact.php"*/
                    method="POST"
                    target="_blank"
                    className="contactForm"
                
                    >
                        <div className="left-field">
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" />
                        </div>
                        <div className="right-field">
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" />
                        </div>
                        <div style={{clear: "both"}}></div>

                            <label for="email">Email</label>
                            <input type="text" id="email" name="email" />

                            <label for="phone">Phone No</label>
                            <input type="text" id="phone" name="phone" />
                        
                        <input type="submit" value="Subscribe" />

                </form>
            </div>
        </section>
    );
}

export default Signup;