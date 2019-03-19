import React, { Component } from 'react';

const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

const formValid = ({formErrors, ...rest}) => {
  let valid = true;

  // validate form errors being empty
  Object.value(formErrors).forEach(val => {val.length > 0 && (valid = false);});

  // validate the form was filled out
  Object.values(rest).forEach(val => {val === null && (valid = false);});

  return valid;
}

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: null,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
      companyName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  };
}

  handleSubmit = e => {
    e.preventDefault();

    if(formValid(this.state)) {
      console.log(`
      --SUBMITTING--
      Company Name: ${this.state.companyName}
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Email: ${this.state.email}
      Password: ${this.state.password}
      Confirm Password: ${this.state.confirmPassword}
      Country: ${this.state.country}
      Time Zone: ${this.state.timeZone}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE")
    }
  };

  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'companyName': 
        formErrors.companyName = value.length < 2 && value.length > 0 ? "minimum 2 characters required" : "";
        break;
      case 'firstName': 
        formErrors.firstName = value.length < 2 && value.length > 0 ? "minimum 2 characters required" : "";
        break;
      case 'lastName': 
        formErrors.firstName = value.length < 2 && value.length > 0 ? "minimum 2 characters required" : "";
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) && value.length > 0 ? "" : "invalid email address";
        break;
      case 'password':
        formErrors.pasword = value.length < 2 && value.length > 0 ? "minimum 2 characters required" : "";
        break;
      case 'confirmPassword':
        formErrors.pasword = value.length < 2 && value.length > 0 ? "minimum 2 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors} = this.state;

    return(
      <div className="loginBox">
      <h1><strong>New Company</strong></h1>
      <h4>Register new company account and supervisor user</h4>
      <form>
      <p>Company Name</p>
            <input type="text" className={formErrors.companyName.length > 0 ? "error" : null} placeholder="Enter Company Name" name="CompanyName" noValidate onChange={this.handleChange} />
            {formErrors.companyName.length > 0 && (
              <span className="errorMessage">{formErrors.companyName}</span>
            )}
            <p>First Name</p>
            <input type="text" className={formErrors.firstName.length > 0 ? "error" : null} placeholder="Enter First Name" name="firstName" noValidate onChange={this.handleChange} />
            {formErrors.firstName.length > 0 && (
              <span className="errorMessage">{formErrors.firstName}</span>
            )}
          <p>Last Name</p>
          <input type="text" className={formErrors.lastName.length > 0 ? "error" : null} placeholder="Enter Last Name" name="lastName" noValidate onChange={this.handleChange} />
          {formErrors.lastName.length > 0 && (
              <span className="errorMessage">{formErrors.lastName}</span>
          )}
          <p>Email Address</p>
          <input type="text" className={formErrors.email.length > 0 ? "error" : null} placeholder="Enter Email Here" name="email" noValidate onChange={this.handleChange} />
          {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
          )}
          <p>Password</p>
          <input type="password" className={formErrors.password.length > 0 ? "error" : null} placeholder="Enter Password Here" name="password" noValidate onChange={this.handleChange} />
          {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
          )}
          <p>Confirm Password</p>
          <input type="password" className={formErrors.confirmPassword.length > 0 ? "error" : null} placeholder="Re-enter Password Here" name="confirmPassword" noValidate onChange={this.handleChange} />
          {formErrors.confirmPassword.length > 0 && (
              <span className="errorMessage">{formErrors.confirmPassword}</span>
          )}
          <div>
          <label for="country">Country</label>
          <select name="country" class="form-control" id="country">
            <option value="true">Choose Country</option>
            <option value="AFG">Afghanistan</option>
            <option value="ALA">Åland Islands</option>
            <option value="ALB">Albania</option>
            <option value="DZA">Algeria</option>
            <option value="ASM">American Samoa</option>
            <option value="AND">Andorra</option>
            <option value="AGO">Angola</option>
            <option value="AIA">Anguilla</option>
            <option value="ATA">Antarctica</option>
            <option value="ATG">Antigua and Barbuda</option>
            <option value="ARG">Argentina</option>
            <option value="ARM">Armenia</option>
            <option value="ABW">Aruba</option>
            <option value="AUS">Australia</option>
            <option value="AUT">Austria</option>
            <option value="AZE">Azerbaijan</option>
            <option value="BHS">Bahamas</option>
            <option value="BHR">Bahrain</option>
            <option value="BGD">Bangladesh</option>
            <option value="BRB">Barbados</option>
            <option value="BLR">Belarus</option>
            <option value="BEL">Belgium</option>
            <option value="BLZ">Belize</option>
            <option value="BEN">Benin</option>
            <option value="BMU">Bermuda</option>
            <option value="BTN">Bhutan</option>
            <option value="BOL">Bolivia, Plurinational State of</option>
            <option value="BES">Bonaire, Sint Eustatius and Saba</option>
            <option value="BIH">Bosnia and Herzegovina</option>
            <option value="BWA">Botswana</option>
            <option value="BVT">Bouvet Island</option>
            <option value="BRA">Brazil</option>
            <option value="IOT">British Indian Ocean Territory</option>
            <option value="BRN">Brunei Darussalam</option>
            <option value="BGR">Bulgaria</option>
            <option value="BFA">Burkina Faso</option>
            <option value="BDI">Burundi</option>
            <option value="KHM">Cambodia</option>
            <option value="CMR">Cameroon</option>
            <option value="CAN">Canada</option>
            <option value="CPV">Cape Verde</option>
            <option value="CYM">Cayman Islands</option>
            <option value="CAF">Central African Republic</option>
            <option value="TCD">Chad</option>
            <option value="CHL">Chile</option>
            <option value="CHN">China</option>
            <option value="CXR">Christmas Island</option>
            <option value="CCK">Cocos (Keeling) Islands</option>
            <option value="COL">Colombia</option>
            <option value="COM">Comoros</option>
            <option value="COG">Congo</option>
            <option value="COD">Congo, the Democratic Republic of the</option>
            <option value="COK">Cook Islands</option>
            <option value="CRI">Costa Rica</option>
            <option value="CIV">Côte d'Ivoire</option>
            <option value="HRV">Croatia</option>
            <option value="CUB">Cuba</option>
            <option value="CUW">Curaçao</option>
            <option value="CYP">Cyprus</option>
            <option value="CZE">Czech Republic</option>
            <option value="DNK">Denmark</option>
            <option value="DJI">Djibouti</option>
            <option value="DMA">Dominica</option>
            <option value="DOM">Dominican Republic</option>
            <option value="ECU">Ecuador</option>
            <option value="EGY">Egypt</option>
            <option value="SLV">El Salvador</option>
            <option value="GNQ">Equatorial Guinea</option>
            <option value="ERI">Eritrea</option>
            <option value="EST">Estonia</option>
            <option value="ETH">Ethiopia</option>
            <option value="FLK">Falkland Islands (Malvinas)</option>
            <option value="FRO">Faroe Islands</option>
            <option value="FJI">Fiji</option>
            <option value="FIN">Finland</option>
            <option value="FRA">France</option>
            <option value="GUF">French Guiana</option>
            <option value="PYF">French Polynesia</option>
            <option value="ATF">French Southern Territories</option>
            <option value="GAB">Gabon</option>
            <option value="GMB">Gambia</option>
            <option value="GEO">Georgia</option>
            <option value="DEU">Germany</option>
            <option value="GHA">Ghana</option>
            <option value="GIB">Gibraltar</option>
            <option value="GRC">Greece</option>
            <option value="GRL">Greenland</option>
            <option value="GRD">Grenada</option>
            <option value="GLP">Guadeloupe</option>
            <option value="GUM">Guam</option>
            <option value="GTM">Guatemala</option>
            <option value="GGY">Guernsey</option>
            <option value="GIN">Guinea</option>
            <option value="GNB">Guinea-Bissau</option>
            <option value="GUY">Guyana</option>
            <option value="HTI">Haiti</option>
            <option value="HMD">Heard Island and McDonald Islands</option>
            <option value="VAT">Holy See (Vatican City State)</option>
            <option value="HND">Honduras</option>
            <option value="HKG">Hong Kong</option>
            <option value="HUN">Hungary</option>
            <option value="ISL">Iceland</option>
            <option value="IND">India</option>
            <option value="IDN">Indonesia</option>
            <option value="IRN">Iran, Islamic Republic of</option>
            <option value="IRQ">Iraq</option>
            <option value="IRL">Ireland</option>
            <option value="IMN">Isle of Man</option>
            <option value="ISR">Israel</option>
            <option value="ITA">Italy</option>
            <option value="JAM">Jamaica</option>
            <option value="JPN">Japan</option>
            <option value="JEY">Jersey</option>
            <option value="JOR">Jordan</option>
            <option value="KAZ">Kazakhstan</option>
            <option value="KEN">Kenya</option>
            <option value="KIR">Kiribati</option>
            <option value="PRK">Korea, Democratic People's Republic of</option>
            <option value="KOR">Korea, Republic of</option>
            <option value="KWT">Kuwait</option>
            <option value="KGZ">Kyrgyzstan</option>
            <option value="LAO">Lao People's Democratic Republic</option>
            <option value="LVA">Latvia</option>
            <option value="LBN">Lebanon</option>
            <option value="LSO">Lesotho</option>
            <option value="LBR">Liberia</option>
            <option value="LBY">Libya</option>
            <option value="LIE">Liechtenstein</option>
            <option value="LTU">Lithuania</option>
            <option value="LUX">Luxembourg</option>
            <option value="MAC">Macao</option>
            <option value="MKD">Macedonia, the former Yugoslav Republic of</option>
            <option value="MDG">Madagascar</option>
            <option value="MWI">Malawi</option>
            <option value="MYS">Malaysia</option>
            <option value="MDV">Maldives</option>
            <option value="MLI">Mali</option>
            <option value="MLT">Malta</option>
            <option value="MHL">Marshall Islands</option>
            <option value="MTQ">Martinique</option>
            <option value="MRT">Mauritania</option>
            <option value="MUS">Mauritius</option>
            <option value="MYT">Mayotte</option>
            <option value="MEX">Mexico</option>
            <option value="FSM">Micronesia, Federated States of</option>
            <option value="MDA">Moldova, Republic of</option>
            <option value="MCO">Monaco</option>
            <option value="MNG">Mongolia</option>
            <option value="MNE">Montenegro</option>
            <option value="MSR">Montserrat</option>
            <option value="MAR">Morocco</option>
            <option value="MOZ">Mozambique</option>
            <option value="MMR">Myanmar</option>
            <option value="NAM">Namibia</option>
            <option value="NRU">Nauru</option>
            <option value="NPL">Nepal</option>
            <option value="NLD">Netherlands</option>
            <option value="NCL">New Caledonia</option>
            <option value="NZL">New Zealand</option>
            <option value="NIC">Nicaragua</option>
            <option value="NER">Niger</option>
            <option value="NGA">Nigeria</option>
            <option value="NIU">Niue</option>
            <option value="NFK">Norfolk Island</option>
            <option value="MNP">Northern Mariana Islands</option>
            <option value="NOR">Norway</option>
            <option value="OMN">Oman</option>
            </select>
            </div>
            <div>
                <label for="timeZone">Time-Zone</label>
                <select name="timeZone" class="form-control" id="timeZone">
                    <option value="true">Choose Time-Zone</option>
                    <option timezoneid="1" gmtadjustment="GMT-12:00" usedaylighttime="0" value="-12">(GMT-12:00) International Date Line West</option>
                    <option timezoneid="2" gmtadjustment="GMT-11:00" usedaylighttime="0" value="-11">(GMT-11:00) Midway Island, Samoa</option>
                    <option timezoneid="3" gmtadjustment="GMT-10:00" usedaylighttime="0" value="-10">(GMT-10:00) Hawaii</option>
                    <option timezoneid="4" gmtadjustment="GMT-09:00" usedaylighttime="1" value="-9">(GMT-09:00) Alaska</option>
                    <option timezoneid="5" gmtadjustment="GMT-08:00" usedaylighttime="1" value="-8">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                    <option timezoneid="6" gmtadjustment="GMT-08:00" usedaylighttime="1" value="-8">(GMT-08:00) Tijuana, Baja California</option>
                    <option timezoneid="7" gmtadjustment="GMT-07:00" usedaylighttime="0" value="-7">(GMT-07:00) Arizona</option>
                    <option timezoneid="8" gmtadjustment="GMT-07:00" usedaylighttime="1" value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                    <option timezoneid="9" gmtadjustment="GMT-07:00" usedaylighttime="1" value="-7">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                    <option timezoneid="10" gmtadjustment="GMT-06:00" usedaylighttime="0" value="-6">(GMT-06:00) Central America</option>
                    <option timezoneid="11" gmtadjustment="GMT-06:00" usedaylighttime="1" value="-6">(GMT-06:00) Central Time (US &amp; Canada)</option>
                    <option timezoneid="12" gmtadjustment="GMT-06:00" usedaylighttime="1" value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                    <option timezoneid="13" gmtadjustment="GMT-06:00" usedaylighttime="0" value="-6">(GMT-06:00) Saskatchewan</option>
                    <option timezoneid="14" gmtadjustment="GMT-05:00" usedaylighttime="0" value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                    <option timezoneid="15" gmtadjustment="GMT-05:00" usedaylighttime="1" value="-5">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                    <option timezoneid="16" gmtadjustment="GMT-05:00" usedaylighttime="1" value="-5">(GMT-05:00) Indiana (East)</option>
                    <option timezoneid="17" gmtadjustment="GMT-04:00" usedaylighttime="1" value="-4">(GMT-04:00) Atlantic Time (Canada)</option>
                    <option timezoneid="18" gmtadjustment="GMT-04:00" usedaylighttime="0" value="-4">(GMT-04:00) Caracas, La Paz</option>
                    <option timezoneid="19" gmtadjustment="GMT-04:00" usedaylighttime="0" value="-4">(GMT-04:00) Manaus</option>
                    <option timezoneid="20" gmtadjustment="GMT-04:00" usedaylighttime="1" value="-4">(GMT-04:00) Santiago</option>
                    <option timezoneid="21" gmtadjustment="GMT-03:30" usedaylighttime="1" value="-3.5">(GMT-03:30) Newfoundland</option>
                    <option timezoneid="22" gmtadjustment="GMT-03:00" usedaylighttime="1" value="-3">(GMT-03:00) Brasilia</option>
                    <option timezoneid="23" gmtadjustment="GMT-03:00" usedaylighttime="0" value="-3">(GMT-03:00) Buenos Aires, Georgetown</option>
                    <option timezoneid="24" gmtadjustment="GMT-03:00" usedaylighttime="1" value="-3">(GMT-03:00) Greenland</option>
                    <option timezoneid="25" gmtadjustment="GMT-03:00" usedaylighttime="1" value="-3">(GMT-03:00) Montevideo</option>
                    <option timezoneid="26" gmtadjustment="GMT-02:00" usedaylighttime="1" value="-2">(GMT-02:00) Mid-Atlantic</option>
                    <option timezoneid="27" gmtadjustment="GMT-01:00" usedaylighttime="0" value="-1">(GMT-01:00) Cape Verde Is.</option>
                    <option timezoneid="28" gmtadjustment="GMT-01:00" usedaylighttime="1" value="-1">(GMT-01:00) Azores</option>
                    <option timezoneid="29" gmtadjustment="GMT+00:00" usedaylighttime="0" value="0">(GMT+00:00) Casablanca, Monrovia, Reykjavik</option>
                    <option timezoneid="30" gmtadjustment="GMT+00:00" usedaylighttime="1" value="0">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option>
                    <option timezoneid="31" gmtadjustment="GMT+01:00" usedaylighttime="1" value="1">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
                    <option timezoneid="32" gmtadjustment="GMT+01:00" usedaylighttime="1" value="1">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
                    <option timezoneid="33" gmtadjustment="GMT+01:00" usedaylighttime="1" value="1">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
                    <option timezoneid="34" gmtadjustment="GMT+01:00" usedaylighttime="1" value="1">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
                    <option timezoneid="35" gmtadjustment="GMT+01:00" usedaylighttime="1" value="1">(GMT+01:00) West Central Africa</option>
                    <option timezoneid="36" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Amman</option>
                    <option timezoneid="37" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Athens, Bucharest, Istanbul</option>
                    <option timezoneid="38" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Beirut</option>
                    <option timezoneid="39" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Cairo</option>
                    <option timezoneid="40" gmtadjustment="GMT+02:00" usedaylighttime="0" value="2">(GMT+02:00) Harare, Pretoria</option>
                    <option timezoneid="41" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
                    <option timezoneid="42" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Jerusalem</option>
                    <option timezoneid="43" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Minsk</option>
                    <option timezoneid="44" gmtadjustment="GMT+02:00" usedaylighttime="1" value="2">(GMT+02:00) Windhoek</option>
                    <option timezoneid="45" gmtadjustment="GMT+03:00" usedaylighttime="0" value="3">(GMT+03:00) Kuwait, Riyadh, Baghdad</option>
                    <option timezoneid="46" gmtadjustment="GMT+03:00" usedaylighttime="1" value="3">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
                    <option timezoneid="47" gmtadjustment="GMT+03:00" usedaylighttime="0" value="3">(GMT+03:00) Nairobi</option>
                    <option timezoneid="48" gmtadjustment="GMT+03:00" usedaylighttime="0" value="3">(GMT+03:00) Tbilisi</option>
                    <option timezoneid="49" gmtadjustment="GMT+03:30" usedaylighttime="1" value="3.5">(GMT+03:30) Tehran</option>
                    <option timezoneid="50" gmtadjustment="GMT+04:00" usedaylighttime="0" value="4">(GMT+04:00) Abu Dhabi, Muscat</option>
                    <option timezoneid="51" gmtadjustment="GMT+04:00" usedaylighttime="1" value="4">(GMT+04:00) Baku</option>
                    <option timezoneid="52" gmtadjustment="GMT+04:00" usedaylighttime="1" value="4">(GMT+04:00) Yerevan</option>
                    <option timezoneid="53" gmtadjustment="GMT+04:30" usedaylighttime="0" value="4.5">(GMT+04:30) Kabul</option>
                    <option timezoneid="54" gmtadjustment="GMT+05:00" usedaylighttime="1" value="5">(GMT+05:00) Yekaterinburg</option>
                    <option timezoneid="55" gmtadjustment="GMT+05:00" usedaylighttime="0" value="5">(GMT+05:00) Islamabad, Karachi, Tashkent</option>
                    <option timezoneid="56" gmtadjustment="GMT+05:30" usedaylighttime="0" value="5.5">(GMT+05:30) Sri Jayawardenapura</option>
                    <option timezoneid="57" gmtadjustment="GMT+05:30" usedaylighttime="0" value="5.5">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
                    <option timezoneid="58" gmtadjustment="GMT+05:45" usedaylighttime="0" value="5.75">(GMT+05:45) Kathmandu</option>
                    <option timezoneid="59" gmtadjustment="GMT+06:00" usedaylighttime="1" value="6">(GMT+06:00) Almaty, Novosibirsk</option>
                    <option timezoneid="60" gmtadjustment="GMT+06:00" usedaylighttime="0" value="6">(GMT+06:00) Astana, Dhaka</option>
                    <option timezoneid="61" gmtadjustment="GMT+06:30" usedaylighttime="0" value="6.5">(GMT+06:30) Yangon (Rangoon)</option>
                    <option timezoneid="62" gmtadjustment="GMT+07:00" usedaylighttime="0" value="7">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
                    <option timezoneid="63" gmtadjustment="GMT+07:00" usedaylighttime="1" value="7">(GMT+07:00) Krasnoyarsk</option>
                    <option timezoneid="64" gmtadjustment="GMT+08:00" usedaylighttime="0" value="8">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
                    <option timezoneid="65" gmtadjustment="GMT+08:00" usedaylighttime="0" value="8">(GMT+08:00) Kuala Lumpur, Singapore</option>
                    <option timezoneid="66" gmtadjustment="GMT+08:00" usedaylighttime="0" value="8">(GMT+08:00) Irkutsk, Ulaan Bataar</option>
                    <option timezoneid="67" gmtadjustment="GMT+08:00" usedaylighttime="0" value="8">(GMT+08:00) Perth</option>
                    <option timezoneid="68" gmtadjustment="GMT+08:00" usedaylighttime="0" value="8">(GMT+08:00) Taipei</option>
                    <option timezoneid="69" gmtadjustment="GMT+09:00" usedaylighttime="0" value="9">(GMT+09:00) Osaka, Sapporo, Tokyo</option>
                    <option timezoneid="70" gmtadjustment="GMT+09:00" usedaylighttime="0" value="9">(GMT+09:00) Seoul</option>
                    <option timezoneid="71" gmtadjustment="GMT+09:00" usedaylighttime="1" value="9">(GMT+09:00) Yakutsk</option>
                    <option timezoneid="72" gmtadjustment="GMT+09:30" usedaylighttime="0" value="9.5">(GMT+09:30) Adelaide</option>
                    <option timezoneid="73" gmtadjustment="GMT+09:30" usedaylighttime="0" value="9.5">(GMT+09:30) Darwin</option>
                    <option timezoneid="74" gmtadjustment="GMT+10:00" usedaylighttime="0" value="10">(GMT+10:00) Brisbane</option>
                    <option timezoneid="75" gmtadjustment="GMT+10:00" usedaylighttime="1" value="10">(GMT+10:00) Canberra, Melbourne, Sydney</option>
                    <option timezoneid="76" gmtadjustment="GMT+10:00" usedaylighttime="1" value="10">(GMT+10:00) Hobart</option>
                    <option timezoneid="77" gmtadjustment="GMT+10:00" usedaylighttime="0" value="10">(GMT+10:00) Guam, Port Moresby</option>
                    <option timezoneid="78" gmtadjustment="GMT+10:00" usedaylighttime="1" value="10">(GMT+10:00) Vladivostok</option>
                    <option timezoneid="79" gmtadjustment="GMT+11:00" usedaylighttime="1" value="11">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>
                    <option timezoneid="80" gmtadjustment="GMT+12:00" usedaylighttime="1" value="12">(GMT+12:00) Auckland, Wellington</option>
                    <option timezoneid="81" gmtadjustment="GMT+12:00" usedaylighttime="0" value="12">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
                    <option timezoneid="82" gmtadjustment="GMT+13:00" usedaylighttime="0" value="13">(GMT+13:00) Nuku'alofa</option>
                </select>
            </div>
            <br />
          <input type="submit" name="" value="Login" />
          <a href="/">Forgot Password?<span></span>|<span></span>Register new company</a>
      </form>
  </div>
    );
  }
}

export default SignupForm;

