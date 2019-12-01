const dropline = require('./../dropline-cli-node');

const initalize = async function() {

    try {

        const contract = await dropline.fetchContract('6057cc5f-c5a2-41af-bdc4-0f57b21274b1', {
            host : "http://localhost:9911/api"
        });

        const action = contract.getAction('get-something');

        const testPars = {
            name : "erogierj"
        };

        console.log(action.validate(testPars));

        console.log(action.request(testPars));

    } catch (e) {

        console.log(e);

    }

};

initalize();