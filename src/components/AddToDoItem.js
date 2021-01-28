import plusSVG from '../icons/plus.svg';
import styled from "styled-components";
import RippleButton from './RippleButton';
import TextInput from './TextInput';
import { useEffect, useState } from 'react/cjs/react.development';

const Body = styled.div`
	color: #DDDDDD;
	width: calc(90% - 40px);
	margin: 40px auto;
	padding: 20px;
	border-radius: 20px;
	background-color: #111111;
`;

const InputArea = styled.div`
	flex: 4;
	width: 90%;
	padding: 20px 40px 20px 20px;
	font-size: 20px;
	font-family: monospace;
	background-color: #181818;
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
`;

const ActionsBox = styled.div`
	flex: 1;
	min-width: 60px;
	max-width: 100px;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
`;

const ActionButton = styled(RippleButton)`
	flex: 1;
	border: none;
	outline: none;
	background-color: ${props => props.background};
	border-radius:${props => typeof props.borders == "object" ? props.borders.map(border => ` ${border}px`) : ''};
`;

const ButtonLogo = styled.img`
	width: 40px;
	height: 40px;
	pointer-events: none;
`;

export default function AddToDoItem(props) {

	const [itemTitle, setItemTitle] = useState('');
	const [lastAddedItem, setLastAddedItem] = useState(null);

	useEffect(() => {
		setItemTitle('');
	}, [props.list]);

	function addItem() {
		props.listHandler(itemTitle)
		setLastAddedItem(itemTitle)
	}

	function onValueChangeHandler(value) {
		setItemTitle(value);
	}

	return (
		<Body className="flexBox rowDirection">
			<InputArea className="flexBox flexWrap columnDirection">
				<div style={{padding: '10px'}}>
					Adicionar tarefa:
				</div>
				<TextInput
					resetOnChange={lastAddedItem}
					placeholder="Titúlo da tarefa"
					onEnter={addItem}
					onValueChange={onValueChangeHandler} />
			</InputArea>
			<ActionsBox
				className="flexBox flexWrap columnDirection">
				<ActionButton
					onClick={addItem}
					className="desktopPointer"
					background="#2ECC71" borders={[0, 20, 20, 0]}>
					<ButtonLogo src={plusSVG} />
				</ActionButton>
			</ActionsBox>
		</Body>
	);

}