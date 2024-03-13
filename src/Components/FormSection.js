export default function FormSection(){
    return `
    <section id="form-section">
        <div class="form-text">
          <h5>Kontakt os</h5>
          <h2>Vil du spørge om noget?</h2>
          <p>
            Vores dygtige medarbejdere sidder klar til at svare på dine
            spørgsmål, <br />
            uanset om det drejer sig om sikkerhed, priser eller noget helt
            fjerde.
          </p>
        </div>
        <form class="contactForm" novalidate>
          <label>
            <input
              type="text"
              name="name"
              minlength="3"
              maxlength="7"
              placeholder="Fulde navn"
              required
            />
            <span class="statusMessage"></span>
          </label>

          <label>
            <input type="email" name="email" placeholder="Email" required />
            <span class="statusMessage"></span>
          </label>
          <label>
            <textarea name="message" placeholder="Besked" required></textarea>
          </label>
          <button class="btn form-Btn" type="submit">Send Besked</button>
        </form> 
      </section>
    `;
}