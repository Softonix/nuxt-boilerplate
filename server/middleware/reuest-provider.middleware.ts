export default defineEventHandler(({ req, res }) => {
  if (req.url.includes('requestProvider')) {
    res.end()
  }
})
