import '../App.scss';
import styled from "styled-components";
import RippleButton from './RippleButton';
import checkSVG from '../icons/check.svg';
import deleteSVG from '../icons/delete.svg';

const ToDoItemBox = styled.div`
	width: 90%;
	margin: 20px auto;
	animation: fadeInZoomIn linear 0.5s;
	border-radius: 20px;
	animation-delay: ${props => props.delay}ms;
	background-color: #181818;
`;

const ItemTitle = styled.div`
	flex: 4;
	height: 100px;
	padding: 20px 40px 20px 40px;
	overflow-y: auto;
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

const ActionButton = styled.div`
	flex: 1;
	border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
	background-color: ${props => props.background};
	border-radius:${props => typeof props.borders == "object" ? props.borders.map(border => ` ${border}px`) : ''};
`;

const ButtonLogo = styled.img`
	width: 40px;
	height: 40px;
	pointer-events: none;
`;


export default function ToDoItem(props) {

	function removeItem() {
		console.log('on remove. index: ', props.index);
		props.onItemRemove(props.index);
	}

	return (
		<ToDoItemBox delay={props.delay} className="flexBox rowDirection">
			<ItemTitle className="flexBox alignCenter">{props.title}</ItemTitle>
			{
				!props.done ? (
						<ActionsBox className="flexBox columnDirection">
							<ActionButton
                                disable={(!props.done).toString()}
								onClick={props.onCheck}
								className="desktopPointer" background="#2ECC71" borders={[0, 20, 0, 0]}>
								<ButtonLogo src={checkSVG} />
							</ActionButton>
							<ActionButton
								onClick={removeItem}
								className="desktopPointer" background="#F94646" borders={[0, 0, 20, 0]}>
								<ButtonLogo src={deleteSVG} />
							</ActionButton>
						</ActionsBox>
					) : (
						<ActionsBox className="flexBox columnDirection doneItemStatusBox">
							<ActionButton
								onClick={removeItem}
								className="desktopPointer" background="#F94646" borders={[0, 20, 20, 0]}>
								<ButtonLogo src={deleteSVG} />
							</ActionButton>
						</ActionsBox>
					)
			}
		</ToDoItemBox>
	);

}