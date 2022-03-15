import {Challenge} from "../../domain/entities/challenge";

export interface IChallengesRepository {
    findById(id: string): Promise<Challenge | null>;
}