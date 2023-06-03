import { MutationTree } from 'vuex';
import { IExampleStateInterface } from './state';


const mutation: MutationTree<IExampleStateInterface> = {
    someMutation( /* state: ExampleStateInterface */) {
        // a line to prevent linter errors
    }
}


export default mutation;