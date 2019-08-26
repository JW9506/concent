import { CC_DISPATCHER, ERR } from '../../support/constant';
import ccContext from '../../cc-context';
import * as util from '../../support/util';

const { ccUkey_ref_ } = ccContext;
export default function(){
  const ref = ccUkey_ref_[CC_DISPATCHER];
  if (!ref) {
    if(ccContext.isHotReloadMode()){
      util.justTip('in hot reload mode, CC_DISPATCHER initialized more than one time');
    }else{
      throw util.makeError(ERR.CC_NO_DISPATCHER_FOUND);
    }
  }
  return ref;
}