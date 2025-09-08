const subscribers = new Set();

export const subscribe = cb => {
  subscribers.add(cb);
  return () => subscribers.delete(cb); // unsubscribe
};

export const publish = message => {
  subscribers.forEach(cb => cb(message));
};
