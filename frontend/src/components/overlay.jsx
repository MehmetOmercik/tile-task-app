import PropTypes from "prop-types";

export const Overlay = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <section className="overlay">
          <div className="overlay__background" onClick={onClose} />
          <div className="overlay__container">
            <div className="overlay__controls">
              <button
                className="overlay__close"
                type="button"
                onClick={onClose}
              />
            </div>
            <div className="flex items-center gap-x-10">
              <button>b</button>
              {children}
              <button>f</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
