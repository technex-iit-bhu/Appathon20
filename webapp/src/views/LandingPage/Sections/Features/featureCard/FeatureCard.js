import React from "react";
import "./featureCard.css";

let back;
class FeatureCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
                {
                    hover:false
                }
    }
    
    toggleHover=()=>
    {
        if(this.state.hover===false)
        {
            this.setState({hover:true})
        }
        else
        {
            this.setState({hover:false})
        }
    };
    
    render()
    {
        
        if(this.state.hover)
          {  back={background:"#2E2852",justifyContent:"center"};
          return(
            <div className="feature_card" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={back}>
                <h3 className="feature_heading">{this.props.heading}</h3>
                <p className="feature_para">{this.props.para}</p>
            </div>
        );
        }
        else
        {
            back={background:`url(${this.props.url
            })`,
                    backgroundSize:"cover"};
            return(
                <div className="feature_card" onMouseOver={this.toggleHover} onMouseOut={this.toggleHover} style={back}>
                    <img className="feature_svg" src={this.props.svgurl}></img>
                    <h3 className="feature_heading">{this.props.heading}</h3>
                    <p className="feature_para">{this.props.para}</p>
                    <div className="feature_card_back_div"></div>
                </div>
            );
        }
    }
}
export default FeatureCard;