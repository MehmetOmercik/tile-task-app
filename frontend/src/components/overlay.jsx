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
                className="text-2xl py-1 px-2 m-1 rounded-md hover:bg-gray-300"
                type="button"
                onClick={onClose}
              >
                x
              </button>
            </div>
            <div className="flex items-center gap-x-10">{children}</div>
          </div>
        </section>
      )}
    </>
  );
};
