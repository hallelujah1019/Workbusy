import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './hello.js'


// const demo = React.createElement('div' ,{className:'div'} ,
//     React.createElement('h1' , null , 'hello world'),
//     React.createElement('ul' , null , 
//         React.createElement('li' , null , '我是li一'),
//         React.createElement('li' , null , '我是li二')
//     )
// )

// const text = '我是表达式，我是{}  ， vue是{{}} ， 小程序也是{{}}'
// const fn = () => '我是方法' 
// const fn1 = (ld) => {
//     if(ld) {
//         return <span>加载中</span>
//     }else {
//         return <span>加载完毕</span>
//     }
// }

// const demo2 = (
//     <div>
//         <h1 className="lalal">hello world1</h1>
//         <ul>
//             <li>我是li三</li>
//             <li>{ text }</li>
//             <li>{ fn() }</li>
//             <li>{ false ? '啦啦' : '三元表达' }</li>
//              { fn1(true) }
//         </ul>
//     </div>
// )


// -----------------------------------------------------------------------
//**  JSX是react的核心 ， 只能在react中使用  可以说 JSX是React.createElement方法的语法糖*/
const list = [
    {id:1,name:'Tom',age:20},
    {id:2,name:'Jack',age:21},
    {id:3,name:'Lisa',age:22}
]

function ListItem() {
    return (
        <div>
            <h1 className="h1">使用函数创建</h1>
            <ul>
                {list.map( (item , index) => 
                    <li key={item.id} style={{ color: 'red' , fontSize: '40px'}}>
                        姓名：{ item.name }年龄：{ item.age }
                    </li> 
                )}
            </ul>
        </div>
    )
}

class ListItemTwo extends React.Component {
    render() {
        return (
            <div>
                <h1 className="h1">使用class创建</h1>
                <ul>
                    {list.map( (item , index) => 
                        <li key={item.id} style={{ color: 'red' , fontSize: '40px'}}>
                            姓名：{ item.name }年龄：{ item.age }
                        </li> 
                    )}
                </ul>
            </div>
        );
    }
}

ReactDOM.render( <ListItemTwo/> ,document.getElementById('root'));
ReactDOM.render( <Hello/> ,document.getElementById('root2'));

