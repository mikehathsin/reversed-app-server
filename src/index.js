import { app } from './server'

const main = () => {
  const { PORT = 8000 } = process.env

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

main()
