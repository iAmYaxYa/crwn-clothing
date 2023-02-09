import React from "react";
import MenuItem from '../menu-item/Menu-item';
import './directory.scss'
import bag from '../../Assets/bag-hand.png'
import books from '../../Assets/books-book-1.png'
import mobile from '../../Assets/elec-mob-1.png'
import Jacket from '../../Assets/cloth-2.png'
import watch from '../../Assets/elec-watc-2.png'


class Directory extends React.Component{
    constructor(){
        super()

        this.state = {
           sections:[
                {
                    id:1,
                    title:'Bag Hands',
                    imgUrl:`${bag}`
                },
                {
                    id:2,
                    title:'Books',
                    imgUrl:`${books}`
                },
                {
                    id:3,
                    title:'Mobile',
                    imgUrl:`${mobile}`
                },
                {
                    id:4,
                    title:'Jackets',
                    imgUrl:`${Jacket}`,
                    size:'large'
                },
                {
                    id:5,
                    title:'Watches',
                    imgUrl:`${watch}`,
                    size:'large'
                }
            ]
        }
    }
    render(){
        return (
            <div className="directory">
                {
                this.state.sections.map(({title, id, imgUrl, size})=>(
                    <MenuItem key={id} title={title} imgUrl={imgUrl} size={size} />
                ))
                }
            </div>
        )
    }
}

export default Directory;