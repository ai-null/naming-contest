const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

module.exports = {
    port: env.PORT || 3000,
    host: env.HOST || '0.0.0.0',
    get ServerUrl() {
        return `http://${this.host}:${this.port}`;
    }
}