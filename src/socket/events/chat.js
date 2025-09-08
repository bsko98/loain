export const chatEventHandler = states => {
  return {
    name: '',
    handle: data => {
      if (data.status === 'error') {
        console.log('Error');
        return;
      }
      console.log(`!`);
    },
  };
};
