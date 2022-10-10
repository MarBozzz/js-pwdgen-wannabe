
const userFirstName = prompt ('qual è il tuo nome?');
const userSecondName= prompt ('qual è il tuo cognome?');
const preferredColor= prompt ('qual è il tuo colore preferito?');
let output;


output = `
  Your new password is: <br> ${userFirstName}${userSecondName}${preferredColor}22
`;

document.getElementById('pw').innerHTML = output;