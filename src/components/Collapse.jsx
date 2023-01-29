import React, { useState } from 'react';
import { Collapse as CollapseItem, Button } from 'react-bootstrap';

const Collapse = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container-fluid mb-3">
      <Button
        className="btn-secondary btn-sm w-100 mb-2"
        onClick={() => setOpen(!open)}
        aria-controls="collapse-item"
        aria-expanded={open}
      >
        {!open && 'Добавить книгу'}
        {open && 'Закрыть'}
      </Button>
      <CollapseItem in={open}>
        <div>{children}</div>
      </CollapseItem>
    </div>
  );
};

export default Collapse;
