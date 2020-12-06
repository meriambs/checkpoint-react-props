import React from 'react' ;
import PropTypes from 'prop-types';
const profilCompoment = props =>{
    const handleName = ()=>{
     alert(props.name)
    }
    return( 
    <div onClick={handleName}  > <h1>My Name is {props.name} <br/> my bio is {props.bio} <br/> and my profession is {props.profession}</h1>  
    {props.children}
    </div>
 
    )
}

profilCompoment.propTypes = {
  name: PropTypes.string ,
 bio:PropTypes.string,
 profession :PropTypes.string,
};

profilCompoment.defaultProps={name:"meriam" , bio:"doing many thing" , profession:"ingenieur "}
export default profilCompoment;