const skipQueryBuilder = (query: string, postCode: string, area: string) => {
  const params = new URLSearchParams();
  params.append('postcode', postCode);
  params.append('area', area);
  return `${query}${params.toString()}`;
};

export default skipQueryBuilder;

