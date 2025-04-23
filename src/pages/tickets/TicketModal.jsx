import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { getEstadoColor } from '../../utils/getEstadoColor';

const TicketModal = ({ show, onClose, onSave, ticket }) => {
  const [form, setForm] = useState({
    usuario: '',
    tipo: 'queja',
    descripcion: '',
    estado: 'nuevo',
    fechaCreacion: new Date().toISOString(),
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(form);
    onClose();
    setForm({
      usuario: '',
      tipo: 'queja',
      descripcion: '',
      estado: 'nuevo',
      fechaCreacion: new Date().toISOString(),
    });
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Crear nuevo ticket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="usuario">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              name="usuario"
              value={form.usuario}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="tipo">
            <Form.Label>Tipo</Form.Label>
            <Form.Select name="tipo" value={form.tipo} onChange={handleChange}>
              <option value="queja">Queja</option>
              <option value="sugerencia">Sugerencia</option>
              <option value="reporte">Reporte</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="descripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="descripcion"
              value={form.descripcion}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="estado">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              name="estado"
              value={form.estado}
              onChange={handleChange}
              style={{
                borderLeft: `5px solid ${getEstadoColor(form.estado)}`,
              }}
            >
              <option value="nuevo">🟢 Nuevo</option>
              <option value="en_proceso">🟠 En curso</option>
              <option value="en espera">🟡 En espera</option>
              <option value="resueltas">⚪ Resueltas</option>
              <option value="cerrado">⚫ Cerrado</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Crear
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TicketModal;
