export const validateEmail = (email) => {
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !!(email && regexEmail.test(String(email).toLowerCase()));
};

export const validatePassword = (password) => {
  return !!(password && password.length >= 8);
};

export const validateConfirmPassword = (password, cPassword) => {
  return !!(cPassword && password && cPassword.length >=8 && password === cPassword);
};

export const validateName = (fullName) => {
  const nameRegex = /^([a-zA-Z'\- ]+)$/;
  return !!(fullName && fullName.length >= 2 && nameRegex.test(String(fullName).toLowerCase()));
};
export const validateUrl = (url) => {
  const nameRegex = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!(url && url.length >= 2 && nameRegex.test(String(url).toLowerCase()));
};

export const validatePhone = (no) => {
    const phoneno = /^\d{10}$/;
    return no.match(phoneno);
};