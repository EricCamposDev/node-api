import { InMemoryChallengesRepository } from '../../../tests/repositories/in-memory-challenges-repository';
import { InMemoryStudentsRepository } from '../../../tests/repositories/in-memory-students-repository';
import { Student } from '../../domain/entities/student';
import { Challenge } from '../../domain/entities/challenge';
import { CreateChallengeSubmission } from './create-challenge-submission';

describe('Create challenge submission use case', () => {

    it('should be able to create a new challenge submission', () => {
        
        const studentsRepository = new InMemoryStudentsRepository();
        const challengesRepository = new InMemoryChallengesRepository();

        // criando um mock student
        const student = Student.create({
            name: 'Eric Campos',
            email: 'eric.campos.dev@outlook.com'
        });

        studentsRepository.items.push(student);



        // criando um mock challenge
        const challenge = Challenge.create({
            title: 'Challenge 01 - Jest',
            instructorUrl: 'http://chalenger01jest.com'
        });

        challengesRepository.items.push(challenge);


        
        const sut = new CreateChallengeSubmission(
            studentsRepository, 
            challengesRepository
        );
        
        const response = sut.execute({
            studentId: student.id,
            challengeId: challenge.id
        });

        expect(response).toBeTruthy();
    });

});