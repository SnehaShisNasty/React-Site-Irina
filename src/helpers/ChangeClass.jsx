export const ChangeClass = (ref, className, addClass) => {
  if (ref.current) {
    if (addClass) {
      ref.current.classList.add(className);
      console.log('1');
    } else {
      ref.current.classList.remove(className);
      console.log('2');
    }
  }
};
