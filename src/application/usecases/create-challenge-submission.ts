import {Submission} from '../../domain/entities/submission';
import {IStudentsRepository} from '../repositories/IStudentsRepository';
import {IChallengesRepository} from '../repositories/IChallengesRepository';

type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

export class CreateChallengeSubmission {

    constructor(
        private studentsRepository: IStudentsRepository,
        private challengesRepository: IChallengesRepository
    ){}

    async execute({studentId, challengeId}:CreateChallengeSubmissionRequest){

        // consulta do estudante pelo ID
        const student = await this.studentsRepository.findById(studentId);
        if(!student){
            throw new Error("Student does not found.");
        }

        // consulta do desafio pelo ID
        const challenge = await this.challengesRepository.findById(challengeId);
        if(!challenge){
            throw new Error("Challenge does not found.");
        }

        const submission = Submission.create({
            studentId, 
            challengeId
        });

        return submission;
    }
}