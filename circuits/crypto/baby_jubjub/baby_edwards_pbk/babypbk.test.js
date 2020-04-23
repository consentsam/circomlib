/*

const chai = require("chai");
const path = require("path");

const createBlakeHash = require("blake-hash");
const eddsa = require("../src/eddsa.js");

const assert = chai.assert;

const bigInt = require("big-integer");
const tester = require("circom").tester;
const utils = require("../src/utils.js");

describe("Baby Jubjub twisted Edwards public key extraction test", function () {

    this.timeout(100000);

    let circuit;
    before( async() => {
        circuit = await tester(path.join(__dirname, "babypbk_test.circom"));
    });

    it("It should extract the public key from the private one", async () => {

        const rawpvk = Buffer.from("0001020304050607080900010203040506070809000102030405060708090021", "hex");
        const pvk    = eddsa.pruneBuffer(createBlakeHash("blake512").update(rawpvk).digest().slice(0,32));
        const S      = utils.leBuff2int(pvk).shiftRight(3);

        const A      = eddsa.prv2pub(rawpvk);

        const input = {
            in : S
        };

        const w = await circuit.calculateWitness(input, true);

        await circuit.assertOut(w, {Ax : A[0], Ay: A[1]});

        await circuit.checkConstraints(w);
    });

});

*/