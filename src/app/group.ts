import { Card } from "./card";

export interface Group {
    id: number;
    name: string;
    cards: Card[];
}