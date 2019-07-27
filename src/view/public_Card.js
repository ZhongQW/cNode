import React,{Component} from 'react';
import {Card} from "antd";

export default class public_Card extends Component{
    render(){
        const {data} = this.props;
        return(
            <div className="Wrap">
                {data.map((item,index)=>(
                    <Card
                        title={item.title}
                        loading = {false}
                        type = "inner"
                        key = {index}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: item.content
                            }}
                        >

                        </div>
                    </Card>
                ))}
            </div>
        )
    }
}