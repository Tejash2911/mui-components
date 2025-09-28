export const cleanHtml = (html: string) => {
  const clean = html.replace(/<[^>]*>/g, '')
  return clean
}
