export const productsQuery = `
*[_type == "product"] | order(displayOrder asc){
  _id,
  title,
  category,
  description,
  price,
  featured,
  image,
  imagePosition
}
`;