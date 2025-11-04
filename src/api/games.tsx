const BASE_URL = 'http://localhost:8000/'

export function getGames() {
    return {
        queryKey: ['games'],
        queryFn: async () => (await fetch(BASE_URL + 'games')).json()
    }
}