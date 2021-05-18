import { app } from './app'
import { dbInit } from './data-access/dbInit'

const start = async() => {
    
    await dbInit();

    app.listen(process.env.PORT, () => {
        console.log('Listening on port 3001!!!!!')
    })
}

start()