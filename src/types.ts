import { GameResult } from "./enums";

export type GameId = number;
export type PlayerName = string;
export type TournamentName = string;

type GamesListItem = {
    id: GameId;
    white: PlayerName;
    black: PlayerName;
    result: GameResult;
    date: string;
    tournament: TournamentName | null;
}