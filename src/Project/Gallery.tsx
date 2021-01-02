import React from "react";

type Props = {
    images: string[]
};

type State = {
    img : string
};

export class Gallery extends React.Component<Props, State> {

    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
            img : this.props.images[0]
        }
    }

    render() {
        let currentImg = this.state.img;
        let thumbContainer: JSX.Element | string = "";
        let thumbs : JSX.Element[] = [];

        for(let img of this.props.images){
            thumbs.push(<div className="gallery-item project-gallery-thumb" onClick={() => {this.setState({img})}}>
                <img src={`${img}/100`} />
            </div>);
        }

        if(thumbs.length > 1){
            thumbContainer = <div className="gallery-list">
                {thumbs}
            </div>
        }

        return (
            <div className="gallery">
                <div className="gallery-current">
                    <img src={currentImg}/>
                </div>
                {thumbContainer}
            </div>
        );
    }
}