import heroes from "../game.js";

test('health check', () => {
    let health = 51;
    const expected = 'healthy';
    const recevied = heroes(health);
    expect(recevied).toBe(expected);
});

test('health check', () => {
    let health = 49;
    const expected = 'wounded';
    const recevied = heroes(health);
    expect(recevied).toBe(expected);
});

test('health check', () => {
    let health = 14;
    const expected = 'critical';
    const recevied = heroes(health);
    expect(recevied).toBe(expected);
});