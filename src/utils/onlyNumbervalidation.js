const numberValidation = (event, handleChenge) => {
  const { value } = event.target;
  if (/^\d*$/.test(value)) {
    handleChenge(event);
  }
};

export { numberValidation };
