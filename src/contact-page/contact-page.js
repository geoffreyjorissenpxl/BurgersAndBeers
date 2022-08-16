import './contact-page.css';
import emailjs from 'emailjs-com';

const ContactPage = () => {

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm("myRestaurantApp", "template_bt9nctg", e.target, "qGUEhlJj5ITF3YXcl")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }
    return (
      <div className="contact-body">
        <div class="wrapper">
        <div className="grid-container">
          <div className="reservation-card">
            <div className="reservation-title">
              RESERVATIONS</div>
            <p>For reservations please contact on us</p>
            <p>089 67 85 32</p>
          </div>

          <div>
            <table>
              <tr>
                <th>
                  OPENING HOURS 
                </th>
              </tr>
              <tr>
                <td>
                  <strong>MONDAY</strong>
                </td>
                <td>
                  <strong>closed</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>TUESDAY</strong>
                </td>
                <td>12h00 - 22h00</td>
              </tr>
              <tr>
                <td>
                  <strong>WEDNESDAY</strong>
                </td>
                <td>12h00 - 22h00</td>
              </tr>
              <tr>
                <td>
                  <strong>THURSDAY</strong>
                </td>
                <td>12h00 - 22h00</td>
              </tr>
              <tr>
                <td>
                  <strong>FRIDAY</strong>
                </td>
                <td>12h00 - 00h00</td>
              </tr>
              <tr>
                <td>
                  <strong>SATURDAY</strong>
                </td>
                <td>12h00 - 00h00</td>
              </tr>
              <tr>
                <td>
                  <strong>SUNDAY</strong>
                </td>
                <td>12h00 - 23h00</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="form-container">
          <div className="reservation-title">CONTACT US THROUGH MAIL</div>
          <form onSubmit={sendEmail}>
            <input placeholder="name" name='name' />
            <br />
            <input placeholder="email" name='email' />
            <br />
            <subject placeholder="subject" name='subject' /><br/>
            <textarea type="text" placeholder="message" name='message' />
            <br />
            <input type="submit" value="Submit" className='form-button' />
          </form>
        </div>

        </div>
        
      </div>
    );
}
 
export default ContactPage;