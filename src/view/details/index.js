import React, { Component } from 'react';

import data from "./data";
import TxtDetails from "./txtDetails";
import ReplyList from "./replyList";

class Details extends Component {
    render() {
        return (
            <div className="Wrap">
                <TxtDetails
                    data = {data.data}
                    loading = {false}

                />
                <ReplyList
                    loadging = {false}
                    replies = {data.data.replies}
                    replyCount = {data.data.reply_count}
                />
            </div>
        );
    }
}

export default Details;
