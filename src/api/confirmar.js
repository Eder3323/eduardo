import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const data = req.body;
    const confirmacion = `Fecha: ${data.fecha}\nNombre: ${data.nombre}\nCantidad: ${data.cantidad}\nAsistentes: ${data.asistentes}\n\n`;

    // Asegurarse de que el directorio existe
    const dir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    // Guardar en el archivo
    fs.writeFileSync(path.join(dir, 'confirmaciones.txt'), confirmacion);

    res.status(200).json({ message: 'Confirmación guardada exitosamente' });
  } catch (error) {
    console.error('Error al guardar la confirmación:', error);
    res.status(500).json({ message: 'Error al guardar la confirmación' });
  }
} 