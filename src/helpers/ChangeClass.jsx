export const ChangeClass = (ref, className, addClass) => {
  if (ref.current) {
    if (addClass) {
      ref.current.classList.add(className);
    } else {
      ref.current.classList.remove(className);
    }
  }
};
