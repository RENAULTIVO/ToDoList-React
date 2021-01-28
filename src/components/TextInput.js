import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";

const Input = styled.input`
	width: 90%;
	color: #DDDDDD;
	border: 2px solid #444444;
	margin: 10px;
	padding: 10px;
	outline: none;
	font-size: 18px;
	border-radius: 10px;
	background-color: #333333;
`;

export default function TextInput(props) {

    const [lastEvent, setLastEvent] = useState(null);

    useEffect(() => {

        if (lastEvent != null){
            lastEvent.target.value = '';
        }
        
    }, [props.resetOnChange]);

    function keyPressHandler(key) {
        setLastEvent(key);
        
        if (props.onValueChange) {
            props.onValueChange(key.target.value)
        }

        if (key.key == "Enter"
            && props.onEnter) {
            props.onEnter(key.target.value)
            key.target.value = '';
        }

    }

    return (
        <Input
            onKeyUp={keyPressHandler}
            placeholder={props.placeholder} />
    );

}