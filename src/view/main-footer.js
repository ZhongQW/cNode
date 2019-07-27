import React,{Component} from 'react';
import {Layout} from 'antd';


export default class mainFooter extends Component{
    render(){
        return(
            <Layout.Footer style = {{textAlign:"center"}}>
                京ICP备0810442号-1 2017-2018 MIAOV.COM版权所有
            </Layout.Footer>
        )
    }
}