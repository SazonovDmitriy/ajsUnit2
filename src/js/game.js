export default function heroes (health) {
    if (health < 15) {
        return 'critical'
    } else if (health < 50) {
        return 'wounded'
    } 
    return 'healthy'
};