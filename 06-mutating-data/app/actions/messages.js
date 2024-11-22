const deliverMessage = async (message) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return message;
};

export {
  deliverMessage,
};