import { API_ROOT } from "../lib/api-config";

export default function ContactForm() {
  return (
    <div className="eight columns" id="contactForm">
      <form
        action={API_ROOT + "/contact"}
        method="post"
        id="contactForm"
        name="contactForm"
      >
        <fieldset>
          <div>
            <label htmlFor="name">
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              defaultValue=""
              size="35"
              id="name"
              name="name"
            />
          </div>

          <div>
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="text"
              defaultValue=""
              size="35"
              id="email"
              name="email"
            />
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              defaultValue=""
              size="35"
              id="subject"
              name="subject"
            />
          </div>

          <div>
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            <textarea
              cols="50"
              rows="15"
              id="message"
              name="message"
            ></textarea>
          </div>

          <div>
            <button className="submit">Submit</button>
            <span id="image-loader">
              <img alt="" src="images/loader.gif" />
            </span>
          </div>
        </fieldset>
      </form>

      <div id="message-warning"> Error boy</div>
      <div id="message-success">
        <i className="fa fa-check"></i>Your message was sent, thank you!
        <br />
      </div>
    </div>
  );
}
