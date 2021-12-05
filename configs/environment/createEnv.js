const fs = require ('fs');
const path = require ('path');

const availableMods = ['dev','prod'];
const mode = process.argv[2] || availableMods[0];


const run = () => {
    if (!availableMods.includes(mode)){
        return 'You try running unavailable mode, please check your options'
    }

    console.log(`Creating .env file with ${mode} mode`);

    try {
        const customPart =fs.readFileSync(path.resolve(`./configs/environment/.env.${mode}`), 'utf-8');
        const commonPart =fs.readFileSync(path.resolve( `./configs/environment/.env.common`), 'utf-8');
        const combined = `# Custom part\n${customPart}\n\n# Common part\n${commonPart}`;

        fs.writeFileSync('.env',combined);

        console.log('Environment file .env was successfully created')
    } catch (error) {
        console.log('Creating .env file was failed');
        console.log(error.message);
    }
}

run();
