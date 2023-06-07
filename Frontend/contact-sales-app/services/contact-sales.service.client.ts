import axios from 'axios'

const ContactSalesService = {
  postLead(firstName, lastName, email, message) {

    let requestBody = {};
    requestBody['name'] = firstName + " " + lastName;
    requestBody['message'] = message
    requestBody['email'] = email;

    let url = process.env.baseURL + '/leads';
    return axios.post(url, requestBody);
  }
}

export default ContactSalesService