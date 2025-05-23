import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ConfirmationForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    cantidad: '',
    asistentes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwUKXjTfhZR5MJCEqgKlmKSh7ry-trooP2_SPbx6GSwWn3z_3-hdEc2oDBGjGX66T9SNQ/exec', {
        method: 'POST',
        mode: 'no-cors', // Necesario para Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          fecha: new Date().toLocaleString('es-MX', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        })
      });

      // Como estamos usando no-cors, no podemos verificar response.ok
      // Asumimos que la petición fue exitosa si no hay error
      setSubmitStatus('success');
      setFormData({ nombre: '', cantidad: '', asistentes: '' });
    } catch (error) {
      console.error('Error al enviar la confirmación:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formulario-confirmacion" className="card-decorated_6 py-16 px-4 bg-gradient-to-b from-orange-50 to-pink-50 pb-8">
      <div className=" max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-orange-800 mb-6 text-center">
            Confirma tu asistencia
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label htmlFor="cantidad" className="block text-sm font-medium text-gray-700 mb-1">
                Número de personas que asistirán
              </label>
              <input
                type="number"
                id="cantidad"
                name="cantidad"
                value={formData.cantidad}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="¿Cuántas personas asistirán?"
              />
            </div>

            <div>
              <label htmlFor="asistentes" className="block text-sm font-medium text-gray-700 mb-1">
                Nombres de los asistentes
              </label>
              <textarea
                id="asistentes"
                name="asistentes"
                value={formData.asistentes}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Nombres de todas las personas que asistirán"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Enviando...' : 'Confirmar asistencia'}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 text-center mt-4"
              >
                ¡Gracias por confirmar tu asistencia! 🎉
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 text-center mt-4"
              >
                Hubo un error al enviar la confirmación. Por favor, intenta de nuevo.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ConfirmationForm; 