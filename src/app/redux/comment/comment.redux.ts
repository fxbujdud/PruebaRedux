import { Action, StateContext, Selector, State } from '@ngxs/store';
import { IComment } from 'src/app/interfaces/comment/comment.interface';
import { async } from '@angular/core/testing';
import { BaseService } from 'src/app/services/base/base.service';
import { IResponse } from 'src/app/interfaces/response/response.interface';

export interface IComments {
    comments: IComment[];
    idPost?: number;
}

export class RetrivesAllCommentsAction{
    static readonly type = '[Comments] Retrieves comments Action';
    constructor( public route: string ) { }
}

@State({
    name: 'CommentsCollection',
    defaults: {
        comments: [],
        idPost: null,
    }
})
export class CommentState {
    
    constructor(
        public baseService: BaseService
    ) {}

    @Selector()
    static getComments(state: IComments) {
        return state.comments;
    }

    @Action(RetrivesAllCommentsAction)
    async retrivesAllCommentsAction(
        ctx: StateContext<IComments>,
        action: RetrivesAllCommentsAction,
    ) {
        let state = ctx.getState();
        let result: IResponse = null;

        try {
            result = await this.baseService.get(action.route).toPromise();
        } catch (error) {
            result = null;
        } finally {
            if(result !== null) {
                ctx.setState({ ...state, comments: result.response })
            }
        }



    }


}