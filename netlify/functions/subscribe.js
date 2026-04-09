const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

exports.handler = async (event) => {
  // Solo aceptar POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método no permitido' })
    };
  }

  try {
    const body = JSON.parse(event.body);
    const { nombre, apellidos, telefono, email, empresa } = body;

    // Validar datos
    if (!nombre || !apellidos || !telefono || !email || !empresa) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Faltan datos requeridos' })
      };
    }

    // Credenciales de Google desde variables de entorno
    const credentials = {
      type: 'service_account',
      project_id: 'declausura-2026',
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs'
    };

    // Crear JWT para autenticación
    const auth = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    // Conectar a Google Sheets
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, auth);
    await doc.loadInfo();

    // Obtener la primera hoja
    const sheet = doc.sheetsByIndex[0];

    // Agregar fila con los datos
    const now = new Date();
    const fecha = now.toLocaleDateString('es-ES') + ' ' + now.toLocaleTimeString('es-ES');

    await sheet.addRow({
      Nombre: nombre,
      Apellidos: apellidos,
      Teléfono: telefono,
      Email: email,
      Empresa: empresa,
      Fecha: fecha
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: true,
        message: '¡Datos guardados correctamente!'
      })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
};
