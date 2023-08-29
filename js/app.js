const nodemailer = require('nodemailer');

// Configuración del transporte de correo
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Puedes usar otros servicios de correo también
  auth: {
    user: 'marlondiaz2994@gmail.com', // Tu dirección de correo
    pass: 'AkaneTyroneJagger' // Tu contraseña (se recomienda usar una contraseña de aplicación)
  }
});

// Función para enviar el correo
function enviarCorreo(orden) {
  const mailOptions = {
    from: 'marlondiaz29944@gmail.com', // Remitente
    to: 'destinatario@ejemplo.com', // Destinatario
    subject: 'Nueva orden de compra',
    text: `Se ha realizado una nueva orden de compra:\n\n${orden}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
}

// Ejemplo de uso
const ordenDeCompra = 'Productos: Producto 1, Producto 2\nTotal: $150.00';
enviarCorreo(ordenDeCompra);

const express = require('express');
const app = express();
const port = 3000;

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Ruta para manejar la solicitud de compra
app.post('/realizarCompra', (req, res) => {
  // Aquí puedes realizar la lógica de la compra y enviar correos, etc.

  // Ejemplo de respuesta al cliente
  res.json({ message: 'Compra realizada con éxito.' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

