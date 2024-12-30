import GitHub from "../Images/Github.png"
import Email from "../Images/Email-logo.png"
import Phone from "../Images/Phone-Contact.png"
import LinkedIn from "../Images/Linked-in.png"

function Contact(){

    return(
        <div className="contacts-page">
            <div className="contacts-container">
                <div className="contact-slice">
                    <div className="contact">
                        <div className="contact-img">
                            <img src={GitHub} alt="" />
                        </div>
                        <div className="contact-text">
                            https://github.com/Not-Will-S
                        </div> 
                    </div>

                    <div className="contact">
                        <div className="contact-img">
                            <img src={Email} alt="" />
                        </div>
                        <div className="contact-text">
                            w.smith01001@gmail.com
                        </div>
                    </div>  
                </div>



                <div className="contact-slice">
                    <div className="contact">
                        <div className="contact-img">
                            <img src={Phone} alt="" />
                        </div>
                        <div className="contact-text">
                            07341273626
                        </div> 
                    </div>

                    <div className="contact">
                        <div className="contact-img">
                            <img src={LinkedIn} alt="" />
                        </div>
                        <div className="contact-text">
                            https://www.linkedin.com/in/will-smith-9522b22ab/
                        </div>
                    </div>  
                </div> 

            </div>
            
        </div>
    )
}

export default Contact