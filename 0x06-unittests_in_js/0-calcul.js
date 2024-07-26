function calculateNumber(a, b) {
    const anum = Math.round(a);
    const bnum = Math.round(b);
    const c = anum + bnum;
    return c;
}

module.exports = calculateNumber;
