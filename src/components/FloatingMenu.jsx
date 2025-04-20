import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useMenuStore } from '../stores/menuStore';
import { menuItems } from '../utilities/maps/itemsModalMenuHome';

const FloatingMenu = () => {
    const { isOpen, toggleMenu } = useMenuStore();

    const [showSubMenu, setShowSubMenu] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleMenuItemClick = (item) => {
        if (item.tipo === 'link') {
            window.location.href = item.url;
        } else if (item.tipo === 'modal') {
            setSelectedItem(item);
            setShowSubMenu(true);
        }
    };

    return (
        <>
            {/* Botón flotante */}
            <button
                className="d-block position-fixed rounded-circle"
                style={{
                    bottom: '25px',
                    right: '25px',
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'black',
                    zIndex: 1050,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                }}
                onClick={toggleMenu}
            >
                <i className="bi bi-house-gear text-white fs-2"></i>
            </button>

            {/* Modal principal (menú lateral) */}
            <Modal
                show={isOpen}
                onHide={toggleMenu}
                dialogClassName="modal-bottom-right"
                contentClassName="rounded-4"
                backdropClassName="modal-backdrop-transparent"
            >
                <Modal.Body className="p-1 position-relative">
                    {/* Botón cerrar superior derecho */}
                    <i
                        className="bi bi-x fs-3 text-danger position-absolute"
                        style={{ top: '10px', right: '15px', cursor: 'pointer', zIndex: 1051 }}
                        onClick={toggleMenu}
                        title="Cerrar"
                    ></i>

                    <div className="p-4 pt-5" style={{ minHeight: '80vh' }}>
                        <div className="row text-center">
                            {menuItems.map((item, index) => (
                                <div className="col-6 justify-content-center p-2" key={index}>
                                    <button
                                        className="btn w-100 d-flex flex-column align-items-center justify-content-center"
                                        onClick={() => handleMenuItemClick(item)}
                                    >
                                        <i className={`bi ${item.icono} fs-2 mb-1`}></i>
                                        <span>{item.nombre}</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Submodal (cuando un item tiene subItems) */}
            {showSubMenu && selectedItem && (
                <Modal
                    show={showSubMenu}
                    onHide={() => setShowSubMenu(false)}
                    dialogClassName="modal-bottom-right"
                    contentClassName="rounded-4"
                    backdropClassName="modal-backdrop-transparent"
                >
                    <Modal.Body className="p-1 position-relative">
                        {/* Botón cerrar del submodal */}
                        <i
                            className="bi bi-x fs-3 text-danger position-absolute"
                            style={{ top: '10px', right: '15px', cursor: 'pointer', zIndex: 1051 }}
                            onClick={() => setShowSubMenu(false)}
                            title="Cerrar"
                        ></i>

                        <div className="p-4 pt-5" style={{ minHeight: '60vh' }}>
                            <h4 className="text-center mb-4">{selectedItem.nombre}</h4>
                            <div className="row justify-content-center flex-wrap">
                                {selectedItem.subItems.map((subItem, index) => (
                                    <div className="col-4 justify-content-center align-items-center m-1 p-1" key={index}>
                                        <button
                                            className="btn w-100 d-flex flex-column align-items-center justify-content-center"
                                            onClick={() => handleMenuItemClick(subItem)}
                                        >
                                            <i className={`bi ${subItem.icono} fs-4 mb-1`}></i>
                                            <span>{subItem.nombre}</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
};

export default FloatingMenu;