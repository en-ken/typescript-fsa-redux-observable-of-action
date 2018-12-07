import { Action, AnyAction, ActionCreator, isType } from 'typescript-fsa'
import { Observable } from 'rxjs'
import { filter } from 'rxjs/operators'

export const ofAction = <P>(actionCreator: ActionCreator<P>) => (
  source: Observable<AnyAction>
) =>
  source.pipe(filter(action => isType(action, actionCreator))) as Observable<Action<P>>
