import React from "react";
import MenuItem from '../menu-item/Menu-item';
import './directory.scss'


class Directory extends React.Component{
    constructor(){
        super()

        this.state = {
           sections:[
                {
                    id:1,
                    title:'Hats',
                    imgUrl:''
                },
                {
                    id:1,
                    title:'Hats',
                    imgUrl:''
                },
                {
                    id:1,
                    title:'Hats',
                    imgUrl:''
                },
                {
                    id:1,
                    title:'Hats',
                    imgUrl:''
                },
                {
                    id:1,
                    title:'Hats',
                    imgUrl:''
                }
            ]
        }
    }
    render(){
        return (
            <div className="directory">
                {
                this.state.sections.map(({title, id, imgUrl})=>(
                    <MenuItem key={id} title={title} imgUrl={imgUrl} />
                ))
                }
            </div>
        )
    }
}

export default Directory;