import counter from './counter';
import todos from './todos';
import {combineReducers} from 'redux';
//返回的reducer是合并后的reducer
//合并后的reducer的状态就是合并成的状态
let reducer = combineReducers({
  counter,//{number:0}
  todos//{list:[]}
});
export default reducer;
/*
{
 counter:
 todos:
}
*/
// {counter:{number:0},todos:{list:[]}}