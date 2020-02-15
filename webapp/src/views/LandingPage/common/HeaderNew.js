import React from 'react';


export default class HeaderNew extends React.Component{
  constructor(props){
    super(props);
    this.state={
      left:false,
    }
  }
    render(){
        let {className,style}=this.props;
        return (
    <header className={className} style={style} id="main-head">
    <div className="container sectionHeader">
    <div className="site-header-inner">
      <div className="topNavigation row no-mrg">
      </div>
    </div>
    </div>
</header>
        );
    }
}
