import {Entity} from '../../core/domain/Entity';

type ChallengeProps = {
    title: string;
    instructorUrl: string;
};

export class Challenge extends Entity<ChallengeProps> {
    
    private constructor(props: ChallengeProps, id?: string){
        super(props, id);
    }

    get id(){
        return this._id;
    }

    static create(props: ChallengeProps, id?: string){
        const challenger = new Challenge(props, id);

        return challenger;
    }
}