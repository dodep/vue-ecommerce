export default {
    PORT: 8000,
    get BASE_URI() {
        return `https://dodep.club:${this.PORT}/api/v1/`
    }
}