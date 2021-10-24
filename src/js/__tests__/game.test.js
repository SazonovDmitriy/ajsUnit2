import { heroes } from "..game";

test('health check', () => {
    const expected = 100;
    const recevied = heroes(health);
    expect(recevied).toBe(expected);
});