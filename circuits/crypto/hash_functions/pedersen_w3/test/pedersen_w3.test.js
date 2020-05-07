const path = require("path");

const bigInt = require("big-integer");
const tester = require("circom").tester;

const babyJub = require("../../../baby_jubjub/js/baby_jubjub");
const pedersen = require("../js/pedersen_hash.js");

describe("Pedersen window-3 test", function() {
    let circuit;
    this.timeout(100000);
    before( async() => {

        circuit = await tester(path.join(__dirname, "pedersen_w3.test.circom"));
    });
    it("Should pedersen at zero", async () => {

        let w;

        w = await circuit.calculateWitness({ in: 0}, true);
        const b = Buffer.alloc(32);

        const h = pedersen.hash(b);
        const hP = babyJub.unpackPoint(h);

        await circuit.assertOut(w, {out: hP});

    });
    it("Should pedersen with 253 ones", async () => {

        let w;

        const n = bigInt.one.shiftLeft(253).minus(bigInt.one);

        w = await circuit.calculateWitness({ in: n}, true);

        const b = Buffer.alloc(32);
        for (let i=0; i<31; i++) b[i] = 0xFF;
        b[31] = 0x1F;

        const h = pedersen.hash(b);
        const hP = babyJub.unpackPoint(h);

        await circuit.assertOut(w, {out: hP});

    });
});