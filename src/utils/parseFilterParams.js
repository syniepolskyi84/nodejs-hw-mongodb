export const parseFilterParams = (query) => {
  const { contactType, isFavorite } = query;

  let parsedIsFavorite;
  if (isFavorite === 'true') parsedIsFavorite = true;
  else if (isFavorite === 'false') parsedIsFavorite = false;

  return {
    contactType: contactType?.trim() || undefined,
    isFavorite: parsedIsFavorite,
  };
};
