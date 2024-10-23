const dotenv = require('dotenv');
async function globalSetup() {
    try {
        if (process.env.ENV) {
            dotenv.config({
                path: `.env.${process.env.ENV}`,
                override: true
            });
        }
    } catch (error) {
        console.error("Error in loading environment variables", error)
    }
}
export default globalSetup;