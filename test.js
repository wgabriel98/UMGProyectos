const { handler } = require('./index'); // Asegúrate de que el nombre del archivo sea correcto

const event = {
  number1: 5,
  number2: 10
};

handler(event).then(response => {
  console.log(response);
}).catch(error => {
  console.error(error);
});
