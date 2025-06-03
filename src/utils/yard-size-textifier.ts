const yardSizeTextifier = (size: number): string => {
  if (size < 5) return 'Small';
  if (size < 12) return 'Medium';
  return 'Large';
};


export default yardSizeTextifier;
