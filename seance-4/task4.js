function telephoneCheck(phoneNumber) {
    const pattern = /^\d{10}$|^(\d{3}-){2}\d{4}$|^(\d{3}){1} \d{3}-\d{4}$/;
    return pattern.test(phoneNumber);
  }
  console.log(telephoneCheck('555-555-5555'))


