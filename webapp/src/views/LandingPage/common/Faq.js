import React from 'react';

export default class Faq extends React.Component{

    constructor(props){
        super(props);
        this.state={
            open:false,
        };
    }
    componentDidMount(){
        if(this.props.Accounts==0){
            this.setState({open:true});
        }
    }

    render(){
        let open=this.state.open;
        return (
            <div className={open?"accordion is-open":"accordion"}>
                                <a class="accordion-title"
                                    className={`accordion-title text-left ${(open?"":"collapsed")}`}
                                    onClick={()=>this.setState({open:!open})}
                                >
                                            <span>{this.props.question}</span>
                                            <div class="accordion-icon"></div>
                                </a>
                                <div className="collapse">
                                    <div className="accordion-body">
                                    {this.props.answer}
                                    </div>
                                </div>
                            </div>     
        );
    }
}
