import React, { useEffect } from "react";
import "./MailerLiteForm.css";
import styles from "./Form.module.css";

function Form() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.async = true;
    script.onload = () => {
      window.ml("account", "433202");
      const formScript = document.createElement("script");
      formScript.src =
        "https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127";
      formScript.async = true;
      document.body.appendChild(formScript);

      formScript.onload = () => {
        const formContainer = document.querySelector(".ml-embedded");
        formContainer.innerHTML = `
          <div id="mlb2-16102652" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-16102652 ${styles.customForm}">
            <div class="ml-form-align-center">
              <div class="ml-form-embedWrapper embedForm">
                <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
                  <div class="ml-form-embedContent">
                    <h4>Zapisz się na darmową konsultację<span class="blue">.</span></h4>
                    <p>Wypełnij formularz. Nasz trener oddzwoni do Ciebie jeszcze dziś. Umówicie termin darmowej konsultacji.</p>
                  </div>
                  <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/433202/forms/125762627324347534/subscribe" method="post" target="_blank">
                    <div class="ml-form-formContent">
                      <div class="ml-form-fieldRow">
                        <div class="ml-field-group ml-field-name">
                          <input aria-label="name" type="text" class="form-control" name="fields[name]" placeholder="Imię" autocomplete="given-name">
                        </div>
                      </div>
                      <div class="ml-form-fieldRow">
                        <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                          <input aria-label="email" aria-required="true" type="email" class="form-control" name="fields[email]" placeholder="Email" autocomplete="email">
                        </div>
                      </div>
                      <div class="ml-form-fieldRow ml-last-item">
                        <div class="ml-field-group ml-field-phone ml-validate-required">
                          <input aria-label="phone" aria-required="true" type="text" class="form-control" name="fields[phone]" placeholder="Numer telefonu">
                        </div>
                      </div>
                    </div>
                    <div class="ml-form-checkboxRow ml-validate-required">
                      <label class="checkbox">
                        <input type="checkbox">
                        <div class="label-description">
                          <p>Wyrażam zgodę na przetwarzanie moich danych osobowych i kontakt telefoniczny w celu umówienia pierwszego spotkania.</p>
                        </div>
                      </label>
                    </div>
                    <input type="hidden" name="ml-submit" value="1">
                    <div class="ml-form-embedSubmit">
                      <button type="submit" class="primary">Wyślij wiadomość</button>
                      <button disabled="disabled" style="display: none;" type="button" class="loading">
                        <div class="ml-form-embedSubmitLoad"></div>
                        <span class="sr-only">Loading...</span>
                      </button>
                    </div>
                    <input type="hidden" name="anticsrf" value="true">
                  </form>
                </div>
                <div class="ml-form-successBody row-success" style="display: none">
                  <div class="ml-form-successContent">
                    <h4>Thank you!</h4>
                    <p>You have successfully joined our subscriber list.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      };
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="form" className={styles.formSection}>
      <div className={styles.overlay}>
        <div className="ml-embedded" data-form="6R287r"></div>
      </div>
    </section>
  );
}

export default Form;
