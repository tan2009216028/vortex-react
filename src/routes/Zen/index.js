import { injectReducer } from '../../store/reducers'
import { store } from '../../main'
import Zen from './containers/ZenContainer'
import reducer from './modules/zen'

injectReducer(store, { key: 'zen', reducer })

export default Zen
