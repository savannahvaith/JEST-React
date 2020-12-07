import React from 'react';

const ComponentWithProps = (props) => {
    // console.log(props);
    const { valueProp, objectProp, arrayProp, functionProp, headerText, numericProp, expressionProp, contentProp} = props;

    // printing an object
    const objectPropsDisplay = [];
    for (let [k, v] of Object.entries(objectProp)) {
        objectPropsDisplay.push(<li key={k}>The value of {k} in the objectProp is {v}</li>)
    }

    // loop through the array and create its own list item 
    const number = arrayProp.map(seq => <li key={seq} className="nnd">Number is {seq}</li>);

    return (
        <>
            <h1>{headerText}</h1>   
            <p className="cpo">{contentProp}</p>
            <p>The value of the numeric prop is: {numericProp}</p>
            <p> The value of the valueProp is : {valueProp}</p>
            <p> The value of the expressionProp is : {expressionProp}</p>
            <p> FunctionProp returns: {functionProp()}</p>
            <ol>{objectPropsDisplay}</ol>
            <ol>
                {number}
            </ol>
        </>
    );
}

ComponentWithProps.defaultProps = { 
    headerText: `Text supplied by the default value of headerText`,
    contentProp: `Text supplied by the default value of contentText`
}

export default ComponentWithProps; 