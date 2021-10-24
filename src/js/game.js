export default function heroes (health) {
    const hero = {
        name: 'Маг',
        health: 90
    };
    if (health >= 50) {
        return 'healthy'
    } else if (health <= 49 && health >= 15) {
        return 'wounded'
    } else if (health <= 14) {
        return 'critical'
    }
};