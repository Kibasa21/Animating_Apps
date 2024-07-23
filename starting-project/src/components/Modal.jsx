import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog 
        variants={{
          hidden: {opacity: 0, y: 30},
          visible: {opacity: 1, y: 0}
        }}//Se usarmos as mesmas variants num componente filho, ele irá herdar as animações do pai
        initial="hidden"// o initial é a animação que será executada quando o componente for montado
        animate="visible"// o animate é a animação que será executada quando o componente for atualizado
        exit="hidden"// o exit é a animação que será executada quando o componente for desmontado
        open className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
