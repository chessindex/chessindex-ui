const BASE_URL = 'http://localhost:3000/'

export function getGames() {
    return {
        queryKey: ['games'],
        queryFn: async () => (await fetch(BASE_URL + 'games' + '?_page=1&_per_page=25'
        )).json()
    }
}