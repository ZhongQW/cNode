import React,{Component} from "react";
import {List,Avatar} from "antd"
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import data from "./data";
import TxtTag from "../txtTag";

class IndexList extends Component{
    render(){
        console.log(this.props);
        return (
            <List
                loading={false}
                dataSource={data.data}
                renderItem={item => (<List.Item
                    actions = {[
                        "回复:"+item.reply_count,
                        "访问:"+item.visit_count
                    ]}
                    key = {item.id}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.author.avatar_url}/>}
                        title={<div>
                            <TxtTag data={item}/>
                            <Link to={"/details/" + item.id}>{item.title}</Link>
                        </div>}

                        description={(<p>
                            <Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>
                            发表于：{item.create_at.split('T')[0]}
                        </p>)}

                    >
                    </List.Item.Meta>
                </List.Item>)}
            >

            </List>
        );
    }
}
export default connect(state => state.state) (IndexList);